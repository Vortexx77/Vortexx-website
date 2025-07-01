<?php  //database connection

class Dbconnect{
    private $server ='server430';
    private $dbname ='u949264115_theVortexx';
    private $username ='u949264115_vortexx';
    private $pass ='Vortexx@admin1';

    public function connect(){
        try {
            $conn = new PDO("mysql:host=$this->server;dbname=$this->dbname", $this->username, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

}