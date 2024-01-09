//your JS code here. If required.
function year(daysOfAYear)
{
	if(daysOfAYear%4==0 && daysOfAYear%100!=0)
	{
		return 366;
	}
	else if(daysOfAYear%400==0)
	{
		return 366;
	}
	else
		return 365;
}
var daysOfAYear = prompt("enter year");
alert(year(daysOfAYear));