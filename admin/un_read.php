<?php
// Connect to database
$conn = mysqli_connect('localhost', 'root', 'mysql', 'connect');

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Query to get count of unread notifications
$sql = "SELECT COUNT(*) AS count FROM comments WHERE is_read = 0";

// Execute query
$result = mysqli_query($conn, $sql);
$count = mysqli_fetch_assoc($result)['count'];

// Close connection
mysqli_close($conn);

// Return count as JSON response
echo json_encode(['count' => $count]);
?>
