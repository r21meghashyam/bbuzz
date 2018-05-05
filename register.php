<?php

if(isset($_POST['spam-id'],$_POST['spam-data'])&&strlen($_POST['spam-data'])>0)
	{
	$file = 'spam_check/'.$_POST['spam-id'];
	if(file_exists($file))
		{
		if($fopen=fopen($file,'r'))
			{
			$key=fread($fopen,filesize($file));//reading the file data 
			if($key==$_POST["spam-data"])
				{
				if(unlink($file)==false)
					{
					unset($_POST,$file,$fopen,$key);
					header("Location: ./syserror");
					exit();
					}
				}
			else
				{
				unlink($file);
				header('Location: ./?se=SPMFLT');
				exit();
				}
			}
		else
			{
			unset($_POST,$file,$fopen);
			header("Location: ./?syserror");
			exit();
			}
		}
	else
		{
		unset($_POST,$file);
		header("Location: ./syserror");
		exit();
		}
	
	}
else
	{
	header('Location: ./?se=SPMTTNTNSRTT');
	exit();
	}

if(isset($_POST["first_name"]))
	{
	$firstname=$_POST["first_name"];
	}
else
	{
	header('Location: ./?se=NFRSTNM');
	exit();
	}

if(isset($_POST["last_name"]))
	{
	$lastname=$_POST["last_name"];
	}
else
	{
	header('Location: ./?se=NLSTNM');
	exit();
	}

if(isset($_POST["bun"]))
	{
	$bun=$_POST["bun"];
	}
else
	{
	header('Location: ./?se=NBN');
	exit();
	}

if(isset($_POST["password"]))
	{
	$password=$_POST["bun"];
	}
else
	{
	header('Location: ./?se=NPSWRT');
	exit();
	}

if(isset($_POST["birth_date"],$_POST["birth_month"],$_POST["birth_year"])&&$_POST["birth_date"]!="Date"&&$_POST["birth_month"]!="Month"&&$_POST["birth_year"]!="Year")
	{
	$birth_date=$_POST["birth_date"];
	}
else
	{
	header('Location: ./?se=NBR0TT');
	exit();
	}

if(isset($_POST["sex"])&&$_POST["sex"]=="male"||$_POST["sex"]=="female")
	{
	$sex=$_POST["sex"];
	}
else
	{
	header('Location: ./?se=NSKS');
	exit();
	}

if(isset($_POST["ci"])&&$_POST["ci"]!="0")
	{
	$ci=$_POST["ci"];
	}
else
	{
	header('Location: ./?se=NKNTR2');
	exit();
	}

if(empty($_POST["tnc"])&&$_POST["tnc"]!=1)
	{
	header('Location: ./?se=TNKNTTKT');
	exit();
	}

if(preg_match("/[:alpha:]]/i",$firstname))
		{
		echo "FIRSTNAME";
		}
else
	{
	echo "NONONO";
	}

?>