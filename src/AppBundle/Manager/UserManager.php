<?php

namespace AppBundle\Manager;


use AppBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Prophecy\Argument\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class UserManager
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    /**
     * @var TokenStorageInterface
     */
    private $storage;

    /**
     * UserManager constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param UserPasswordEncoderInterface $encoder
     * @param TokenStorageInterface $storage
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordEncoderInterface $encoder,
        TokenStorageInterface $storage
    ) {
        $this->entityManager = $entityManager;
        $this->encoder = $encoder;
        $this->storage = $storage;
    }


    /**
     * @param User $user
     */
    public function save(User $user)
    {
        if ($user->hasPlainPassword()) {
            $password = $this->encoder->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);
            $user->setPlainPassword(null);
        }

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }

    /**
     * @param User $user
     */
    public function delete(User $user)
    {
        $token = $this->storage->getToken();
        if ($token instanceof TokenInterface) {
            $authenticated = $token->getUser();
            if ($authenticated instanceof User) {
                if ($user->getUsername() === $authenticated->getUsername()) {
                    throw new \RuntimeException(sprintf(
                        'You can not delete the user "%s" because it\'s you',
                        $user->getUsername()
                    ));
                }
            }
        }

        $this->entityManager->remove($user);
        $this->entityManager->flush();
    }

    /**
     * Get a user from the Security Token Storage.
     *
     * @return User|null
     *
     */
    public function getUser(): ?User
    {
        if (null === $token = $this->storage->getToken()) {
            return null;
        }

        if (!is_object($user = $token->getUser())) {
            // e.g. anonymous authentication
            return null;
        }

        return $user;
    }
}