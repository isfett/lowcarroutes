<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Comment;
use AppBundle\Entity\Post;
use AppBundle\Entity\SpeedBump;
use AppBundle\Events;
use AppBundle\Form\CommentType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * Controller used to manage blog contents in the public part of the site.
 *
 * @Route("/speedbump")
 *
 * @author Chris Stenke <chris@isfett.com>
 */
class SpeedBumpController extends Controller
{
    /**
     * @Route("/", defaults={"page": "1","_format"="html"}, name="speedbump_index")
     * @Method("GET")
     * @Cache(smaxage="10")
     *
     */
    public function indexAction($page)
    {
        $em = $this->getDoctrine()->getManager();
        $speedBumps = $em->getRepository(SpeedBump::class)->findLatest($page);

        return $this->render('speedbump/index.html.twig', ['speedBumps' => $speedBumps]);
    }

    /**
     * @Route("/all", defaults={"page": "1", "_format"="json"}, name="speedbump_all")
     * @Method("GET")
     * @Cache(smaxage="10")
     *
     */
    public function indexAllAction($page)
    {
        $em = $this->getDoctrine()->getManager();
        $speedBumps = $em->getRepository(SpeedBump::class)->findAll();
        $encoders = array(new JsonEncoder());
        $normalizer = new ObjectNormalizer();
        $normalizer->setIgnoredAttributes(array('createdBy','updatedBy'));
        $serializer = new Serializer(array($normalizer, new DateTimeNormalizer()), $encoders);

        return new Response($serializer->serialize($speedBumps,'json'));
    }

    /**
     * @Route("/map", name="speedbump_maps")
     * @Method("GET")
     * @Cache(smaxage="10")
     */
    public function mapAction()
    {
        $em = $this->getDoctrine()->getManager();
        $speedBumps = $em->getRepository(SpeedBump::class)->findAll();

        return $this->render('speedbump/map.html.twig',['speedBumps' => $speedBumps]);
    }

    /**
     * @Route("/{id}", name="speedbump_show")
     * @Method("GET")
     *
     * NOTE: The $post controller argument is automatically injected by Symfony
     * after performing a database query looking for a Post with the 'slug'
     * value given in the route.
     * See https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html
     */
    public function showAction(SpeedBump $speedBump)
    {
        // Symfony provides a function called 'dump()' which is an improved version
        // of the 'var_dump()' function. It's useful to quickly debug the contents
        // of any variable, but it's not available in the 'prod' environment to
        // prevent any leak of sensitive information.
        // This function can be used both in PHP files and Twig templates. The only
        // requirement is to have enabled the DebugBundle.
        if ('dev' === $this->getParameter('kernel.environment')) {
            dump($speedBump, $this->getUser(), new \DateTime());
        }

        return $this->render('speedbump/show.html.twig', ['speedBump' => $speedBump]);
    }
}
