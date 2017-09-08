<?php
/**
 * Created by PhpStorm.
 * User: chris
 * Date: 05.09.17
 * Time: 08:19
 */

namespace AppBundle\Entity;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Validator\Validation;

class PointTest extends TestCase
{
    private function getValidator()
    {
        return Validation::createValidatorBuilder()->enableAnnotationMapping()->getValidator();
    }

    public function testValidLatitudes()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setLat("50.000000");
        $point->setLng("50.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));

        $point->setLat("0.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));


        $point->setLat("-50.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));
    }

    public function testInvalidLatitudes()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setLat("120.000000");
        $point->setLng("50.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(1, count($errors));

        $point->setLat("-120.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(1, count($errors));
    }

    public function testValidLongitudes()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setLat("50.000000");
        $point->setLng("150.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));

        $point->setLng("0.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));


        $point->setLng("-150.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));
    }

    public function testInvalidLongitudes()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setLat("50.000000");
        $point->setLng("200.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(1, count($errors));

        $point->setLng("-200.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(1, count($errors));
    }

    public function testValidCoordinates()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setCoordinates("50.229236,10.082316");

        $this->assertEquals("50.229236", $point->getLat());
        $this->assertEquals("10.082316", $point->getLng());

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));

        $point = new Point();
        $point->setCoordinates("50.000000,50.000000");

        $this->assertEquals("50.000000", $point->getLat());
        $this->assertEquals("50.000000", $point->getLng());

        $errors = $validator->validate($point);
        $this->assertEquals(0, count($errors));
    }

    public function testInvalidCoordinates()
    {
        $validator = $this->getValidator();

        $point = new Point();
        $point->setCoordinates("200.000000,200.000000");


        $errors = $validator->validate($point);
        $this->assertEquals(2, count($errors));

        $point = new Point();
        $point->setCoordinates("50.000000,-200.000000");

        $errors = $validator->validate($point);
        $this->assertEquals(1, count($errors));
    }
}
