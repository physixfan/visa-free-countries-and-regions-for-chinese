var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldHigh",
    "zoomLevel": 1.0,
    "zoomLongitude": 0,
    "zoomLatitude": 20,
    "areas": [{
      "id": "CN",
      "title": "People's Republic of China",
      "customData": "中国大陆",
      "color": "#FF5733"
    }, {
      "id": "AE",
      "title": "United Arab Emirates",
      "customData": "阿联酋",
      "color": "#FF5733"
    }, {
      "id": "BB",
      "title": "Barbados",
      "customData": "巴巴多斯",
      "color": "#FF5733"
    }, {
      "id": "BS",
      "title": "Bahamas",
      "customData": "巴哈马",
      "color": "#FF5733"
    }, {
      "id": "BA",
      "title": "Bosnia and Herzegovina",
      "customData": "波黑",
      "color": "#FF5733"
    }, {
      "id": "EC",
      "title": "Ecuador",
      "customData": "厄瓜多尔",
      "color": "#FF5733"
    }, {
      "id": "FJ",
      "title": "Fiji",
      "customData": "斐济",
      "color": "#FF5733"
    }, {
      "id": "GD",
      "title": "Grenada",
      "customData": "格林纳达",
      "color": "#FF5733"
    }, {
      "id": "MU",
      "title": "Mauritius",
      "customData": "毛里求斯",
      "color": "#FF5733"
    }, {
      "id": "SM",
      "title": "San Marino",
      "customData": "圣马力诺共和国",
      "color": "#FF5733"
    }, {
      "id": "SC",
      "title": "Seychelles",
      "customData": "塞舌尔",
      "color": "#FF5733"
    }, {
      "id": "RS",
      "title": "Serbia",
      "customData": "塞尔维亚",
      "color": "#FF5733"
    }, {
      "id": "TO",
      "title": "Tonga",
      "customData": "汤加",
      "color": "#FF5733"
    }, {
      "id": "ID",
      "title": "Indonesia",
      "customData": "印度尼西亚",
      "color": "#FF5733"
    }, {
      "id": "MA",
      "title": "Morocco",
      "customData": "摩洛哥",
      "color": "#FF5733"
    }, {
      "id": "RE",
      "title": "Reunion",
      "customData": "法属留尼汪",
      "color": "#FF5733"
    }, {
      "id": "TN",
      "title": "Tunisia",
      "customData": "突尼斯",
      "color": "#FF5733"
    }, {
      "id": "AG",
      "title": "Antigua and Barbuda",
      "customData": "安提瓜和巴布达",
      "color": "#FF5733"
    }, {
      "id": "HT",
      "title": "Haiti",
      "customData": "海地",
      "color": "#FF5733"
    }, {
      "id": "GS",
      "title": "South Georgia and the South Sandwich Islands",
      "customData": "南乔治亚和南桑威奇群岛",
      "color": "#FF5733"
    }, {
      "id": "KN",
      "title": "Saint Kitts and Nevis",
      "customData": "圣基茨和尼维斯",
      "color": "#FF5733"
    }, {
      "id": "TC",
      "title": "Turks and Caicos Islands",
      "customData": "特克斯和凯科斯群岛",
      "color": "#FF5733"
    }, {
      "id": "JM",
      "title": "Jamaica",
      "customData": "牙买加",
      "color": "#FF5733"
    }, {
      "id": "DM",
      "title": "Dominica",
      "customData": "多米尼克",
      "color": "#FF5733"
    }, {
      "id": "MP",
      "title": "Northern Mariana Islands",
      "customData": "美属北马里亚纳群岛",
      "color": "#FF5733"
    }, {
      "id": "WS",
      "title": "Samoa",
      "customData": "萨摩亚",
      "color": "#FF5733"
    }, {
      "id": "PF",
      "title": "French Polynesia",
      "customData": "法属波利尼西亚",
      "color": "#FF5733"
    }, {
      "id": "AZ",
      "title": "Azerbaijan",
      "customData": "阿塞拜疆",
      "color": "#C70039"
    }, {
      "id": "BH",
      "title": "Bahrain",
      "customData": "巴林",
      "color": "#C70039"
    }, {
      "id": "TL",
      "title": "Timor-Leste",
      "customData": "东帝汶",
      "color": "#C70039"
    }, {
      "id": "QA",
      "title": "Qatar",
      "customData": "卡塔尔",
      "color": "#C70039"
    }, {
      "id": "LA",
      "title": "Laos",
      "customData": "老挝",
      "color": "#C70039"
    }, {
      "id": "LB",
      "title": "Lebanon",
      "customData": "黎巴嫩",
      "color": "#C70039"
    }, {
      "id": "MV",
      "title": "Maldives",
      "customData": "马尔代夫",
      "color": "#C70039"
    }, {
      "id": "MM",
      "title": "Burma",
      "customData": "缅甸",
      "color": "#C70039"
    }, {
      "id": "NP",
      "title": "Nepal",
      "customData": "尼泊尔",
      "color": "#C70039"
    }, {
      "id": "LK",
      "title": "Sri Lanka",
      "customData": "斯里兰卡",
      "color": "#C70039"
    }, {
      "id": "TH",
      "title": "Thailand",
      "customData": "泰国",
      "color": "#C70039"
    }, {
      "id": "TM",
      "title": "Turkmenistan",
      "customData": "土库曼斯坦",
      "color": "#C70039"
    }, {
      "id": "BN",
      "title": "Brunei",
      "customData": "文莱",
      "color": "#C70039"
    }, {
      "id": "IR",
      "title": "Iran",
      "customData": "伊朗",
      "color": "#C70039"
    }, {
      "id": "AM",
      "title": "Armenia",
      "customData": "亚美尼亚",
      "color": "#C70039"
    }, {
      "id": "JO",
      "title": "Jordan",
      "customData": "约旦",
      "color": "#C70039"
    }, {
      "id": "VN",
      "title": "Vietnam",
      "customData": "越南",
      "color": "#C70039"
    }, {
      "id": "KH",
      "title": "Cambodia",
      "customData": "柬埔寨",
      "color": "#C70039"
    }, {
      "id": "BD",
      "title": "Bangladesh",
      "customData": "孟加拉国",
      "color": "#C70039"
    }, {
      "id": "EG",
      "title": "Egypt",
      "customData": "埃及",
      "color": "#C70039"
    }, {
      "id": "TG",
      "title": "Togo",
      "customData": "多哥",
      "color": "#C70039"
    }, {
      "id": "CV",
      "title": "Cape Verde",
      "customData": "佛得角",
      "color": "#C70039"
    }, {
      "id": "GA",
      "title": "Gabon",
      "customData": "加蓬",
      "color": "#C70039"
    }, {
      "id": "GW",
      "title": "Guinea-Bissau",
      "customData": "几内亚比绍",
      "color": "#C70039"
    }, {
      "id": "KM",
      "title": "Comoros",
      "customData": "科摩罗",
      "color": "#C70039"
    }, {
      "id": "CI",
      "title": "Côte d'Ivoire",
      "customData": "科特迪瓦",
      "color": "#C70039"
    }, {
      "id": "RW",
      "title": "Rwanda",
      "customData": "卢旺达",
      "color": "#C70039"
    }, {
      "id": "MG",
      "title": "Madagascar",
      "customData": "马达加斯加",
      "color": "#C70039"
    }, {
      "id": "MW",
      "title": "Malawi",
      "customData": "马拉维",
      "color": "#C70039"
    }, {
      "id": "MR",
      "title": "Mauritania",
      "customData": "毛里塔尼亚",
      "color": "#C70039"
    }, {
      "id": "ST",
      "title": "Sao Tome and Principe",
      "customData": "圣多美和普林西比",
      "color": "#C70039"
    }, {
      "id": "TZ",
      "title": "Tanzania",
      "customData": "坦桑尼亚",
      "color": "#C70039"
    }, {
      "id": "UG",
      "title": "Uganda",
      "customData": "乌干达",
      "color": "#C70039"
    }, {
      "id": "BO",
      "title": "Bolivia",
      "customData": "玻利维亚",
      "color": "#C70039"
    }, {
      "id": "GY",
      "title": "Guyana",
      "customData": "圭亚那",
      "color": "#C70039"
    }, {
      "id": "SR",
      "title": "Suriname",
      "customData": "苏里南",
      "color": "#C70039"
    }, {
      "id": "SH",
      "title": "Saint Helena",
      "customData": "圣赫勒拿",
      "color": "#C70039"
    }, {
      "id": "PW",
      "title": "Palau",
      "customData": "帕劳",
      "color": "#C70039"
    }, {
      "id": "TV",
      "title": "Tuvalu",
      "customData": "图瓦卢",
      "color": "#C70039"
    }, {
      "id": "VU",
      "title": "Vanuatu",
      "customData": "瓦努阿图",
      "color": "#C70039"
    }, {
      "id": "US",
      "title": "United States of America",
      "customData": "美国",
      "color": "#CCCC00"
    }, {
      "id": "GU",
      "title": "Guam",
      "customData": "关岛",
      "color": "#CCCC00"
    }, {
      "id": "PR",
      "title": "Puerto Rico",
      "customData": "波多黎各",
      "color": "#CCCC00"
    }, {
      "id": "VI",
      "title": "US Virgin Islands",
      "customData": "美属维尔京群岛",
      "color": "#CCCC00"
    }, {
      "id": "AS",
      "title": "American Samoa",
      "customData": "美属萨摩亚",
      "color": "#CCCC00"
    }, {
      "id": "UM",
      "title": "US Minor Outlying Islands",
      "customData": "美国本土外小岛屿",
      "color": "#CCCC00"
    }, {
      "id": "MX",
      "title": "Mexico",
      "customData": "墨西哥",
      "color": "#CCCC00"
    }, {
      "id": "BM",
      "title": "Bermuda",
      "customData": "百慕大",
      "color": "#CCCC00"
    }, {
      "id": "AW",
      "title": "Aruba",
      "customData": "阿鲁巴",
      "color": "#CCCC00"
    }, {
      "id": "CW",
      "title": "Curaçao",
      "customData": "库拉索",
      "color": "#CCCC00"
    }, {
      "id": "BQ",
      "title": "Bonaire, Sint Eustatius and Saba (Caribbean Netherlands)",
      "customData": "BES 群岛（加勒比荷兰）",
      "color": "#CCCC00"
    }, {
      "id": "SX",
      "title": "Sint Maarten",
      "customData": "荷属圣马丁",
      "color": "#CCCC00"
    }, {
      "id": "MS",
      "title": "Montserrat",
      "customData": "蒙特塞拉特",
      "color": "#CCCC00"
    }, {
      "id": "DO",
      "title": "Dominican Republic",
      "customData": "多米尼加共和国",
      "color": "#CCCC00"
    }, {
      "id": "CR",
      "title": "Costa Rica",
      "customData": "哥斯达黎加",
      "color": "#CCCC00"
    }, {
      "id": "PA",
      "title": "Panama",
      "customData": "巴拿马",
      "color": "#CCCC00"
    }, {
      "id": "BZ",
      "title": "Belize",
      "customData": "伯利兹",
      "color": "#CCCC00"
    }, {
      "id": "CO",
      "title": "Colombia",
      "customData": "哥伦比亚",
      "color": "#CCCC00"
    }, {
      "id": "CL",
      "title": "Chile",
      "customData": "智利",
      "color": "#CCCC00"
    }, {
      "id": "PE",
      "title": "Peru",
      "customData": "秘鲁",
      "color": "#CCCC00"
    }, {
      "id": "UY",
      "title": "Uruguay",
      "customData": "乌拉圭",
      "color": "#CCCC00"
    }, {
      "id": "GE",
      "title": "Georgia",
      "customData": "格鲁吉亚",
      "color": "#CCCC00"
    }, {
      "id": "AL",
      "title": "Albania",
      "customData": "阿尔巴尼亚",
      "color": "#CCCC00"
    }, {
      "id": "ME",
      "title": "Montenegro",
      "customData": "黑山",
      "color": "#CCCC00"
    }, {
      "id": "MK",
      "title": "Macedonia",
      "customData": "马其顿",
      "color": "#CCCC00"
    }, {
      "id": "PH",
      "title": "Philippines",
      "customData": "菲律宾",
      "color": "#CCCC00"
    }, {
      "id": "KR",
      "title": "Korea (Republic of)",
      "customData": "韩国",
      "color": "#CCCC00"
    }, {
      "id": "OM",
      "title": "Oman",
      "customData": "阿曼",
      "color": "#CCCC00"
    }, {
      "id": "BY",
      "title": "Belarus",
      "customData": "白罗斯",
      "color": "#FF5733"
    }, {
      "id": "QA",
      "title": "Qatar",
      "customData": "卡塔尔",
      "color": "#FF5733"
    }, {
      "id": "IR",
      "title": "Iran (Islamic Republic of)",
      "customData": "伊朗",
      "color": "#FF5733"
    }, {
      "id": "BJ",
      "title": "Benin",
      "customData": "贝宁",
      "color": "#C70039"
    }, {
      "id": "ZW",
      "title": "Zimbabwe",
      "customData": "津巴布韦",
      "color": "#C70039"
    }, {
      "id": "KY",
      "title": "Cayman Islands",
      "customData": "开曼群岛",
      "color": "#CCCC00"
    }, {
      "id": "HN",
      "title": "Honduras",
      "customData": "洪都拉斯",
      "color": "#CCCC00"
    }, {
      "id": "VG",
      "title": "British Virgin Islands",
      "customData": "英属维尔京群岛",
      "color": "#FF5733"
    }, {
      "id": "LC",
      "title": "Saint Lucia",
      "customData": "圣卢西亚",
      "color": "#FF5733"
    }]
  },

  "areasSettings": {
    "rollOverOutlineColor": "#FFFFFF",
    "rollOverColor": "#000000",
    "alpha": 0.8,
    "unlistedAreasAlpha": 0.1,
    "balloonText": "[[customData]]" + " [[title]]"
  },


  "legend": {
    "width": "100%",
    "marginRight": 27,
    "marginLeft": 27,
    "equalWidths": false,
    "backgroundAlpha": 0.5,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#ffffff",
    "borderAlpha": 1,
    "top": 445,
    "left": 0,
    "horizontalGap": 10,
    "data": [{
      "title": "免签",
      "color": "#FF5733"
    }, {
      "title": "落地签",
      "color": "#C70039"
    }, {
      "title": "持有美签可以免签",
      "color": "#CCCC00"
    }]
  },
  "export": {
    "enabled": true
  }

});

