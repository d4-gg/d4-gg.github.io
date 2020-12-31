Date.prototype.getWeek = function() {
	var weekof = new Date(2020,0,1,2);
	return Math.ceil((((this - weekof) / 86400000) + weekof.getDay()+1)/7);
} 

var today = new Date();
var W_No = today.getWeek();
var v_day = today.getDay();
var v_time = today.getHours(); 

if(v_day == 1 || v_day == 2){
	W_No = W_No -1;
}
if(v_day == 3 && v_time <= 1){
	W_No = W_No -1;
}

var W_NF_VALUE = W_No%6;
var W_EXO_VALUE = 0;

var n = W_No%3;
if(n==0 || n==3)
{
	W_EXO_VALUE=0;
}else if(n==1 || n==4){
	W_EXO_VALUE=1;
}else W_EXO_VALUE=2;

