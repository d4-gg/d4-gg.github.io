/************ Start paser *******************/

const pve_metaItems = [
	"한랭전선",
	"이켈로스_SMG_v1.0.2",
	"떨어지는 단두대"
];
const pve_metaItemsImg = [
  "https://www.bungie.net/common/destiny2_content/icons/7a72486e9c68369ee715380a3a525b13.jpg",
"https://www.bungie.net/common/destiny2_content/icons/191270eda665bad75d610611cafab198.jpg",
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