<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

class Component {
    public function __get($name) {
        $method = "get{$name}";
        return call_user_func(array($this, $method));
    }

    public function __set($name, $value) {
        $method = "set{$name}";
        return call_user_func(array($this, $method), $value);
    }
}