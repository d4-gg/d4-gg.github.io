/************ Start paser *******************/

const pve_metaItems = [
	"일곱 번째 세라프 카빈",
	"영혼을 갉아먹는 허기",
	"떨어지는 단두대"
];
const pve_metaItemsImg = [
"https://www.bungie.net/common/destiny2_content/icons/57185dba760340586551e016770d2856.jpg",
"https://www.bungie.net/common/destiny2_content/icons/c4509acb76551495deac51bb29b61248.jpg",
"https://www.bungie.net/common/destiny2_content/icons/b03a9eda1da9844793d2a82f94d5e91e.jpg"
];

const pvp_metaItems = [
	"진홍 핏자국",
	"펠윈터의 거짓말",
	"떨어지는 단두대"
];
const pvp_metaItemsImg = [
"https://www.bungie.net/common/destiny2_content/icons/9a698cbe617a95339c6f885764e68ebc.jpg",
"https://www.bungie.net/common/destiny2_content/icons/4153f60f3f2f53ee6f7e99fa29cb4bdd.jpg",
"https://www.bungie.net/common/destiny2_content/icons/b03a9eda1da9844793d2a82f94d5e91e.jpg"
];
/************ End Item paser *******************/

/************ Python Data *******************/
var pve_meta_str = "";
var pvp_meta_str = "";

const itemType = [
	"물리",
	"에너지",
	"파워"
];


for (var i = 2; i >= 0; i--) {
  pve_meta_str = "<div class='card-main'><img src='" + pve_metaItemsImg[i] + "' width=40px height=40px> [" + itemType[i] + "] " + pve_metaItems[i] + "</div><hr/>" + pve_meta_str;
}
for (var i = 2; i >= 0; i--) {
  pvp_meta_str = "<div class='card-main'><img src='" + pvp_metaItemsImg[i] + "' width=40px height=40px> [" + itemType[i] + "] " + pvp_metaItems[i] + "</div><hr/>" + pvp_meta_str;
}