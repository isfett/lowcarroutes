<?php

namespace AppBundle\Entity\Traits;

use AppBundle\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\Like;
use Doctrine\Common\Collections\ArrayCollection;

trait LikeTrait
{
    /**
     * @var Like[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Like", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"createdAt": "DESC"})
     */
    private $likes;

    public function getLikes()
    {
        return $this->likes;
    }

    /**
     * @param Like $like
     */
    public function addLike(Like $like)
    {
        if (!$this->likes->contains($like)) {
            $this->likes->add($like);
        }
    }

    /**
     * @param Like $like
     */
    public function removeLike(Like $like)
    {
        $this->likes->removeElement($like);
    }

    /**
     * @param User $user
     * @return Like|null
     */
    public function likedByUser(User $user): ?Like
    {
        foreach($this->likes as $like)
        {
            if($user === $like->getCreatedBy())
            {
                return $like;
            }
        }
        return null;
    }
}