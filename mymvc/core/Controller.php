<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once 'Component.php';
require_once 'PageView.php';

class Controller extends Component {

    protected function render($view, array $data = []) {
        $view = new PageView($this, $view);
        return $view->render($data);
    }
}