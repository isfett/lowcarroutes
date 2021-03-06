<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Interfaces\LikeableInterface;
use AppBundle\Entity\Traits\BlameableUserEntity;
use AppBundle\Entity\Traits\CommentTrait;
use AppBundle\Entity\Traits\IdTrait;
use AppBundle\Entity\Traits\LikeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\SoftDeleteable\Traits\SoftDeleteableEntity;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Entity\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SpeedBumpRepository")
 * @ORM\Table(name="speedbumps")
 *
 * @Vich\Uploadable
 * @Gedmo\Loggable
 *
 * @ORM\AssociationOverrides({
 *    @ORM\AssociationOverride(name="likes",
 *      joinTable=@ORM\JoinTable(
 *          name="speedbump_likes"
 *      )
 *    ),
 *    @ORM\AssociationOverride(name="comments",
 *      joinTable=@ORM\JoinTable(
 *          name="speedbump_comments"
 *      )
 *    )
 * })
 *
 *
 */
class SpeedBump implements LikeableInterface
{
    const STATUS_REGISTERED = 1;
    const STATUS_CONFIRMED = 2;
    const STATUS_REPORTED = 3;
    const STATUS_DELETED = 4;

    use IdTrait;
    use TimestampableEntity;
    use SoftDeleteableEntity;
    use BlameableUserEntity;
    use LikeTrait;
    use CommentTrait;

    /**
     * @var Like[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Like",inversedBy="speedBumps", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"createdAt": "DESC"})
     */
    private $likes;

    /**
     * @var Comment[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Comment", inversedBy="speedBumps", cascade={"persist"})
     * @ORM\JoinTable()
     * @ORM\OrderBy({"createdAt": "DESC"})
     */
    private $comments;

    /**
     * @var Point
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Point", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotNull
     */
    private $point;

    /**
     * @var integer $height
     *
     * @ORM\Column(type="smallint")
     * @Gedmo\Versioned
     * @Assert\NotNull
     * @Assert\GreaterThan(0)
     * @Assert\LessThan(15)
     */
    private $height;

    /**
     * @var int $status
     *
     * @ORM\Column(type="smallint")
     * @Gedmo\Versioned
     * @Assert\NotNull
     */
    private $status;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="speedbumpt_image", fileNameProperty="imageName")
     *
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $imageName;

    /**
     * SpeedBump constructor.
     */
    public function __construct()
    {
        $this->status = self::STATUS_REGISTERED;
        $this->comments = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getStatus(): int
    {
        return $this->status;
    }

    /**
     * @param int $status
     */
    public function setStatus(int $status)
    {
        $this->status = $status;
    }

    /**
     * @return Point
     */
    public function getPoint(): Point
    {
        return $this->point;
    }

    /**
     * @param Point $point
     */
    public function setPoint(Point $point)
    {
        $this->point = $point;
    }

    /**
     * @return int
     */
    public function getHeight(): int
    {
        return $this->height;
    }

    /**
     * @param int $height
     */
    public function setHeight($height)
    {
        $this->height = $height;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $image
     *
     * @return SpeedBump
     */
    public function setImageFile(File $image = null)
    {
        $this->imageFile = $image;

        if ($image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTime();
        }

        return $this;
    }

    /**
     * @return File|null
     */
    public function getImageFile()
    {
        return $this->imageFile;
    }

    /**
     * @param string $imageName
     */
    public function setImageName($imageName)
    {
        $this->imageName = $imageName;
    }

    /**
     * @return string|null
     */
    public function getImageName()
    {
        return $this->imageName;
    }

    /**
     * @return bool
     */
    public function hasImage(): bool
    {
        return (bool)$this->imageName;
    }
}
