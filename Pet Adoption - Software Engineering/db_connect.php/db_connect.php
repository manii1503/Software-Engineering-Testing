<!DOCTYPE html>
<html>
<head>
    <meta charset = "UTF-8">
    <title>Pet</title>
</head>
<body>

<?php
include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $breed = $_POST['breed'];

    $sql = "INSERT INTO Pet (Name, Breed)
                VALUES ('$name', '$breed')";

    $qryResult = mysqli_query($conn, $sql);

    if ($qryResult === TRUE) {
        echo "New pet record created successfully!";
    }else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);


}
?>

</body>
</html>