<?php

if(isset($_GET["old"]))
	{
	if(file_exists("spam_check/".$_GET["old"]))
		{
		unlink("spam_check/".$_GET["old"]);
		}
	}

sleep(2);

$series = array_merge(range('a','z'),range('A','Z'),range(0,9));
shuffle($series);
$spam="";
for($i=0;$i<mt_rand(4,6);$i++)
	{
	$spam=$spam.$series[$i];
	}
$hash = md5($spam);
$pass=0;
$i=1;
while($pass<1)
	{
	if(file_exists("spam_check/".$hash))
		{
		$hash=$hash.$i;
		$i++;
		}
	else
		{
		$pass++;
		break;
		}
	}
$file=fopen("spam_check/".$hash,'x');
fwrite($file,$spam);
fclose($file);
echo "<span style=\"font-size:20px;font-family: cursive;\">".$spam."</span>";
?>
<input type="hidden" name="spam-id" id="spam-id" value="<?php echo $hash;?>"/><br>
<input type="text" name="spam-data" placeholder="Enter the above text"/>