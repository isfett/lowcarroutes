<?php

namespace AppBundle\Entity\Traits;

use AppBundle\Entity\Comment;
use AppBundle\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

trait CommentTrait
{
    /**
     * @var Comment[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Comment", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"createdAt": "DESC"})
     */
    private $comments;

    public function getComments()
    {
        return $this->comments;
    }

    public function addComment(Comment $comment)
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
        }
    }

    public function removeComment(Comment $comment)
    {
        $this->comments->removeElement($comment);
    }
}