<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK.'core/Component.php';

class Request extends Component {
    protected $route;
    protected $params = [];

    public function param($name, $default = null) {
        return (isset($this->params[$name]) ? $this->params[$name] : $default);
    }
}