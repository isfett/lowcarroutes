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

use AppBundle\Entity\Interfaces\LikeableInterface;
use AppBundle\Entity\Traits\BlameableUserEntity;
use AppBundle\Entity\Traits\IdTrait;
use AppBundle\Entity\Traits\LikeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity
 * @ORM\Table(name="comments")
 *
 * @ORM\AssociationOverrides({
 *    @ORM\AssociationOverride(name="likes",
 *      joinTable=@ORM\JoinTable(
 *          name="comment_likes"
 *      )
 *    )
 * })
 *
 */
class Comment implements LikeableInterface
{
    use IdTrait;
    use TimestampableEntity;
    use BlameableUserEntity;
    use LikeTrait;

    /**
     * @var User
     * @Gedmo\Blameable(on="create")
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="comments", cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     */
    protected $createdBy;

    /**
     * @var Like[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Like",inversedBy="comments", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"createdAt": "DESC"})
     */
    private $likes;

    /**
     * @var string
     *
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="comment.blank")
     * @Assert\Length(
     *     min=25,
     *     minMessage="comment.too_short",
     *     max=10000,
     *     maxMessage="comment.too_long"
     * )
     */
    private $content;

    /**
     * @var Post[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Post", mappedBy="comments")
     */
    private $posts;

    /**
     * @var SpeedBump[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\SpeedBump", mappedBy="comments")
     */
    private $speedBumps;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->speedBumps = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

    /**
     * @Assert\IsTrue(message="comment.is_spam")
     * @return bool
     */
    public function isLegitComment()
    {
        $containsInvalidCharacters = false !== mb_strpos($this->content, '@');

        return !$containsInvalidCharacters;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return Post[]|ArrayCollection|PersistentCollection
     */
    public function getPosts()
    {
        return $this->posts;
    }

    /**
     * @return bool
     */
    public function isPostComment() {
        return $this->posts->count() > 0;
    }

    /**
     * @return Post
     */
    public function getPost()
    {
        return $this->isPostComment() ? $this->posts->first() : null;
    }

    public function isSpeedBumpComment()
    {
        return $this->speedBumps->count() > 0;
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
        return $this->isSpeedBumpComment() ? $this->speedBumps->first() : null;
    }


    /**
     * @param string $type
     * @return bool
     */
    public function is($type = 'post')
    {
        $funcName = 'is'.ucfirst($type).'Like';
        if(is_callable(array($this, $funcName)))
        {
            return call_user_func(array($this, $funcName));
        }
        return false;
    }

    /**
     * @return Post|SpeedBump|null
     */
    public function getRelated()
    {
        if($this->isPostComment())
        {
            return $this->getPost();
        }
        else if($this->isSpeedBumpComment())
        {
            return $this->getSpeedBump();
        }
        return null;
    }
}
