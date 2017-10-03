<?php

namespace AppBundle\Manager;

use Doctrine\ORM\EntityManagerInterface;
use AppBundle\Entity\Post;
use AppBundle\Manager\Traits\LikeTrait;

class PostManager
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
     * @param Post $post
     */
    public function save(Post $post)
    {
        $this->entityManager->persist($post);
        $this->entityManager->flush();
    }

    /**
     * @param Post $post
     */
    public function delete(Post $post)
    {
        $this->entityManager->remove($post);
        $this->entityManager->flush();
    }

    /**
     * @param Post $post
     * @return Post
     */
    public function toggleLike(Post $post): Post
    {
        return $this->toggleLikeRelated($post, $this->userManager->getUser(), $this->entityManager);
    }
}
