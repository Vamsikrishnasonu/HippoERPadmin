
<?php
// Connect to database
$conn = mysqli_connect('localhost', 'root', 'mysql', 'connect');

// Check connection
if (!$conn) {
  die('Error: Could not connect: ' . mysqli_error($conn));
}

// Get notification ID from AJAX request
$id = $_POST['id'];

// Update notification as read in the database
$query = "UPDATE comments SET is_read = '1' WHERE id = $id";
mysqli_query($conn, $query);

// Count the number of unread notifications
$query = "SELECT COUNT(*) AS count FROM comments WHERE is_read = '0'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);
$count = $row['count'];

// Return the updated count of unread notifications
echo $count;

// Close database connection
mysqli_close($conn);
?>


