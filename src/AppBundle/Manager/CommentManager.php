<?php

namespace AppBundle\Manager;

use AppBundle\Manager\Traits\LikeTrait;
use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Entity\Comment;

class CommentManager
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
     * @param Comment $comment
     */
    public function save(Comment $comment)
    {
        $this->entityManager->persist($comment);
        $this->entityManager->flush();
    }

    /**
     * @param Comment $comment
     */
    public function delete(Comment $comment)
    {
        $this->entityManager->remove($comment);
        $this->entityManager->flush();
    }

    /**
     * @param Comment $comment
     * @return Comment
     */
    public function toggleLike(Comment $comment): Comment
    {
        return $this->toggleLikeRelated($comment, $this->userManager->getUser(), $this->entityManager);
    }
}
