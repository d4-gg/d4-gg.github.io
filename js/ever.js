var initialDate2 = new Date(2020, 1, 1, 2); // Dec 1st 2012
var now2 = Date.now();
var difference2 = now2 - initialDate2;
var millisecondsPerDay2 = 24 * 60 * 60 * 1000;
var daysSince2 = Math.floor(difference2 / millisecondsPerDay2);		

var w8_everName = []; 
var w8_everImg = []; 

w8_everName[0] = '튼튼한 월계관';
w8_everName[1] = '거대 비둘기 투영';
w8_everName[2] = '은빛날개 황조롱이';
w8_everName[3] = '악천후';
w8_everName[4] = '주먹 인사';
w8_everName[5] = '뒤엉킨 의체';
w8_everName[6] = '결정체 의체';
w8_everName[7] = '선물 제공자';
w8_everName[8] = '기본 지시';
w8_everName[9] = '작은 도우미 의체';
w8_everName[10] = '차가운 친구';

w8_everImg[0] = 'https://www.bungie.net/common/destiny2_content/icons/5745715e1185660ed3f50d44e560ad43.jpg';
w8_everImg[1] = 'https://www.bungie.net/common/destiny2_content/icons/4ecb05a78fed86ce4362dfee2016a313.jpg';
w8_everImg[2] = 'https://www.bungie.net/common/destiny2_content/icons/2560892ef08fad22fd6fd24fbe574d6f.jpg';
w8_everImg[3] = 'https://www.bungie.net/common/destiny2_content/icons/9e314283e4c8ff452b19ae4e744ca8a4.jpg';
w8_everImg[4] = 'https://www.bungie.net/common/destiny2_content/icons/1f5fdebd3baa097ec9ac0f317e6bcf5a.jpg';
w8_everImg[5] = 'https://www.bungie.net/common/destiny2_content/icons/4b11623d33028c7defb12e55ef46334c.jpg';
w8_everImg[6] = 'https://www.bungie.net/common/destiny2_content/icons/3cf26bd2b33c91dbf37af086dd8c449a.jpg';
w8_everImg[7] = 'https://www.bungie.net/common/destiny2_content/icons/934442a5b6cc21005d098e44c9194563.jpg';
w8_everImg[8] = 'https://www.bungie.net/common/destiny2_content/icons/90fef217867055eba176f774ae3f76c6.jpg';
w8_everImg[9] = 'https://www.bungie.net/common/destiny2_content/icons/5c59a807ea865f6e7f4872c8427ffeec.jpg';
w8_everImg[10] = 'https://www.bungie.net/common/destiny2_content/icons/d3e99c207f93f61fe1bdef0b76e87005.jpg';

var w9_everName = []; 
var w9_everImg = []; 


w9_everName[0] = '구릿빛 녹청';
w9_everName[1] = '전설 장비';
w9_everName[2] = '앰퓰런스 LXXX';
w9_everName[3] = '시공 입장';
w9_everName[4] = '크로스 스텝 셔플';
w9_everName[5] = '뜻밖의 춤 ';
w9_everName[6] = '이자나기의 의체';
w9_everName[7] = '하퍼의 의체';
w9_everName[8] = '열 주먹 검';
w9_everName[9] = '치명적 시스템 ';
w9_everName[10] = '레테의 자비';

w9_everImg[0] = 'https://www.bungie.net/common/destiny2_content/icons/e072476c9a45bfa1c5bd08671615a2a8.jpg';
w9_everImg[1] = 'https://www.bungie.net/common/destiny2_content/icons/e8c52e78b005f454fd0001d871c5d3c6.jpg';
w9_everImg[2] = 'https://www.bungie.net/common/destiny2_content/icons/3b04d9dc2cfb31767ac2ee857021ffd3.jpg';
w9_everImg[3] = 'https://www.bungie.net/common/destiny2_content/icons/76a827bb702b9411443145340e8d6608.jpg';
w9_everImg[4] = 'https://www.bungie.net/common/destiny2_content/icons/8d00e9d51bf4da5620ca58b647152c2e.jpg';
w9_everImg[5] = 'https://www.bungie.net/common/destiny2_content/icons/1dee884d57f61007d43a7a05f6ee3432.jpg';
w9_everImg[6] = 'https://www.bungie.net/common/destiny2_content/icons/e9ae339657477b15a7208768599aa20e.jpg';
w9_everImg[7] = 'https://www.bungie.net/common/destiny2_content/icons/b279a07c6024eb1658dd224461b4c745.jpg';
w9_everImg[8] = 'https://www.bungie.net/common/destiny2_content/icons/2316329f1d351ae47d0c5a2ea6318503.jpg';
w9_everImg[9] = 'https://www.bungie.net/common/destiny2_content/icons/7b6e12d58a323be4de71511f3be66635.jpg';
w9_everImg[10] = 'https://www.bungie.net/common/destiny2_content/icons/ce498709760ca1a566f8ef8dc7cf62dd.jpg';


var ever_str = "";
var ever_week = "";

var d = new Date();
var year = d.getFullYear(); // 년도
var month = d.getMonth() + 1;  // 월
var date = d.getDate();  // 날짜
var day = d.getDay();  // 요일


var event_map = "";

var event_list = []; 
event_list[0] = "엑소더스의 추락";
event_list[1] = "유리길";
event_list[2] = "실각한 자";
event_list[3] = "벌레 소굴";
event_list[4] = "뒤집어진 첨탑";
event_list[5] = "진홍빛 요새";

var nightfall_url = "a";

 if(daysSince2 <= '339'){ // 1주차: 주차별 +7하면 됨
	for (var i = 0; i < 11; i++) {
		ever_str = "<div class='card-main'><img src='"+w8_everImg[i]+"' width='40px'/> "  + w8_everName[i] +"</div><hr/>"+ever_str;
		event_map = event_list[1]; // 유리길
	}
}
if(daysSince2 > '339' && daysSince2 <= '346'){ // 2주차: 주차별 +7하면 됨
	for (var i = 0; i < 11; i++) {
		ever_str = "<div class='card-main'><img src='"+w9_everImg[i]+"' width='40px'/> "  + w9_everName[i] +"</div><hr/>"+ever_str;
		event_map = event_list[2]; // 실각한 자
	}
}


