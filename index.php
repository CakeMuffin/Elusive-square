<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Elusive square</title>
	<link rel="shortcut icon" href="icon.png" type="image/png">
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<div class="left_column">
		<h1 style="text-align: center; margin: unset; padding-top: 30px">Top 10</h1>	
<!-- _______________________________________________________________________ -->

<?php
	$numbers_table = 0;

//mysql request
	$mysqli = new mysqli("localhost", "root", "", "points");
	$mysqli->query ("SET NAMES 'utf8'");
	$result_set = $mysqli->query("SELECT * FROM  `toppoints` ORDER BY points DESC"); //sorting by highest score

//table head
	if ($result_set->num_rows > 0) {
			echo "<table class='topPonts'><tr><th>#</th><th>Name</th><th>Points</th></tr>";

// output data of each row
	while($row = $result_set->fetch_assoc()) {
		++$numbers_table;
	if ($numbers_table <=10) {
		echo "<tr><td>" . $numbers_table. "</td><td>" . $row["name"]. "</td><td>" . $row["points"]."</td></tr>";
				}
			}
			echo "</table>";
		} else {
			echo "0 results";
		}
?>
<!-- _______________________________________________________________________ -->

	</div>
	<div id="box">
		<div id="move_box"></div>
	</div>
	<div class="right_column">
		<table border="1" width="100%" cellpadding="5">
			<tr>
				<th>Level</th>
			</tr>
			<tr>
				<td><input type="text" value="0" id="level" disabled></td>
			</tr>
			<tr>
				<th>Points</th>
			</tr>
			<tr>
				<td><input type="text" id="points" value="0" disabled></td>
			</tr>
			<tr>
				<th>Top points</th>
			</tr>
			<tr>
				<td><input type="text" id="top_points" value="0" disabled></td>
			</tr>
		</table>
	</div>
	<button id="start">START</button>
</body>
<script src="media.js"></script>
</html>