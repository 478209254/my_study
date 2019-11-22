/**
 * 模板引擎封装
 * @param {string} id 
 * @param {object} data 
 */
function my_template(id, data) {
  var str = document.querySelector("#" + id).innerHTML;
  var reg = /{{(\w+)}}/;
  var result = reg.exec(str);
  while (result) {
    str = str.replace(result[0], data[result[1]]);
    result = reg.exec(str);
  }
  return str;
}