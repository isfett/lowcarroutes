<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Point;
use AppBundle\Entity\SpeedBump;
use AppBundle\Entity\User;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

/**
 * Defines the sample users to load in the database before running the unit and
 * functional tests. Execute this command to load the data.
 *
 *   $ php bin/console doctrine:fixtures:load
 *
 * See https://symfony.com/doc/current/bundles/DoctrineFixturesBundle/index.html
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
class SpeedBumpFixtures extends AbstractFixture implements ContainerAwareInterface
{
    use ContainerAwareTrait;

    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        $point = new Point();
        $point->setCoordinates("50.229236,10.082316");
        $point->setLinkId(3933995);

        $speedBump = new SpeedBump();
        $speedBump->setCreatedBy(current($manager->getRepository(User::class)->findAll()));
        $speedBump->setUpdatedBy(current($manager->getRepository(User::class)->findAll()));
        $speedBump->setHeight(5);
        $speedBump->setPoint($point);
        $speedBump->setStatus(SpeedBump::STATUS_CONFIRMED);

        $manager->persist($speedBump);
        $manager->flush();
    }
}
