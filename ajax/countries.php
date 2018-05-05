<?php 
if(isset($_GET["q"])&&$_GET["q"]!=null)
	{
	$q=$_GET['q'];
	$data =array('India','Sri Lanka','Pakistan','Bangladesh','Iran','Iraq','Indonesia','Buthan','China','USA','England','France','Afganisthan','North Korea','South Korea','Russia');
	sort($data);
	$suggestion=array();
	$c=1;
	$ql=strlen($q);
	foreach($data as $d)
		{
		if($c>5)break;
		else
			if(strncasecmp($q,$d,$ql)==0)
				{
				array_push($suggestion,$d);
				$c++;
				}
		}
	echo json_encode($suggestion);
	}
?>