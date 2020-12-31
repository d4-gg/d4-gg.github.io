Date.prototype.getWeek = function() {
	var weekof = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - weekof) / 86400000) + weekof.getDay()+1)/7);
} 

var today = new Date();
var W_No = today.getWeek();

var W_NF_VALUE = W_No%6;
var W_EXO_VALUE = 0;
var n = W_No%3;

if(n==0 || n==3)
{
	W_EXO_VALUE=0;
}else if(n==1 || n==4){
	W_EXO_VALUE=1;
}else W_EXO_VALUE=2;

//today.getWeek(); //주차

