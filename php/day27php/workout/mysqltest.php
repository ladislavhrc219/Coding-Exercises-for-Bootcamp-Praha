<?php
// require_once 'insert.sql';
// require_once 'country.php';
require_once 'games.php';

require_once 'database.php';
require_once 'functions.php';
// connect to a database
connect('localhost', 'games', 'root', 'bitnami');

// SORTING
//get data from URL ($_GET)
// $orderway = 'ASC'

// TERNARY
// $orderway = isset($_GET['way']) && $_GET['way'] == 'desc' ? 'DESC' : 'ASC';

// $orderway = isset($_GET['way']) && strtolower($_GET['way']) == 'desc' ? 'DESC' : 'ASC';


// if (isset($_GET['way])) {
    // switch ($_GET['way']) {
    //     default:
    //     case 'asc':
    //     $orderway = 'ASC';
    //     break;
    //     case 'desc':
    //     $orderway = "DESC";
    //     break;
    // }
    // else {
    //     $orderway = 'ASC';
    // }

    // $orderby = $_GET['orderby'];
// }


$query = 'SELECT *
FROM `games`
WHERE 1
';


// // $orderby = isset($_GET['way']) && strtolower($_GET['orderby']) == 'rating' ? 'rating' : 'name';

// $query = 'SELECT *
// FROM `games`
// WHERE 1
// ORDER BY {$orderby} {$orderway}
// ';








$games = select($query, [], 'Game');
// thats how oyou gonna be standard class objects


header('Content-type: application/json');
    
echo json_encode($games);



// how to fetch and how to use JSON in react !!!!

// DB_function and DB.php is important for SQL

// in index.php must! do:
// require once DB php’
// required one DB_function.php

// connect (‘localhost’, ‘games’, ‘root’, ‘    ’)

// $query = ‘
// 	SELECT  
// 	FROM `game`
// 	WHERE 1
// `;
// var_dump($games);

// $games = select ($query, [], ‘GAmes’)

// that’s how you display database in browser!!! follow these tstep 