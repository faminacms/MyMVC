<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once 'View.php';

class PageView extends View {
    protected $pageTitle;

    protected $layout = 'main';

    public function render(array $data = []) {
        $content = parent::render($data);
        $this->view = '/layouts/'.$this->layout;
        return parent::render(['content' => $content]);
    }
}