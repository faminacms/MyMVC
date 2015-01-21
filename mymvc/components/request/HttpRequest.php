<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once 'Request.php';

class HttpRequest extends Request {

    protected $routeParamName = 'r';
    protected  $defaultRoute = 'index/index';

    public function __construct() {
        $this->params = $_REQUEST;
    }

    public function getRoute() {
        if (!isset($this->params[$this->routeParamName]))
            $this->route = $this->defaultRoute;
        else
            $this->route = $this->params[$this->routeParamName];
        return $this->route;
    }

    public function getDefaultRoute() {
        return $this->defaultRoute;
    }

    public function setDefaultRoute($value) {
        return $this->defaultRoute = $value;
    }

    public function url($route, array $params = []) {
        if (strpos($route, '/') === false) {
            /** route is just an action of the current controller */
            $controllerRoute = str_replace('Controller','',Application::instance()->router->getRequestedController());
            $route = $controllerRoute.'/'.$route;
        }

        return $this->getBaseUrl()."?{$this->routeParamName}={$route}&".http_build_query($params);
    }

    public function getHost() {
        return $_SERVER['HTTP_HOST'];
    }

    public function getBaseUrl($absolute = false) {
        $pathInfo = pathinfo($_SERVER['SCRIPT_NAME']);
        if (!$absolute)
            return $pathInfo['dirname'];
        return $this->getHost().$pathInfo['dirname'];
    }

    public function isPostRequest() {
        return $_SERVER['REQUEST_METHOD'] == 'POST';
    }

    public function isGetRequest() {
        return $_SERVER['REQUEST_METHOD'] == 'GET';
    }

    public function getScheme() {
        return $_SERVER['REQUEST_SCHEME'];
    }

    public function getRemoteIp() {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function getUserAgent() {
        return $_SERVER['HTTP_USER_AGENT'];
    }
}