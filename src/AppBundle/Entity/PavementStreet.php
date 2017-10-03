<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Traits\BlameableUserEntity;
use AppBundle\Entity\Traits\CommentTrait;
use AppBundle\Entity\Traits\IdTrait;
use AppBundle\Entity\Traits\LikeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PavementStreetRepository")
 * @ORM\Table(name="pavementstreets")
 *
 * Defines the properties of the SpeedBump entity to represent the speed bumps for the navigation.
 *
 * @author Chris Stenke <chris@isfett.com>
 *
 * @ORM\AssociationOverrides({
 *    @ORM\AssociationOverride(name="likes",
 *      joinTable=@ORM\JoinTable(
 *          name="pavementstreet_likes"
 *      )
 *    ),
 *    @ORM\AssociationOverride(name="comments",
 *      joinTable=@ORM\JoinTable(
 *          name="pavementstreet_comments"
 *      )
 *    )
 * })
 *
 *
 */
class PavementStreet
{
    use IdTrait;
    use TimestampableEntity;
    use BlameableUserEntity;
    use LikeTrait;
    use CommentTrait;

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
        $this->likes = new ArrayCollection();
        $this->comments = new ArrayCollection();
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
