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
arrL[340] = '엑소더스정원2A(가슴) / 발사기지'; //16

var arrM = []; 
arrM[332] = '파멸(팔) / 발사 기지';
arrM[333] = '숨겨진 공허 (가슴) / 유로파';
arrM[334] = '벙커 E15 (머리) / 유로파';

//1월 마스터
arrL[335] = '파멸 (다리) / 유로파'; // 11
arrL[336] = '엑소더스정원2A (팔) / 발사기지';  //12
arrL[337] = '벨레스 미궁(가슴) / 발사기지';  //13
arrL[338] = '숨겨진 공허 (머리) / 유로파'; //14
arrL[339] = '벙커 E15 (다리) / 유로파'; //15
arrL[340] = '파멸 (팔) / 유로파'; //1월6일


var year = d.getFullYear(); // 년도
var month = d.getMonth() + 1;  // 월
var date = d.getDate();  // 날짜
var day = d.getDay();  // 요일
