<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

define('WEB_ROOT', __DIR__.'/../../');
define('FRAMEWORK', WEB_ROOT.'/mymvc/');
return [
    'Components' => [
        'db' => [
            'class' => 'framework/components/db/Connection',
            'ConnectionString' => 'mysql:host=localhost;dbname=simply5;port=3306',
            'Username' => 'root',
            'Password' => 'mysql'
        ],
        'request' => [
            'class' => 'framework/components/request/HttpRequest'
        ]
    ],
];
