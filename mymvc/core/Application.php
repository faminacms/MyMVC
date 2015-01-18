<?php
/**
 * @author: Hung Nguyen
 * @package:
 */
require_once 'Component.php';

class Application extends Component {

    private static $instance;

    protected $components = [];

    public function __construct($config) {
        if ($this::$instance instanceof Application)
            return $this::$instance;

        foreach($config as $property => $value) {
            $this->$property = $value;
        }
        return $this::$instance = $this;
    }

    public function __get($name) {
        if (isset($this->components[$name]))
            return $this->getComponent($name);

        return parent::__get($name);
    }

    public static function instance($config = []) {
        if (self::$instance == null)
            self::$instance = new Application($config);

        return self::$instance;
    }

    public function setComponents($value) {
        $this->components = $value;
    }

    public function getComponent($name) {
        if (!isset($this->components[$name]))
            throw new Exception("There is no component called {$name} configured for the application.");

        if ($this->components[$name] instanceof Component)
            return $this->components[$name];

        $config = $this->components[$name];
        $this->components[$name] = $this->createComponent($config);

        return $this->components[$name];
    }

    public function resolveName($path) {
        $segs = explode('/', $path);
        return end($segs);
    }

    public function resolvePath($path) {
        if (!is_string($path))
            throw new Exception('Invalid path '.print_r($path,1));

        $path = trim($path);
        if ($path == '')
            throw new Exception('An empty string is an invalid path');

        /** File system path */
        if (strpos($path,'//') === 0)
            return substr($path, 1);
        /** absolute path from web root */
        if (strpos($path,'/') === 0)
            return WEB_ROOT.substr($path, 1);
        /** absolute path from framework */
        if (strpos($path,'framework') === 0)
            return FRAMEWORK.substr($path, 9);

        return $path;
    }

    protected function createComponent($config) {
        if (isset($config['class'])) {
            $classPath = $config['class'];
            unset($config['class']);
        } else {
            $classPath = $config;
            $config = [];
        }

        $classPath = $this->resolvePath($classPath);
        $className = $this->resolveName($classPath);
        require_once $classPath.'.php';
        $com = new $className();
        foreach($config as $property => $value) {
            $com->$property = $value;
        }

        return $com;
    }

    public function run() {
        /** parse URL to identify the request and controller to handle it */
        $request = isset($_GET['r']) ? $_GET['r'] : 'index';
        $controllerClass = ucfirst($request).'Controller';
        $controllerPath = WEB_ROOT.'/app/controllers/'.$controllerClass.'.php';

        /** create the controller */
        require_once $controllerPath;
        $controller = new $controllerClass();

        /** ask controller to handle request and get the result */
        echo $controller->handleRequest();

//        /** put the result into layout and return to browser */
//        require_once WEB_ROOT.'/app/views/layouts/main.php';
    }
}