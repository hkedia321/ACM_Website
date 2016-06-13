/*Developed by Harshit Kedia
     email: geek.harshitkedia@gmail.com
     VIT ACM Student's Chapter
*/
$(window).load(function () {
	$("#loader").delay(1000).fadeOut();
	$("#pre-div").delay(1500).fadeOut("slow");
});
$.each( $('*'), function() { 
	if( $(this).width() > $('body').width()) {
		console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
	} 
});
// $.each( $('*'), function() { 
// 	$('*').addClass("border");
// });
function galonload()
{
	// alert("getload");
	document.getElementById("button1").click();
}
var total_no_of_buttons=6;/*Change this if buttons number changed*/
var noTimesCalled=0;
function activeButton(x)
{
	noTimesCalled+=1;
	var b="button";
	var bx=b+x;
	document.getElementById(bx).className = "active";
	for(var i=1;i<=total_no_of_buttons;i++)
	{
		if(i!=x)
		{
			document.getElementById(b+i).className = "";
		}
	}
	if(noTimesCalled!=1)
	 new WOW().init();
}
function activeButtonDiv(x)
{
	var b="buttondiv";
	var bx=b+x;
	document.getElementById(bx).style.display = "block";
	for(var i=1;i<=total_no_of_buttons;i++)
	{
		if(i!=x)
		{
			document.getElementById(b+i).style.display = "none";
		}
	}
	
}
function clicked(i)
{
	//window.alert("1st");
	activeButton(i);
	activeButtonDiv(i);


}
function checkboxChanged()
{
	var ch1=document.getElementById('checkbox1');
	var ch2=document.getElementById('checkbox2');
	var ch3=document.getElementById('checkbox3');

	var sd1=document.getElementById('skillsDiv1');
	var sd2=document.getElementById('skillsDiv2');
	var sd3=document.getElementById('skillsDiv3');

	sd1.style.display = ch1.checked ? 'block' : 'none';
	sd2.style.display = ch2.checked ? 'block' : 'none';
	sd3.style.display = ch3.checked ? 'block' : 'none';
}
