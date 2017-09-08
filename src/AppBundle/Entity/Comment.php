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

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="symfony_demo_comment")
 *
 * Defines the properties of the Comment entity to represent the blog comments.
 * See https://symfony.com/doc/current/book/doctrine.html#creating-an-entity-class
 *
 * Tip: if you have an existing database, you can generate these entity class automatically.
 * See https://symfony.com/doc/current/cookbook/doctrine/reverse_engineering.html
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 */
class Comment
{
    use TimestampableEntity;
    use BlameableUserEntity;

    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

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
     * @var Post[]|PersistentCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Post", mappedBy="comments")
     */
    private $posts;

    /**
     * @var SpeedBump[]|PersistentCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\SpeedBump", mappedBy="comments")
     */
    private $speedBumps;

    public function __construct()
    {
        $this->publishedAt = new \DateTime();
        $this->posts = new ArrayCollection();
        $this->speedBumps = new ArrayCollection();
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
     * @return int
     */
    public function getId()
    {
        return $this->id;
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
     * @return Post
     */
    public function getPost()
    {
        return $this->posts->count() ? $this->posts->first() : null;
    }


    /**
     * @return SpeedBump
     */
    public function getSpeedBump()
    {
        return $this->speedBumps->count() ? $this->speedBumps->first() : null;
    }

    public function setSpeedBump(SpeedBump $speedBump)
    {
        $this->speedBumps = new ArrayCollection(array($speedBump));
    }
}
