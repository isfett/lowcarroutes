<?php
/**
 * Created by PhpStorm.
 * User: chris
 * Date: 05.09.17
 * Time: 08:19
 */

namespace AppBundle\Entity;

use Gedmo\Loggable\Entity\LogEntry;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class SpeedBumpTest extends KernelTestCase
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $em;

    /**
     * @var ValidatorInterface
     */
    private $validator;

    /**
     * {@inheritDoc}
     */
    protected function setUp()
    {
        self::bootKernel();
        
        $this->validator = Validation::createValidatorBuilder()->enableAnnotationMapping()->getValidator();

        $this->em = static::$kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    /**
     * {@inheritDoc}
     */
    protected function tearDown()
    {
        parent::tearDown();

        $this->em->close();
        $this->em = null; // avoid memory leaks
    }


    public function testRequiredFields()
    {
        $point = new Point();
        $point->setCoordinates("50.000000,50.000000");

        $speedBump = new SpeedBump();

        $errors = $this->validator->validate($speedBump);
        $this->assertEquals(2, count($errors));

        $speedBump->setHeight(10);
        $speedBump->setPoint($point);

        $errors = $this->validator->validate($speedBump);
        $this->assertEquals(0, count($errors));
    }

    public function testMinMaxHeight()
    {
        $point = new Point();
        $point->setCoordinates("50.000000,50.000000");

        $speedBump = new SpeedBump();
        $speedBump->setPoint($point);

        $speedBump->setHeight(0);
        $errors = $this->validator->validate($speedBump);
        $this->assertEquals(1, count($errors));
        $this->assertEquals('This value should be greater than 0.', $errors[0]->getMessage());

        $speedBump->setHeight(15);
        $errors = $this->validator->validate($speedBump);
        $this->assertEquals(1, count($errors));
        $this->assertEquals('This value should be less than 15.', $errors[0]->getMessage());

        $speedBump->setHeight(5);
        $errors = $this->validator->validate($speedBump);
        $this->assertEquals(0, count($errors));
    }

    public function testNewSpeedBumpStatusRegistered()
    {
        $point = new Point();
        $point->setCoordinates("50.000000,50.000000");

        $speedBump = new SpeedBump();
        $speedBump->setPoint($point);
        $speedBump->setHeight(3);

        $this->assertEquals(SpeedBump::STATUS_REGISTERED, $speedBump->getStatus());
    }

    public function testComments()
    {
        $point = new Point();
        $point->setCoordinates("50.000000,50.00000");
        $point->setLinkId(1);

        $comment = new Comment();
        $comment->setContent('test');

        $speedBump = new SpeedBump();
        $speedBump->setPoint($point);
        $speedBump->setHeight(5);
        $speedBump->addComment($comment);

        $this->em->persist($speedBump);
        $this->em->flush();

        $this->assertCount(1, $speedBump->getComments());
        $this->assertEquals('test', $speedBump->getComments()->first()->getContent());
    }

    public function testVersioned()
    {
        $point = new Point();
        $point->setCoordinates("50.000000,50.00000");
        $point->setLinkId(1);

        $speedBump = new SpeedBump();
        $speedBump->setPoint($point);
        $speedBump->setHeight(5);

        $this->em->persist($speedBump);
        $this->em->flush();

        $logEntryRepository = $this->em->getRepository('Gedmo\Loggable\Entity\LogEntry');

        $logs = $logEntryRepository->getLogEntries($speedBump);
        $this->assertCount(1, $logs);

        $speedBump->setHeight(10);
        $this->em->persist($speedBump);
        $this->em->flush();

        $logs = $logEntryRepository->getLogEntries($speedBump);
        $this->assertCount(2, $logs);

        $logs = array_reverse($logs);

        /** @var LogEntry $firstLogEntry */
        $firstLogEntry = current($logs);
        $data = $firstLogEntry->getData();
        $height = $data['height'];
        $this->assertEquals(5,$height);

        /** @var LogEntry $secondLogEntry */
        $secondLogEntry = next($logs);
        $data = $secondLogEntry->getData();
        $height = $data['height'];
        $this->assertEquals(10,$height);

        $logEntryRepository->revert($speedBump, 1);
        $this->assertEquals(5, $speedBump->getHeight());

        $logEntryRepository->revert($speedBump, 2);
        $this->assertEquals(10, $speedBump->getHeight());
    }
}
