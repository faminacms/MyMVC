<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK . 'core/Component.php';

class Router extends Component {

    protected $routeMap = [];
    protected $controllerMap = [];

    protected $requestedController = '';

    public function parseRequest($request) {
        $route = $request->Route;
        $pathInfo = pathinfo($route);
        $action = $pathInfo['basename'];
        $controller = $pathInfo['dirname'];

        $this->requestedController = $this->getMappedPath($controller);

        return ['/app/controllers/' . $this->requestedController, $action];
    }

    public function getRequestedController() {
        return $this->requestedController;
    }

    protected function getMappedPath($controller) {
        if (isset($this->controllerMap[$controller]))
            $controller = $this->controllerMap[$controller];

        if (strpos($controller,'/') === false)
            return ucfirst($controller).'Controller';

        $pathInfo = pathinfo($controller);
        $className = $pathInfo['basename'];
        $path = $pathInfo['dirname'].'/';

        return $path . ucfirst($className).'Controller';
    }


}