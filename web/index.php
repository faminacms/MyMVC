<?php
/** include core files */
require_once __DIR__.'/../app/config/main.php';
require_once FRAMEWORK.'/components/db/Connection.php';

/** parse URL to identify the request and controller to handle it */
$request = isset($_GET['r']) ? $_GET['r'] : 'index';
$controllerClass = ucfirst($request).'Controller';
$controllerPath = WEB_ROOT.'/app/controllers/'.$controllerClass.'.php';

/** create the controller */
require_once $controllerPath;
$controller = new $controllerClass();

/** ask controller to handle request and get the result */
$content = $controller->handleRequest();

/** put the result into layout and return to browser */
require_once WEB_ROOT.'/app/views/layouts/main.php';
?>