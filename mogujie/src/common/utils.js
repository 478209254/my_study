// debounce function
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// data formatter
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : str.padStart(2, '0'));
    }
  }
  return fmt;
};
// 被padStart取代
// function padLeftZero (str) {
//   return ('00' + str).substr(str.length);
// }

//get the day of the week
function getWeekday(data) {
  const weekday=["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return weekday[new Date(data).getDay()];
}