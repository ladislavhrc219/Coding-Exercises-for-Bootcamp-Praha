<?php

class Games 
{
    public $id = null;
    public $name = null;
    public $image_url = null;
    public $description = null;
    public $rating = null;
    public $released_at = null;

    public function update () 
    {
        // if PK is empty, return false 
        if (!$this->id) {
            return false;
        }

        $query = '
        UPDATE `gaems`
        SET `games` = ?,
            `slug` = ?
        WHERE `id` = ?
        ';

        update($query, [
            $this->games,
            $this->games,
            $this->id
        ]);


    }
    // In this class declare a method insert()
    // This method should try to insert the current object into the database.
    // inside of the method run insert sql query
        // public function insert() 
    // {   
    //     $query = "
    //     INSERT 
    //     INTO `region`
    //     (`name`, `slug`)
    //     VALUES 
    //     (?, ?)
    //     ";

    //     // run the insert query ndatabase, supllying this objects values

    //     insert($query, [$this -> name, $this->slug]);

    //     $this->id = last_insert_id();


    // }

    

}