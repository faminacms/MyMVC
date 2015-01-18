<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK.'core/Controller.php';

class IndexController extends Controller {

    public function handleRequest() {
        $con = Application::instance()->db;

        $sql = "SELECT * FROM property WHERE rating >= 40";
        $data = $con->query($sql);

        return $this->render('index', [
                'data' => $data
            ]);
    }

}