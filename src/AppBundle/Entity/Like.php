<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\Entity;

use AppBundle\Entity\Traits\BlameableUserEntity;
use AppBundle\Entity\Traits\IdTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity
 * @ORM\Table(name="likes")
 *
 */
class Like
{
    use IdTrait;
    use TimestampableEntity;
    use BlameableUserEntity;

    /**
     * @var User
     * @Gedmo\Blameable(on="create")
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User",inversedBy="likes", cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     */
    protected $createdBy;

    /**
     * @var Post[]|PersistentCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Post", mappedBy="likes")
     */
    private $posts;

    /**
     * @var Comment[]|PersistentCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Comment", mappedBy="likes")
     */
    private $comments;

    /**
     * @var SpeedBump[]|PersistentCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\SpeedBump", mappedBy="likes")
     */
    private $speedBumps;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->speedBumps = new ArrayCollection();
    }

    /**
     * @return Post[]|ArrayCollection|PersistentCollection
     */
    public function getPosts()
    {
        return $this->posts;
    }

    /**
     * @return Post
     */
    public function getPost()
    {
        return $this->isPostLike() ? $this->posts->first() : null;
    }

    /**
     * @return bool
     */
    public function isPostLike()
    {
        return $this->posts->count() > 0;
    }

    /**
     * @return SpeedBump[]|ArrayCollection|PersistentCollection
     */
    public function getSpeedBumps()
    {
        return $this->speedBumps;
    }

    /**
     * @return SpeedBump
     */
    public function getSpeedBump()
    {
        return $this->isSpeedBumpLike() ? $this->speedBumps->first() : null;
    }

    /**
     * @return bool
     */
    public function isSpeedBumpLike()
    {
        return $this->speedBumps->count() > 0;
    }

    /**
     * @return Comment[]|ArrayCollection|PersistentCollection
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * @return Comment
     */
    public function getComment()
    {
        return $this->isCommentLike() ? $this->comments->first(): null;
    }

    /**
     * @return bool
     */
    public function isCommentLike()
    {
        return $this->comments->count() > 0;
    }

    /**
     * @param string $type
     * @return bool
     */
    public function is($type = 'comment')
    {
        $funcName = 'is'.ucfirst($type).'Like';
        if(is_callable(array($this, $funcName)))
        {
            return call_user_func(array($this, $funcName));
        }
        return false;
    }

    /**
     * @return Comment|Post|SpeedBump|null
     */
    public function getRelated()
    {
        if($this->isPostLike())
        {
            return $this->getPost();
        }
        else if($this->isCommentLike())
        {
            return $this->getComment();
        }
        else if($this->isSpeedBumpLike())
        {
            return $this->getSpeedBump();
        }
        return null;
    }
}
