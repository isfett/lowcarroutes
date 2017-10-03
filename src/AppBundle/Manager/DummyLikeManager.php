<?php

namespace AppBundle\Manager;

use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Entity\DummyLike;
use AppBundle\Manager\Traits\LikeTrait;

class DummyLikeManager
{
    use LikeTrait;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var DummyLikeUserManager
     */
    private $userManager;

    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager, DummyLikeUserManager $userManager)
    {
        $this->entityManager = $entityManager;
        $this->userManager = $userManager;
    }

    /**
     * @param DummyLike $dummyLike
     */
    public function save(DummyLike $dummyLike)
    {
        $this->entityManager->persist($dummyLike);
        $this->entityManager->flush();
    }

    /**
     * @param DummyLike $dummyLike
     */
    public function delete(DummyLike $dummyLike)
    {
        $this->entityManager->remove($dummyLike);
        $this->entityManager->flush();
    }

    /**
     * @param DummyLike $dummyLike
     * @return DummyLike
     */
    public function toggleLike(DummyLike $dummyLike): DummyLike
    {
        return $this->toggleLikeRelated($dummyLike, $this->userManager->getUser(), $this->entityManager);
    }
}
