window.onload = function() {
  let list = document.getElementsByClassName("order-list")[0].children;// 订单们
  let status = document.getElementsByClassName("status");// 订单状态
  let checkImg = document.getElementsByClassName("check-status");//单选按钮
  let checkAll = document.getElementById("checkAll"); //全选按钮
  let checkAllStatus = false;// 全选选中状态
  let orderNum = document.getElementById("orderNum");// 开票订单数量
  let totalMoney = document.getElementById("totalMoney");// 开票总金额
  let checkedOrder = document.getElementsByClassName("checked");// 已选中的订单
  let dropdownBtn = document.getElementById("dropdown_btn");// 下拉按钮
  let dropdownMain = document.getElementById("dropdown_main");// 下拉菜单内容
  let dropdownList = dropdownMain.getElementsByTagName("li");// 下拉按钮选项
  let dropdownTltle = document.getElementById("dropdown_title");// 下拉按钮当前选择
  console.log(dropdownList)

  //页面加载后，改变被禁用的订单样式
  for (let i = 0; i < list.length; i++) {
    if (status[i].innerHTML !== '已支付') {
      checkImg[i].className = "check-status disabled";
      list[i].getElementsByTagName("h4")[0].className = "disabled-color";
      list[i].getElementsByClassName("order-header-bd")[0].getElementsByTagName("span")[0].className = "disabled-bg"
    } else {
      checkImg[i].className = "check-status no-check";
    }
  }

  //单选点击事件
  for (let i = 0; i < checkImg.length; i++) {
    // 排除被禁用的订单
    if (checkImg[i].className.indexOf("disabled") === -1) {
      checkImg[i].onclick = function() {
        //改变单选图标
        this.className = this.className.indexOf("checked") === -1 ? "check-status checked" : "check-status no-check";
        //判断是否全部选中
        let check = true;
        for (let j = 0; j < checkImg.length; j++) {
          if (checkImg[j].className.indexOf("disabled") === -1) {
            //只要有一个未选中，check就为false
            if (checkImg[j].className.indexOf("checked") === -1) {
              check = false;
            }
          }
        }
        // 根据check的值改变全选图标
        if (check) {
          checkAll.className = "check-all all";
          checkAllStatus = true;
        } else {
          checkAll.className = "check-all no-check";
          checkAllStatus = false;
        }
        //更新底部数据
        changeAdmit();
      }
    }

  }

  // 全选点击事件
  checkAll.onclick = function() {
    //改变全选状态
    checkAllStatus = !checkAllStatus;
    if (checkAllStatus) {
      this.className = "check-all all";
    } else {
      this.className = "check-all no-check";
    }
    // 根据全选状态改变单选状态
    for (let i = 0; i < checkImg.length; i++) {
      // 排除被禁用的订单
      if (checkImg[i].className.indexOf("disabled") === -1) {
        checkImg[i].className = checkAllStatus ? "check-status checked" : "check-status no-check";
      }
    }
    //更新底部数据
    changeAdmit();
  }

  // 更新底部数据的函数
  function changeAdmit() {
    //更新选中订单数量
    orderNum.innerHTML = checkedOrder.length;
    //更新选中订单发票金额
    var total = 0;
    //如果未选中任何订单，发票金额为0
    if (checkedOrder.length === 0) {
      totalMoney.innerHTML = 0;
    } else {
      //循环选中的订单，金额累加
      for (var k = 0; k < checkedOrder.length; k++) {
        var money = checkedOrder[k].parentNode.getElementsByTagName("b")[0];
        total += parseInt(money.innerHTML);
        totalMoney.innerHTML = total;
      }
    }
  }

  // 下拉按钮点击事件
  dropdownBtn.onclick = function() {
    dropdownMain.style.display = dropdownMain.style.display === "none" ? "block" : "none";
  };

  // 下拉选项点击事件
  for(var i =0; i<dropdownList.length; i++) {
    dropdownList[i].onclick = function () {
      dropdownTltle.innerHTML = this.innerHTML;
      for (var j =0; j<dropdownList.length; j++) {
        dropdownList[j].style.color = "#333";
      }
      this.style.color = "#84CCC9";
      dropdownMain.style.display = "none";
    }
  } 

  // 跳转
  document.getElementById("submit").onclick = function() {
    window.location.href = "../html/invoice.html";
  };
}