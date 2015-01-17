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

    public function connect() {
        $this->pdo = new PDO($this->connectionString, $this->username, $this->password);
    }

    public function query($sql) {
        if ($this->pdo == null)
            $this->connect();
        $statement = $this->pdo->query($sql);
        if (!$statement)
            return [];
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function exec($sql) {
        if ($this->pdo == null)
            $this->connect();
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