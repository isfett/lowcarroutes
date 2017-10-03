<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Interfaces\LikeableInterface;
use AppBundle\Entity\Traits\IdTrait;
use AppBundle\Entity\Traits\LikeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="dummylikes")
 *
 * @ORM\AssociationOverrides({
 *    @ORM\AssociationOverride(name="likes",
 *      joinTable=@ORM\JoinTable(
 *          name="dummylike_likes"
 *      )
 *    )
 * })
 *
 *
 */
class DummyLike implements LikeableInterface
{
    use IdTrait;
    use LikeTrait;

    public function __construct()
    {
        $this->likes = new ArrayCollection();
    }
}
