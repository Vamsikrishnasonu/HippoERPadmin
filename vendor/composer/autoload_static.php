<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1054949e0831f5a6eabb5ce47f8e2c9b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1054949e0831f5a6eabb5ce47f8e2c9b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1054949e0831f5a6eabb5ce47f8e2c9b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1054949e0831f5a6eabb5ce47f8e2c9b::$classMap;

        }, null, ClassLoader::class);
    }
}