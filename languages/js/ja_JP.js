!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var a=jQuery.fn.select2.amd;return a.define("select2/i18n/ja",[],function(){return{errorLoading:function(){return"結果が読み込まれませんでした"},inputTooLong:function(a){var b=a.input.length-a.maximum,c=b+" 文字を削除してください";return c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="少なくとも "+b+" 文字を入力してください";return c},loadingMore:function(){return"読み込み中…"},maximumSelected:function(a){var b=a.maximum+" 件しか選択できません";return b},noResults:function(){return"対象が見つかりません"},searching:function(){return"検索しています…"}}}),{define:a.define,require:a.require}}(),function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],b):b(a.moment)}(this,function(a){"use strict";var b=a.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 HH:mm dddd",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日 HH:mm dddd"},meridiemParse:/午前|午後/i,isPM:function(a){return"午後"===a},meridiem:function(a,b,c){return a<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";default:return a}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});return b});