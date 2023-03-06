# carbon

```
$date = new Carbon();
$date = Carbon::now(); // 現在時刻
new Carbon('today'); // 今日
new Carbon('tomorrow'); // 明日
new Carbon('yesterday'); // 昨日
new Carbon('now'); // 今
new Carbon('last month'); // 前の月
new Carbon('next year'); // 次の年
new Carbon('+1 day'); // 1日後
new Carbon('-2 weeks'); // 2週間前
new Carbon('+3 minutes'); // 3分後
new Carbon('-4 seconds'); // 4秒前
new Carbon('+5 years'); // 5年後
new Carbon('-6 months'); // 6ヵ月前
new Carbon('2021-01-01'); // 2021年1月1日
new Carbon('2021-01-01 01:02:03'); // 2021年1月1日 01時02分03秒

$date->year; // 2021
$date->month; // 5
$date->day; // 6
$date->hour; // 11
$date->minute; // 22
$date->second; //56
$date->format('Y年m月d日'); // 2021年05月06日

$date->dayOfWeek; // 0。週のうちの何日目か 0 (日曜)から 6 (土曜)
$date->dayOfYear; // 121。年のうちの何日目か 0から開始
$date->weekOfMonth; // 1。月のうちの何週目か
$date->weekOfYear; // 17。年のうちの何週目か
$date->daysInMonth; // 31。 月の日数
$date->quarter; // 2。 // 四半期
$date->timestamp; //1462069596 タイムスタンプ
$date->tzName; // Asia/Tokyo タイムゾーン名

/** 加算 **/

$date = new Carbon('2021-05-01');

$date->addDay(); // 1日後
$date->addMonth(); // 1ヶ月後(5/31の場合7/1)
$date->addMonthNoOverflow(); // 1か月後(5/31の場合6/30)
$date->addYear(); // 1年後
$date->addYearNoOverflow(); // 1年後(5/31の場合6/30)
$date->addHour(); // 1時間後
$date->addSecond(); // 1秒後

$date->addDay(5); // 5日後
$date->addMonth(5); // 5ヶ月後
$date->addYear(5); // 5年後
$date->addHour(5); // 5時間後
$date->addSecond(5) ; // 5秒後

/** 減算 **/

$date = new Carbon('2016-05-01');

$date->subDay(); // 1日前
$date->subMonth(); // 1ヶ月前
$date->subYear(); // 1年前
$date->subHour(); // 1時間前
$date->subSecond(); // 1秒前
$date->subDay(5); // 5日前
$date->subMonth(5); // 5ヶ月前
$date->subYear(5); // 5年前
$date->subHour(5); // 5時間前
$date->subSecond(5); // 5秒前


$date1 = new Carbon('2021-05-01');
$date2 = Carbon::parse('2021-05-01')->endOfYear();

$date1->diffInSeconds($date2); // 秒
$date1->diffInMinutes($date2); // 分
$date1->diffInHours($date2); // 時間
$date1->diffInDays($date2); // 日
$date1->diffInWeeks($date2); // 週
$date1->diffInYears($date2); // 年
$date1->diffForHumans($date2); // 何日前、何ヶ月後など切り替えて表示

// 2021-05-01から年末まで平日が何日あるか
 $date1->diffInDaysFiltered(function(Carbon $date) {
    return $date->isWeekday();
}, $date2); // 175日


```
