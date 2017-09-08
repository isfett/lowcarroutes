<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PointRepository")
 * @ORM\Table(name="points")
 *
 *
 * @author Chris Stenke <chris@isfett.com>
 */
class Point
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
     * @var string
     *
     * @ORM\Column(type="decimal", precision=10, scale=8)
     * @Assert\NotNull()
     */
    private $lat;

    /**
     * @var string
     *
     * @ORM\Column(type="decimal", precision=11, scale=8)
     * @Assert\NotNull()
     */
    private $lng;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $linkId;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getLat(): string
    {
        return $this->lat;
    }

    /**
     * @param string $lat
     */
    public function setLat(string $lat)
    {
        $this->lat = $lat;
    }

    /**
     * @return string
     */
    public function getLng(): string
    {
        return $this->lng;
    }

    /**
     * @param string $lng
     */
    public function setLng(string $lng)
    {
        $this->lng = $lng;
    }

    /**
     * @return int
     */
    public function getLinkId(): int
    {
        return $this->linkId;
    }

    /**
     * @param int $linkId
     */
    public function setLinkId(int $linkId)
    {
        $this->linkId = $linkId;
    }

    /**
     * @Assert\IsTrue(message="point.invalid_lat")
     */
    public function isValidLat(): bool
    {
        if (preg_match("/^-?([0-9]|[1-8][0-9]|90)\.{1}\d{1,6}$/", $this->lat)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @Assert\IsTrue(message="point.invalid_lng")
     */
    public function isValidLng(): bool
    {
        if(preg_match("/^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}/",$this->lng)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string $latLngStr
     */
    public function setCoordinates(string $latLngStr)
    {
        if(preg_match("/(-?[0-9]+(.[0-9]+)?),(\ ?)(-?[0-9]+(.[0-9]+)?)/",$latLngStr, $matches))
        {
            $this->lat = $matches[1];
            $this->lng = $matches[4];
        }
    }
}
