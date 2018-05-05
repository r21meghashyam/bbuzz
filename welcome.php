<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<noscript><meta http-equiv="reload" content="noscript.html"></noscript>
<meta name="description" content="B-buzz is a social networking website which enables users to connect with friends and follow celebrities. We are buliding features like WAM(Whats/Whose Around Me) which enables users to find people, places, shops and resturants in the users nearby locality. B-buzz also has a feature where the user can find the best deals for the product they are looking for in the local markets and also on online shopping sites.">
<title>B-buzz</title>
<link rel="shortcut icon" href="assets/images/favicon.jpg">
<link rel="stylesheet" href="assets/stylesheets/welcome.css">
<link rel="stylesheet" href="assets/css/fontello.css">
<link rel="stylesheet" href="assets/css/animation.css">
<script src="assets/scripts/jquery.js"></script>
<script src="assets/scripts/welcome.js"></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
<div id="logo"></div>
<a href="#"><div id="qb">
<span class="lg">LOGIN</span>
<span class="su hide">SIGN UP</span>
</div>
</a>
<section>
<div id="sub">
<h3>SIGN UP</h3>
<div class="part">
<form spellcheck="false" autocomplete="off" method="post" action="register.php" onsubmit="return false,fromValidation()">
<span id="em"></span><br>
<input type="text" name="first_name" class="fbi" alt="First Name" id="sia" value="First Name" />
<input type="text" name="last_name" class="fbi" alt="Last Name" value="Last Name" /><br>
<input type="text" name="bun" class="fbi long_input" alt="Enter a unique B-Buzz Username" value="Enter a unique B-Buzz Username"/><span id="bload" class="hide">&nbsp;</span><br>
<input type="text" name="password" class="fbi fbp" alt="Password" value="Password" id="password"><input type="text" id="retype_password" class="fbi fbp" alt="Re-type Password" value="Re-type Password"/><span id="ipa">&nbsp;</span><br>
<label>Born on:</label>
<select id="dob" name="birth_date">
<option>Date</option>
<?php
for($i=1;$i<32;$i++)
{
$y=$i;
if($y<10){$y="0".$y;}
echo "<option value=".$y." >".$i."</option>";
}
 ?>
</select> 
<select id="dob" name="birth_month">
<option>Month</option>
<option value="01">Jan</option>
<option value="02">Feb</option>
<option value="03">Mar</option>
<option value="04">Apr</option>
<option value="05">May</option>
<option value="06">Jun</option>
<option value="07">Jul</option>
<option value="08">Aug</option>
<option value="09">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>
</select> 
<select id="dob" name="birth_year">
<option>Year</option>
<?php
date_default_timezone_set('Asia/Kolkata');
$this_year = date("Y");
$hundered_years_back = $this_year-100;
for($i=$this_year;$i>$hundered_years_back;$i--)
{
echo "<option>".$i."</option>";
}
 ?>
</select> 
<br>
<label>Sex: </label><input type="radio" name="sex" value="male" id="sm" checked><label for="sm">Male</label> <input type="radio" name="sex" value="female" id="sf"><label for="sf">Female</label><br>
<label >Country: </label><div id="ss"><input type="text" name="cn" class="long_input" placeholder="Enter your country name"><input type="hidden" name="ci" value="0"/><div id="cs"></div></div><span id="cload" class="hide">&nbsp;</span>
<br>
<input type="checkbox" name="tnc" value="1" id="tncCb"  checked><label>I agree the <a href="#tnc" id="tnc">Terms and conditions.</a></label><br>
<br>
<div class="g-recaptcha" data-sitekey="6Lf0LwITAAAAAMcc21beyhKdB-QdhAFjkCs668Qk"></div>
<br/>
<input type="submit" value="Create my account" id="signup_submit">
</form>
</div>

</div>
<div id="gvb">
<p>
<big>Welcome To B-Buzz</big><br>
B-buzz is a social networking website which enables users to connect with friends and follow celebrities. We are buliding features like WAM(Whats/Whose Around Me) which enables users to find people, places, shops and resturants in the users nearby locality. B-buzz also has a feature where the user can find the best deals for the product they are looking for in the local markets and also on online shopping sites.
<br></p>
<p class="hide">
<big>Crown a buzz with a #hash_tag</big><br>
Use the #hash_tag to create a buzz and lets make it a trending one.
<br></p>
<p class="hide">
<big>Whats/Whose Around Me (WAM)</big><br>
Know your neighbours! Its not nice to be strangers. WAM(What's/Whose Around Me) will help you to know about shops, resturants, hospitals and other service stores that is around your current locality.
<br></p>
<p class="hide">
<big>Keep the buzzing on!(Chat on)</big><br>
A perfect feature a social website should have. Chat with online friends and never loose any relation, yet, make it stronger.
<br></p>
<p class="hide">
<big><label class="lg">Login</label></big> or <big><label id="sis" for="sia">Signup</label></big><br>
<br></p>
</div>
</section>
<div id="lib" class="hide">
<form action="logging.php?source=usual" method="post">
<table>
<caption>LOGIN</caption>
<tr><td align="right">Email Id:</td><td><input type="text" name="email_id"></td></tr>
<tr><td></td><td><a id="fp" href="#">Opps!, I forgot my password</a></td></tr>
<tr><td align="right">Password:</td><td><input type="password" name="password"></td></tr>
<tr><td></td><td><input type="checkbox" name="rm" value="0" id="rm"><label for="rm">Never log off from this device.</label></td></tr>
<tr><td></td><td><input type="submit" value="LOGIN"></td></tr>
</table>
</form>
</div>
<footer><a href="rab.php">Report a bug</a> • <a href="copyright">Copyright</a> • <a href="tnc">Terms of Use</a></footer>
<div id="fb"class="hide">
<iframe id="fl"></iframe>
<span class="ci" title="Close">&nbsp;</span>
</div>