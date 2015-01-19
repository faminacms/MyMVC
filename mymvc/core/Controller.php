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

    public function runAction($action, $params) {
        $ref = new ReflectionClass($this);
        if ($ref->hasMethod($action)) {
            $method = $ref->getMethod($action);
            if ($method->isPublic()) {
                return call_user_func(array($this, $action), $params);
            }
        }

        throw new Exception(get_class($this)." needs to define public function {$action}() to handle this request.");
    }
}