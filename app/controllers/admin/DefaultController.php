<?php
/**
 * @author: Hung Nguyen
 * @package:
 */
require_once FRAMEWORK.'core/Controller.php';
class DefaultController extends Controller {

    public function index() {
        $this->render('index');
    }
}