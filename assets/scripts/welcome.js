var query_string=window.location.search.substr(1,window.location.search.length-1),
	query_list=query_string.split("&"),
	GET={};
	for(i in query_list)
		{
		GET[decodeURI(query_list[i].split("=")[0])]=decodeURI(query_list[i].split("=")[1]);
		}
	
$(document).ready(function()
	{
	featureViewer();
	if(GET["se"])
		{
		$("#em").hide().html("<span class='error'>"+signupError(GET["se"])+"</span>").fadeIn(1000);
		}
	$("[type='checkbox']").click(function()
		{
		if($(this).val()==1)
			{
			$(this).val(0)
			}
		else
			{
			$(this).val(1)
			}
		}
	);

	$("#sis").click(function()
		{
		$("#sia").css("outline","1px solid #73FFDC").delay(2000).animate(
			{
			outline:"0px"
			}
		);
		}
	);
	
	$("input.fbi").focus(function()
		{
		if($(this).val()==$(this).attr("alt"))
			{
			$(this).val("");
			}
		}
	);
	
	$("input.fbi").blur(function()
		{
		if($(this).val()=="")
			{
			$(this).val($(this).attr("alt"));
			}
		}
	);

	$("#sub [name='bun']").change(function()
		{
		$("#em").fadeOut();
		if($(this).val().length>0&&$(this).val()!="Enter a unique B-Buzz Username")
			{
			$("#bload").attr("class","load1");
			qs = $(this).val().replace(" ","%20");
			$.ajax(
				{
				url:"ajax/check_bun.php?bun="+qs,
				success:function(data)
					{
					$("#bload").attr("class","hide");
					if(data==1)
						{
						e=1;
						$("#em").hide().html("<span class='error'>Try other. This one's taken.</span>").fadeIn(1000);
						}
					}
				}
			);
			}
		}
	);
	$("input.fbp").focus(function()
		{
		if($(this).val()!=$(this).attr("alt"))
			{
			$(this).attr("type","password");
			}
        }
    );
	
    $("input.fbi").blur(function()
        {
        if($(this).val()==$(this).attr("alt"))
            {
			$(this).attr("type","text");
			}
		}
	);
	
	$("#password").change(function()
		{
		$("#em").hide();
		if($(this).val().length>24)
			{
			$("#em").html("<span class='error'>Your password is too long.(Limit: 6-24 characters)</span>");
			}
		else
			if($(this).val().length<6)
				{
				$("#em").html("<span class='error'>Your password is too short.(Limit: 6-24 characters)</span>");
				}
			else
				{
				$("#em").html("<span class='correct'>Cool Password</span>");
				}
		$("#em").fadeIn(1000);
		}
	);
	
	$("#retype_password").change(function()
		{
		if($("#password").val()==$("#retype_password").val())
			{
			$("#em").hide();
			$("#em").html("<span class='correct'>Now you  won't forget your password right!.</span>");
			$("#em").fadeIn(1000);
			$("#em").delay(1000);
			$("#em").fadeOut(1000);
			$("#ipa").hide();
			$("#ipa").html("<span class='tick-right'>&nbsp;</span>");
			$("#ipa").fadeIn(1000);
			}
		else
			{
			$("#em").hide();
			$("#em").html("<span class='error'>Your password does not match</span>");
			$("#em").fadeIn(1000);
			$("#ipa").fadeOut(1000);
			}
		}
	);
	
	$("[id='dob']").change(function()
		{
		date = $("[name='birth_date']").val();
		month = $("[name='birth_month']").val();
		year = $("[name='birth_year']").val();
		bde=validateDate(date,month,year);
		if(bde==1)
			{
			$("#em").hide();
			$("#em").html("<span class='error'>I don't think you were born on this date</span>");
			$("#em").fadeIn(1000);
			}
		}
	);
	
	$(".lg").click(function()
		{
		$(".lg").attr("class","lg hide");
		$(".su").attr("class","su");
		$("section").animate(
			{
			left:"-100%"
			}
			,1000
		);
		$("#qb").fadeOut(1000);
		$("#qb").delay(1000);
		$("#qb").fadeIn(1000);
		$("#lib").fadeIn(2000);
		}
	);

	$(".su").click(function()
		{
		$(".su").attr("class","su hide");
		$(".lg").attr("class","lg");
		$("#lib").fadeOut(1000);
		$("section").animate(
			{
			left:"150px"
			}
			,2000
		);
		$("#qb").fadeOut(1000);
		$("#qb").delay(1000);
		$("#qb").fadeIn(1000);
		}
	);
	
	$("#tnc").click(function()
		{
		$("#fb").fadeIn(1000);
		$("#fl").attr("src","ajax/tnc.php");
		}
	);
	
	
	$(".ci").click(function()
		{
		$("#fb").fadeOut(1000);
		}
	);
	
	$("[name='cn']").keyup(function()
		{
		if($(this).val().length>0)
			{
			$("#cload").attr("class","load1");
			}
		Cq=$(this).val().replace(/ /g,"%20");
		suggestion ="<ul id='csl'>";
		$.ajax(
			{
			url:"ajax/countries.php?q="+Cq,
			dataType: "json",
			success:function(data)
				{	
				$("#cload").attr("class","hide");
				for(i=0;i<(data.length);i++)
					{
					suggestion=suggestion+"<li>"+data[i]+"</li>";
					}
				suggestion=suggestion+"</ul>";
				$("#cs").html(suggestion);
				}
			}
		);
		}
	);
	
	$("[name='cn']").keypress(function()
		{
			$("#cs").show();
		}
	);
	
	$("[name='cn']").blur(function()
		{
		$("#cs").mouseleave(function()
			{
			$("#cs").hide();
			}
		);
		}
	);	
	$("[name='cn']").change(function()
		{
		if($(this).val()!=$("[name='ci']"))
			{
			$(this).val("");
			$("[name='ci']").val(0);
			}
		}
	);

	$(document).on('click','#csl li',function()
		{
		$("[name='cn']").val($(this).text());
		$("[name='ci']").val($(this).text());
		}
	);
	$("#reload").click(function()
		{
		reload_spam();
		}
	);
	
	$("#proceed").click(function()
		{
		$(this).html("Please wait..").attr("disabled","disabled");
		$("#spam_test").load("spam.php",function()
			{
			$("#spam_box").toggleClass('hide');
			$("#proceed").toggleClass('hide');
			$("#signup_submit").toggleClass('hide');
			}
		);
		}
	);
	
	}
);

function reload_spam()
	{
	$(document).ready(function()
		{
		$("#reload").toggleClass('animate-spin');
		$("#spam_test").load("spam.php?old="+$("#spam-id").val(),function(){$("#reload").toggleClass('animate-spin')});
		
		}
	);
	}

function validateDate(date,month,year)
	{
	bde=0;
	ty = new Date().getYear();
	noly = ty/4;
	leap = 1900;
	$("#em").fadeOut(1000);
	if(year!="Year"&&month!="Month"&&date!="Date")
		{
		for(i=0;i<noly;i++)
			{
			leap=leap+4;
			if(year==leap)
				{
				isLeap="Yes";
				break;
				}
			else
				{
				isLeap="No";
				}
			}
		if(month=="01"||month=="03"||month=="05"||month=="07"||month=="08"||month=="10"||month=="12")
			{
			$("option:contains('29')").attr("disabled",false);
			$("option:contains('30')").attr("disabled",false);
			$("option:contains('31')").attr("disabled",false);
			}
		else if(month=="04"||month=="06"||month=="09"||month=="11")
			{
			$("option:contains('29')").attr("disabled",false);
			$("option:contains('30')").attr("disabled",false);
			$("option:contains('31')").attr("disabled",true);
			if(date=="31")
				{
				bde=1;
				}
			}
		else if(month=="02")
			{
			if(isLeap=="No")
				{
				$("option:contains('29')").attr("disabled",true);
				$("option:contains('30')").attr("disabled",true);
				$("option:contains('31')").attr("disabled",true);
				if(date=="29"||date=="30"||date=="31")
					{
					bde=1;
					}

				}
			else
				{
				$("option:contains('29')").attr("disabled",false);
				$("option:contains('30')").attr("disabled",true);
				$("option:contains('31')").attr("disabled",true);
				if(date=="30"||date=="31")
					{
					bde=1;
					}
				}
			}


		}
	return bde;
	}

function featureViewer()
	{
	fd = $("#gvb p");
	for(i=0;i<fd.length;i++)
		{
		$("#gvb p:eq("+i+")").fadeIn(1000);
		$("#gvb *").delay(20000);
		if(i!=(fd.length-1))
			{
			$("#gvb p:eq("+i+")").fadeOut(1000);
			$("#gvb *").delay(2000);
			}
		}
	}
	

	
function fromValidation()
	{
	$("#em").fadeOut(1000);
	var e=0;
	$(document).ready(function()
	{
	var fn = $("[name='first_name']").val(), 
		ln = $("[name='last_name']").val(),
		bun = $("[name='bun']").val(),
		pass = $("[name='password']").val(),
		rpass = $("[id='retype_password']").val(),
		bd = $("[name='birth_date']").val(),
		bm = $("[name='birth_month']").val(),
		by = $("[name='birth_year']").val(),
		ci = $("[name='ci']").val(),
		tnc = $("[id='tncCb']").val(),
		bde = validateDate(bd,bm,by);
	if(tnc=="0")
		{
		e=1;
		$("#em").hide().html("<span class='error'>You cannot sign up if you don't accept our Terms and conditions.</span>").fadeIn(1000);
		}
	if(ci==0)
		{
		e=1;
		$("#em").hide().html("<span class='error'>You forgot to specify the country you were born.</span>").fadeIn(1000);
		}
	if(bde=="1")
		{
		e=1;
		$("#em").hide().html("<span class='error'>I dont think you were born on this date.</span>").fadeIn(1000);
		}
	if(by=="Year")
		{
		e=1;
		$("#em").hide().html("<span class='error'>You forgot to specify the year of your birth date.</span>").fadeIn(1000);
		}
	if(bm=="Month")
		{
		e=1;
		$("#em").hide().html("<span class='error'>You forgot to specify the month of your birth date.</span>").fadeIn(1000);
		}
	if(bd=="Date")
		{
		e=1;
		$("#em").hide().html("<span class='error'>You forgot to specify the date of your birth date.</span>").fadeIn(1000);
		}
	if(rpass=="Re-type Password"||rpass!=pass)
		{
		e=1;
		$("#em").hide().html("<span class='error'>Your password does not match</span>").fadeIn(1000);
		}
	if(pass=="Password")
		{
		e=1;
		$("#em").hide().html("<span class='error'>Whats your password.</span>").fadeIn(1000);
		}
	if(bun.length>0)
		{
		qs = bun.replace(" ","%20"); $.ajax(
			{
			url:"check_bun.php?bun="+qs,
			success:function(data)
				{
				if(data==1)
					{
					$("#em").hide().html("<span class='error'>Try other. This one's taken.</span>").fadeIn(1000);
					e=1;
					}
				}
			}
		);
		}
	if(bun=="Enter a unique B-Buzz Username")
		{
		e=1;
		$("#em").hide().html("<span class='error'>You forgot to enter your new B-BuZZ Username.</span>").fadeIn(1000);
		}
	if(ln=="Last Name")
		{
		e=1;
		$("#em").hide().html("<span class='error'>Whats your last name.</span>").fadeIn(1000);
		}
	if(fn=="First Name")
		{
		e=1;
		$("#em").hide().html("<span class='error'>Whats your first name.</span>").fadeIn(1000);
		}
	}
	);
	
	if(e==1)
		{
		return false;
		}
	}

function signupError(e)
	{
	switch(e)
		{
		case 'NFRSTNM':m="You forgot to specify your first name";break;
		case 'NLSTNM':m="You forgot to specify your last name";break;
		case 'NBN':m="You forgot to enter a B-Buzz Username";break;
		case 'NPSWRT':m="You forgot to password";break;
		case 'NBR0TT':m="You forgot specify your birthdate";break;
		case 'NSKS':m="You forgot specify your sex";break;
		case 'NKNTR':m="You forgot specify your country";break;
		case 'TNKNTTKT':m="You cannot signup with us if you dont accept out terms and conditions";break;
		case 'SPMTTNTNSRTT':m="You forgot to prove that you are human. Pelase dont forget to insert Spam Verification Text";break;
		case 'SPMFLT':m="Spam test failed. Please try again.";break;
		default: m="There was a signup error. Please try again. ";
		}
	return m;
	}