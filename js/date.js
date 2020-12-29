var initialDate = new Date(2020, 1, 1, 2); // Dec 1st 2012
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

var d = new Date();
var arrL = []; 
arrL[332] = '숨겨진 공허(가슴) / 유로파';
arrL[333] = '벙커 E15 (머리) / 유로파';
arrL[334] = '파멸 (다리) / 유로파';

//1월 전설
arrL[335] = '엑소더스정원2A (팔) / 발사기지'; // 11
arrL[336] = '벨레스 미궁 (가슴) / 발사기지';  //12
arrL[337] = '숨겨진 공허 (머리) / 유로파';  //13
arrL[338] = '벙커E15 (다리) / 유로파'; //14
arrL[339] = '파멸 (팔) / 유로파'; //15
arrL[340] = '엑소더스정원2A(가슴) / 발사기지'; //1월6일 까지 완료

var arrM = []; 
arrM[332] = '파멸(팔) / 발사 기지';
arrM[333] = '숨겨진 공허 (가슴) / 유로파';
arrM[334] = '벙커 E15 (머리) / 유로파';

//1월 마스터
arrM[335] = '파멸 (다리) / 유로파'; // 11
arrM[336] = '엑소더스정원2A (팔) / 발사기지';  //12
arrM[337] = '벨레스 미궁(가슴) / 발사기지';  //13
arrM[338] = '숨겨진 공허 (머리) / 유로파'; //14
arrM[339] = '벙커 E15 (다리) / 유로파'; //15
arrM[340] = '파멸 (팔) / 유로파'; //1월6일 까지 완료



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