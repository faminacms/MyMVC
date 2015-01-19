<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once 'Request.php';

class HttpRequest extends Request {

    protected $routeParamName = 'r';

    public function __construct() {
        $this->params = $_REQUEST;
        if (!isset($this->params[$this->routeParamName]))
            $this->route = 'index/index';
        else
            $this->route = $this->params[$this->routeParamName];
    }

    public function getRoute() {
        return $this->route;
    }
}