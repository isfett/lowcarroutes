<?php

namespace AppBundle\Entity\Interfaces;

use AppBundle\Entity\Like;
use AppBundle\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;

interface LikeableInterface
{
    /**
     * @return Like[]|ArrayCollection
     */
    public function getLikes();

    /**
     * @param Like $like
     * @return void
     */
    public function addLike(Like $like);

    /**
     * @param Like $like
     * @return void
     */
    public function removeLike(Like $like);

    /**
     * @param User $user
     * @return Like|null
     */
    public function likedByUser(User $user);
}