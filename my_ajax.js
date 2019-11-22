//ajax工具函数-get
function get(url, data, success) {
  var xhr = new XMLHttpRequest();
  if (data) {
    url += "?" + data;
  }
  xhr.open("get", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      success(xhr.responseText); //回调函数
    }
  };
  xhr.send(null);
}

//ajax工具函数-post
function post(url, data, success) {
  var xhr = new XMLHttpRequest();
  xhr.open("post", url);
  if (data) {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      success(xhr.responseText); //回调函数
    }
  }
  xhr.send(data);
}

//ajax工具函数
function ajax(option) {
  var xhr = new XMLHttpRequest();
  if (option.type == 'get' && option.data) {
    option.url += '?' + option.data;
    option.data = null;
  }
  xhr.open(option.type, option.url);
  if (option.type == 'post' && option.data) { //判断post请求传了数据
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var dataType = xhr.getResponseHeader("Content-Type");
      if (dataType.indexOf("json") != -1) { //判断是否为JSON
        option.success(JSON.parse(xhr.responseText));
      } else if (dataType.indexOf("xml") != -1) { //判断是否为XML
        option.success(xhr.responseXML);
      } else { //普通字符串
        option.success(xhr.responseText);
      }
      option.success(xhr.responseText); //回调函数
    }
  }
  xhr.send(option.data);
}