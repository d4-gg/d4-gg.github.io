var w8_everName = []; 
var w8_everImg = []; 

w8_everName[0] = '과자 굽기 (3,250가루)';
w8_everName[1] = '호 호 험 (700가루)';
w8_everName[2] = '진북 의체 (2,850가루)';
w8_everName[3] = '하고 싶은 말 (700가루)';
w8_everName[4] = '하이파이브 (1,250가루)';
w8_everName[5] = '패키지 투영 (500가루)';
w8_everName[6] = '극지 사슴 (2,500가루)';
w8_everName[7] = '암네스티아-S2 (2,000가루)';
w8_everName[8] = '웃음 모빌 (2,500가루)';
w8_everName[9] = '겨울 연꽃 의체 (2,850가루)';
w8_everName[10] = '셀레스티아 (40가루)';

w8_everImg[0] = 'https://www.bungie.net/common/destiny2_content/icons/099ad22071f68be41ea5d6a70e9f5f78.jpg';
w8_everImg[1] = 'https://www.bungie.net/common/destiny2_content/icons/84591e3c4a4682bf44d1f7155d05eac5.jpg';
w8_everImg[2] = 'https://www.bungie.net/common/destiny2_content/icons/47cfccb8751ddece537edd837f4739a2.jpg';
w8_everImg[3] = 'https://www.bungie.net/common/destiny2_content/icons/64f06451c848ec2a21733bc23a6da449.jpg';
w8_everImg[4] = 'https://www.bungie.net/common/destiny2_content/icons/7f9f83140f06b72472c4127765915c19.jpg';
w8_everImg[5] = 'https://www.bungie.net/common/destiny2_content/icons/9914a3b05276ca944fb6308e514c8620.jpg';
w8_everImg[6] = 'https://www.bungie.net/common/destiny2_content/icons/eb5b56927321624ee0c065d6d31353ee.jpg';
w8_everImg[7] = 'https://www.bungie.net/common/destiny2_content/icons/f2e5f89ebc5e36848b8fb9a06aa8841e.jpg';
w8_everImg[8] = 'https://www.bungie.net/common/destiny2_content/icons/7c4eb671b8e126d72cc1b7c7bde34953.jpg';
w8_everImg[9] = 'https://www.bungie.net/common/destiny2_content/icons/8372aedc7e955c4578eb406d65000459.jpg';
w8_everImg[10] = 'https://www.bungie.net/common/destiny2_content/icons/3bccc81a7addf0dac3217506ac8d1a63.jpg';


var w9_everName = []; 
var w9_everImg = []; 

w9_everName[0] = '튼튼한 월계관 (40가루)';
w9_everName[1] = '거대 비둘기 투영(1,500가루)';
w9_everName[2] = '은빛날개 황조롱이 (2,000가루)';
w9_everName[3] = '악천후 (3,250가루)';
w9_everName[4] = '주먹 인사 (1,250가루)';
w9_everName[5] = '뒤엉킨 의체 (2,850가루)';
w9_everName[6] = '결정체 의체(2,850가루)';
w9_everName[7] = '선물 제공자 (2,500가루)';
w9_everName[8] = '기본 지시 (2,500가루)';
w9_everName[9] = '작은 도우미 의체 (2,850가루)';
w9_everName[10] = '차가운 친구 (4,250가루)';

w9_everImg[0] = 'https://www.bungie.net/common/destiny2_content/icons/5745715e1185660ed3f50d44e560ad43.jpg';
w9_everImg[1] = 'https://www.bungie.net/common/destiny2_content/icons/4ecb05a78fed86ce4362dfee2016a313.jpg';
w9_everImg[2] = 'https://www.bungie.net/common/destiny2_content/icons/2560892ef08fad22fd6fd24fbe574d6f.jpg';
w9_everImg[3] = 'https://www.bungie.net/common/destiny2_content/icons/9e314283e4c8ff452b19ae4e744ca8a4.jpg';
w9_everImg[4] = 'https://www.bungie.net/common/destiny2_content/icons/1f5fdebd3baa097ec9ac0f317e6bcf5a.jpg';
w9_everImg[5] = 'https://www.bungie.net/common/destiny2_content/icons/4b11623d33028c7defb12e55ef46334c.jpg';
w9_everImg[6] = 'https://www.bungie.net/common/destiny2_content/icons/3cf26bd2b33c91dbf37af086dd8c449a.jpg';
w9_everImg[7] = 'https://www.bungie.net/common/destiny2_content/icons/934442a5b6cc21005d098e44c9194563.jpg';
w9_everImg[8] = 'https://www.bungie.net/common/destiny2_content/icons/90fef217867055eba176f774ae3f76c6.jpg';
w9_everImg[9] = 'https://www.bungie.net/common/destiny2_content/icons/5c59a807ea865f6e7f4872c8427ffeec.jpg';
w9_everImg[10] = 'https://www.bungie.net/common/destiny2_content/icons/d3e99c207f93f61fe1bdef0b76e87005.jpg';


var ever_str = "";

var ever_week = "";

var d = new Date();
var year = d.getFullYear(); // 년도
var month = d.getMonth() + 1;  // 월
var date = d.getDate();  // 날짜
var day = d.getDay();  // 요일

if(month == '12')
{
	if(date >= '22' && date <= '29'){
			for (var i = 0; i < 11; i++) { 
				ever_str = "<div class='card-main'><img src='"+w8_everImg[i]+"' width='40px'/> " + w8_everName[i]+"</div><hr/>"+ever_str;
				ever_week = "2020년 12월 29일까지";
			}
	}else if(date >= '30'){
			for (var i = 0; i < 11; i++) {
				ever_str = "<div class='card-main'>" + w9_everName[i] +"</div><hr/>"+ever_str;
				ever_week = "2020년 1월 5일까지";
			}
		}
}

if(month == '1')
{
	if(date >= '1' && date <= '5'){
		for (var i = 0; i < 11; i++) {
			ever_str = "<div class='card-main'>" + w9_everName[i] +"</div><hr/>"+ever_str;
			ever_week = "2020년 1월 5일까지";
		}
	}
}

