var initialDate = new Date(2020, 1, 1, 2); // Dec 1st 2012
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

var d = new Date();

var L_Map = []; 
var L_Ammo = []; 

L_Map[0] = '엑소더스정원2A (발사기지)'; // 11
L_Map[1] = '벨레스미궁 (발사기지)';  //12
L_Map[2] = '숨겨진공허 (유로파)';  //13
L_Map[3] = '벙커E15 (유로파)'; //14
L_Map[4] = '파멸 (유로파)'; //15

L_Ammo[0] = '가슴';
L_Ammo[1] = '머리';
L_Ammo[2] = '다리';
L_Ammo[3] = '팔';

var TodayL= L_Map[daysSince%5] +" / "+L_Ammo[daysSince%4];

var M_Map = []; 
var M_Ammo = []; 

M_Map[0] = '파멸 (유로파)'; // 11
M_Map[1] = '엑소더스정원2A (발사기지)';  //12
M_Map[2] = '벨레스 미궁 (발사기지)';  //13
M_Map[3] = '숨겨진 공허 (유로파)'; //14
M_Map[4] = '벙커 E15 (유로파)'; //15

M_Ammo[0] = '팔';
M_Ammo[1] = '가슴';
M_Ammo[2] = '머리';
M_Ammo[3] = '다리';


var TodayM = M_Map[daysSince%5] +" / "+M_Ammo[daysSince%4];


var year = d.getFullYear(); // 년도
var month = d.getMonth() + 1;  // 월
var date = d.getDate();  // 날짜
var day = d.getDay();  // 요일

 
var legeno_url = "a";
var master_url = "a";


if(arrL[daysSince].includes("숨겨진")) {
	legeno_url = 'https://www.youtube.com/results?search_query=%EC%88%A8%EA%B2%A8%EC%A7%84+%EA%B3%B5%ED%97%88+%EA%B3%B5%EB%9E%B5';
}else if(arrL[daysSince].includes("엑소더스")) {
	legeno_url =  'https://www.youtube.com/results?search_query=%EC%97%91%EC%86%8C%EB%8D%94%EC%8A%A4+%EC%A0%95%EC%9B%90+2a+%EA%B3%B5%EB%9E%B5';
}else if(arrL[daysSince].includes("벨레스")) {
	legeno_url =  'https://www.youtube.com/results?search_query=%EB%B2%A8%EB%A0%88%EC%8A%A4+%EB%AF%B8%EA%B6%81+%EA%B3%B5%EB%9E%B5';
}else if(arrL[daysSince].includes("벙커")) {
	legeno_url =  'https://www.youtube.com/results?search_query=%EB%B2%99%EC%BB%A4E15+%EA%B3%B5%EB%9E%B5';
}else if(arrL[daysSince].includes("파멸")) {
	legeno_url =  'https://www.youtube.com/results?search_query=%ED%8C%8C%EB%A9%B8+%EC%9E%8A%ED%98%80%EC%A7%84+%EA%B5%AC%EC%97%AD%EA%B3%B5%EB%9E%B5';
}

if(arrM[daysSince].includes("숨겨진")) {
	master_url = 'https://www.youtube.com/results?search_query=%EC%88%A8%EA%B2%A8%EC%A7%84+%EA%B3%B5%ED%97%88+%EA%B3%B5%EB%9E%B5';
}else if(arrM[daysSince].includes("엑소더스")) {
	master_url =  'https://www.youtube.com/results?search_query=%EC%97%91%EC%86%8C%EB%8D%94%EC%8A%A4+%EC%A0%95%EC%9B%90+2a+%EA%B3%B5%EB%9E%B5';
}else if(arrM[daysSince].includes("벨레스")) {
	master_url =  'https://www.youtube.com/results?search_query=%EB%B2%A8%EB%A0%88%EC%8A%A4+%EB%AF%B8%EA%B6%81+%EA%B3%B5%EB%9E%B5';
}else if(arrM[daysSince].includes("벙커")) {
	master_url =  'https://www.youtube.com/results?search_query=%EB%B2%99%EC%BB%A4E15+%EA%B3%B5%EB%9E%B5';
}else if(arrM[daysSince].includes("파멸")) {
	master_url =  'https://www.youtube.com/results?search_query=%ED%8C%8C%EB%A9%B8+%EC%9E%8A%ED%98%80%EC%A7%84+%EA%B5%AC%EC%97%AD%EA%B3%B5%EB%9E%B5';
}


							