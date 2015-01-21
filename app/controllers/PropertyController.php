<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK.'core/Controller.php';

class PropertyController extends Controller {
    public function index() {
        $id = Application::instance()->request->param('id',0);

        $sql = "SELECT * FROM property WHERE id = {$id}";
        $property = Application::instance()->db->queryRow($sql);

        return $this->render('index', [
                'prop' => $property
            ]);
    }
}