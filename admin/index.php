<?php
/** include core files */
$config = require_once (__DIR__.'/config/main.php');
require_once FRAMEWORK.'/core/Application.php';

$app = Application::instance($config);
$app->run();
?>