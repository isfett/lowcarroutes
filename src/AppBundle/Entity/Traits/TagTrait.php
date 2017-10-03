<?php

namespace AppBundle\Entity\Traits;

use AppBundle\Entity\Tag;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

trait TagTrait
{
    /**
    /**
     * @var Tag[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Tag", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"name": "ASC"})
     * @Assert\Count(max="10", maxMessage="post.too_many_tags")
     */
    private $tags;


    public function addTag(Tag $tag)
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
        }
    }

    public function removeTag(Tag $tag)
    {
        $this->tags->removeElement($tag);
    }

    public function getTags()
    {
        return $this->tags;
    }
}