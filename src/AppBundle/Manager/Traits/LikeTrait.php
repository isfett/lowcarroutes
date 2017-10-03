<?php

namespace AppBundle\Manager\Traits;


use AppBundle\Entity\Comment;
use AppBundle\Entity\Interfaces\LikeableInterface;
use AppBundle\Entity\Like;
use AppBundle\Entity\Post;
use AppBundle\Entity\SpeedBump;
use AppBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

trait LikeTrait
{
    /**
     * @param LikeableInterface $obj
     * @param User $user
     * @return Like|null
     */
    protected function getLikeFromUser(LikeableInterface $obj, User $user): ?Like
    {
        return $obj->likedByUser($user);
    }

    /**
     * @param LikeableInterface $obj
     * @param User $user
     * @return bool
     */
    protected function isLikedByUser(LikeableInterface $obj, User $user)
    {
        return $this->getLikeFromUser($obj, $user) instanceof Like;
    }

    /**
     * @param LikeableInterface $obj
     * @param User $user
     * @param EntityManagerInterface $entityManager
     * @return LikeableInterface
     */
    protected function likeRelated(LikeableInterface $obj, User $user, EntityManagerInterface $entityManager)
    {
        $like = new Like();
        $like->setCreatedBy($user);
        $like->setUpdatedBy($user);
        $obj->addLike($like);
        $entityManager->persist($obj);
        $entityManager->flush();
        return $obj;
    }

    /**
     * @param LikeableInterface $obj
     * @param User $user
     * @param EntityManagerInterface $entityManager
     * @return LikeableInterface
     */
    protected function unlikeRelated(LikeableInterface $obj, User $user, EntityManagerInterface $entityManager)
    {
        $like = $this->getLikeFromUser($obj, $user);
        if(null !== $like)
        {
            $obj->removeLike($like);
            $entityManager->remove($like);
            $entityManager->persist($obj);
            $entityManager->flush();
        }
        return $obj;
    }

    /**
     * @param LikeableInterface $obj
     * @param User $user
     * @param EntityManagerInterface $entityManager
     * @return Comment|Post|SpeedBump|LikeableInterface
     */
    protected function toggleLikeRelated(LikeableInterface $obj, User $user, EntityManagerInterface $entityManager)
    {
        if($this->isLikedByUser($obj, $user))
        {
            return $this->unlikeRelated($obj, $user, $entityManager);
        }
        return $this->likeRelated($obj, $user, $entityManager);
    }
}