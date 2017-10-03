<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Comment;
use AppBundle\Entity\DummyLike;
use AppBundle\Entity\Like;
use AppBundle\Entity\Post;
use AppBundle\Entity\SpeedBump;
use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * Controller used to manage blog contents in the public part of the site.
 *
 * @Route("/like")
 *
 * @author Chris Stenke <chris@isfett.com>
 */
class LikeController extends Controller
{
    /**
     * @Route("/like_dummy/{id}", name="like_dummy")
     * @Method("POST")
     * @ParamConverter("dummyLike", class="AppBundle:DummyLike")
     *
     */
    public function dummyAction(DummyLike $dummyLike)
    {
        $dummyLikeManager = $this->get('appbundle.manager.dummylike');
        $dummyLike = $dummyLikeManager->toggleLike($dummyLike);
        return new Response(json_encode(array('likeCount'=>$dummyLike->getLikes()->count())));
    }

    /**
     * @Route("/like_post/{id}", name="like_post")
     * @Method("POST")
     * @ParamConverter("post", class="AppBundle:Post")
     *
     */
    public function postAction(Post $post)
    {
        $postManager = $this->get('appbundle.manager.post');
        $post = $postManager->toggleLike($post);
        return new Response(json_encode(array('likeCount'=>$post->getLikes()->count())));
    }

    /**
     * @Route("/like_comment/{id}", name="like_comment")
     * @Method("POST")
     * @ParamConverter("comment", class="AppBundle:Comment")
     *
     */
    public function commentAction(Comment $comment)
    {
        $commentManager = $this->get('appbundle.manager.comment');
        $comment = $commentManager->toggleLike($comment);
        return new Response(json_encode(array('likeCount'=>$comment->getLikes()->count())));
    }

    /**
     * @Route("/like_speedbump/{id}", name="like_speedbump")
     * @Method("POST")
     * @ParamConverter("speedBump", class="AppBundle:SpeedBump")
     *
     */
    public function speedbumpAction(SpeedBump $speedBump)
    {
        $speedBumpManager = $this->get('appbundle.manager.speedbump');
        $speedBump = $speedBumpManager->toggleLike($speedBump);
        return new Response(json_encode(array('likeCount'=>$speedBump->getLikes()->count())));
    }
}
