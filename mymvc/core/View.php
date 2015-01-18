<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once 'Component.php';

class View extends Component {
    protected $viewPath;
    protected $view = '';
    protected $controller;

    public function __construct($controller, $view = '') {
        $this->viewPath = WEB_ROOT.'app/views/';
        $this->controller = $controller;
        $this->view = $view;
    }

    public function render(array $data = []) {
        $file = $this->getViewFile();
        if ($file) {
            extract($data);
            /** create the $context variable for view file */
            $context = $this->controller;
            ob_start();
            require $file;
            return ob_get_clean();
        } else {
            return '';
        }
    }

    protected  function getViewFile() {
        if (strpos($this->view, '/') !== 0) {
            $controllerViewFolder = str_replace('Controller','',get_class($this->controller));
            $viewFile = "{$this->viewPath}{$controllerViewFolder}/{$this->view}.php";
        } else {
            $viewFile = $this->viewPath.$this->view.'.php';
        }

        if (file_exists($viewFile))
            return $viewFile;
        else
            throw new Exception("Unable to locate view {$this->view}. File {$viewFile} is not found.");
    }
}