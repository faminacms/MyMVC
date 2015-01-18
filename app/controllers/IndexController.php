<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK.'core/PageView.php';

class IndexController {

    public function handleRequest() {
        $con = Application::instance()->db;

        $sql = "SELECT * FROM property WHERE rating >= 40";
        $data = $con->query($sql);

        return $this->render('index', [
                'data' => $data
            ]);
    }

    protected function render($view, array $data = []) {
        $view = new PageView($this, $view);
        return $view->render($data);
    }
}