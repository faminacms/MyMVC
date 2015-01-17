<?php
/** include core files */
$config = require_once (__DIR__.'/../app/config/main.php');
require_once FRAMEWORK.'/core/Application.php';

$app = Application::instance($config);
$app->run();
?>