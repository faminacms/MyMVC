<?php
/**
 * @author: Hung Nguyen
 * @package:
 */

require_once FRAMEWORK.'/core/Component.php';

class Connection extends Component {
    protected $connectionString;
    protected $username;
    protected $password;

    /** @var  PDO $pdo */
    private $pdo;

    public function __construct($connectionString, $username, $password) {
        $this->connectionString = $connectionString;
        $this->username = $username;
        $this->password = $password;

        $this->connect();
    }

    public function connect() {
        $this->pdo = new PDO($this->connectionString, $this->username, $this->password);
    }

    public function query($sql) {
        $statement = $this->pdo->query($sql);
        if (!$statement)
            return [];
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function exec($sql) {
        return $this->pdo->exec($sql);
    }

    public function getConnectionString() {
        return $this->connectionString;
    }

    public function setConnectionString($value) {
        return $this->connectionString = $value;
    }

    public function getUsername() {
        return $this->username;
    }

    public function setUsername($value) {
        return $this->username = $value;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($value) {
        return $this->password = $value;
    }
}