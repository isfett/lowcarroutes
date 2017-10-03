<?php

namespace AppBundle\Manager;

use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Entity\Like;

class LikeManager
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @param Like $like
     */
    public function save(Like $like)
    {
        $this->entityManager->persist($like);
        $this->entityManager->flush();
    }

    /**
     * @param Like $like
     */
    public function delete(Like $like)
    {
        $this->entityManager->remove($like);
        $this->entityManager->flush();
    }
}
