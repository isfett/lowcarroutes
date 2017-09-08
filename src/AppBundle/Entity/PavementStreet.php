<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PavementStreetRepository")
 * @ORM\Table(name="pavement_streets")
 *
 * Defines the properties of the SpeedBump entity to represent the speed bumps for the navigation.
 *
 * @author Chris Stenke <chris@isfett.com>
 */
class PavementStreet
{
    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime")
     * @Assert\DateTime
     */
    private $publishedAt;

    /**
     * @var User
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @var Point
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Point")
     * @ORM\JoinColumn(nullable=false)
     */
    private $pointStart;

    /**
     * @var Point
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Point")
     * @ORM\JoinColumn(nullable=false)
     */
    private $pointEnd;


    public function __construct()
    {
        $this->publishedAt = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getPublishedAt(): \DateTime
    {
        return $this->publishedAt;
    }

    public function setPublishedAt(\DateTime $publishedAt)
    {
        $this->publishedAt = $publishedAt;
    }

    /**
     * @return User
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param User $author
     */
    public function setAuthor(User $author)
    {
        $this->author = $author;
    }

    /**
     * @return Point
     */
    public function getPointStart(): Point
    {
        return $this->pointStart;
    }

    /**
     * @param Point $pointStart
     */
    public function setPointStart(Point $pointStart)
    {
        $this->pointStart = $pointStart;
    }

    /**
     * @return Point
     */
    public function getPointEnd(): Point
    {
        return $this->pointEnd;
    }

    /**
     * @param Point $pointEnd
     */
    public function setPointEnd(Point $pointEnd)
    {
        $this->pointEnd = $pointEnd;
    }
}
