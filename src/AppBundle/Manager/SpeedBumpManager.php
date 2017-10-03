<?php

namespace AppBundle\Manager;

use AppBundle\Manager\Traits\LikeTrait;
use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Entity\SpeedBump;

class SpeedBumpManager
{
    use LikeTrait;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var UserManager
     */
    private $userManager;

    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager, UserManager $userManager)
    {
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
    }

    /**
     * @param SpeedBump $speedBump
     */
    public function save(SpeedBump $speedBump)
    {
        $this->entityManager->persist($speedBump);
        $this->entityManager->flush();
    }

    /**
     * @param SpeedBump $speedBump
     */
    public function delete(SpeedBump $speedBump)
    {
        $this->entityManager->remove($speedBump);
        $this->entityManager->flush();
    }

    /**
     * @param SpeedBump $speedBump
     * @return SpeedBump
     */
    public function toggleLike(SpeedBump $speedBump): SpeedBump
    {
        return $this->toggleLikeRelated($speedBump, $this->userManager->getUser(), $this->entityManager);
    }
}
