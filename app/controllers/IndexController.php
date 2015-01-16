<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

class IndexController {

    public function handleRequest() {
        $con = new Connection(DB_CONNECTION, DB_USER, DB_PASSWORD);

        $sql = "SELECT * FROM property WHERE rating >= 40";
        $data = $con->query($sql);

        return $this->render('index', [
                'data' => $data
            ]);
    }

    protected function render($view, array $data = []) {
        $viewPath = WEB_ROOT.'app/views/';
        $controllerViewFolder = str_replace('Controller','',get_class($this));
        $viewFile = "{$viewPath}{$controllerViewFolder}/{$view}.php";

        extract($data);

        ob_start();
        require $viewFile;
        return ob_get_clean();
    }
}