(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{332:function(n,a,e){"use strict";e.r(a);var t=e(19),d=Object(t.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"carbon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#carbon"}},[this._v("#")]),this._v(" carbon")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("$date = new Carbon();\n$date = Carbon::now(); // 現在時刻\nnew Carbon('today'); // 今日\nnew Carbon('tomorrow'); // 明日\nnew Carbon('yesterday'); // 昨日\nnew Carbon('now'); // 今\nnew Carbon('last month'); // 前の月\nnew Carbon('next year'); // 次の年\nnew Carbon('+1 day'); // 1日後\nnew Carbon('-2 weeks'); // 2週間前\nnew Carbon('+3 minutes'); // 3分後\nnew Carbon('-4 seconds'); // 4秒前\nnew Carbon('+5 years'); // 5年後\nnew Carbon('-6 months'); // 6ヵ月前\nnew Carbon('2021-01-01'); // 2021年1月1日\nnew Carbon('2021-01-01 01:02:03'); // 2021年1月1日 01時02分03秒\n\n$date->year; // 2021\n$date->month; // 5\n$date->day; // 6\n$date->hour; // 11\n$date->minute; // 22\n$date->second; //56\n$date->format('Y年m月d日'); // 2021年05月06日\n\n$date->dayOfWeek; // 0。週のうちの何日目か 0 (日曜)から 6 (土曜)\n$date->dayOfYear; // 121。年のうちの何日目か 0から開始\n$date->weekOfMonth; // 1。月のうちの何週目か\n$date->weekOfYear; // 17。年のうちの何週目か\n$date->daysInMonth; // 31。 月の日数\n$date->quarter; // 2。 // 四半期\n$date->timestamp; //1462069596 タイムスタンプ\n$date->tzName; // Asia/Tokyo タイムゾーン名\n\n/** 加算 **/\n\n$date = new Carbon('2021-05-01');\n\n$date->addDay(); // 1日後\n$date->addMonth(); // 1ヶ月後(5/31の場合7/1)\n$date->addMonthNoOverflow(); // 1か月後(5/31の場合6/30)\n$date->addYear(); // 1年後\n$date->addYearNoOverflow(); // 1年後(5/31の場合6/30)\n$date->addHour(); // 1時間後\n$date->addSecond(); // 1秒後\n\n$date->addDay(5); // 5日後\n$date->addMonth(5); // 5ヶ月後\n$date->addYear(5); // 5年後\n$date->addHour(5); // 5時間後\n$date->addSecond(5) ; // 5秒後\n\n/** 減算 **/\n\n$date = new Carbon('2016-05-01');\n\n$date->subDay(); // 1日前\n$date->subMonth(); // 1ヶ月前\n$date->subYear(); // 1年前\n$date->subHour(); // 1時間前\n$date->subSecond(); // 1秒前\n$date->subDay(5); // 5日前\n$date->subMonth(5); // 5ヶ月前\n$date->subYear(5); // 5年前\n$date->subHour(5); // 5時間前\n$date->subSecond(5); // 5秒前\n\n\n$date1 = new Carbon('2021-05-01');\n$date2 = Carbon::parse('2021-05-01')->endOfYear();\n\n$date1->diffInSeconds($date2); // 秒\n$date1->diffInMinutes($date2); // 分\n$date1->diffInHours($date2); // 時間\n$date1->diffInDays($date2); // 日\n$date1->diffInWeeks($date2); // 週\n$date1->diffInYears($date2); // 年\n$date1->diffForHumans($date2); // 何日前、何ヶ月後など切り替えて表示\n\n// 2021-05-01から年末まで平日が何日あるか\n $date1->diffInDaysFiltered(function(Carbon $date) {\n    return $date->isWeekday();\n}, $date2); // 175日\n\n\n")])])])])}),[],!1,null,null,null);a.default=d.exports}}]);