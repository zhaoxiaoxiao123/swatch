// 下拉菜单——button
var btns = document.getElementsByClassName("btn");
for (var item of btns) { 
  item.onclick = function () { 
    if (this.className == "open") {
      this.className = "";
      this.innerHTML = "+";
    } else { 
      openBtn = document.querySelector("button.open");
      if (openBtn!=null) { 
        openBtn.className = "";
        openBtn.innerHTML = "+";
      }
      this.className = "open";
      this.innerHTML = "-";
    }
  }
}

// list 数据
var items = [
  {
    pic: "r_select.jpg",
    title: "LEMONCELLO",
    price:"540.00"
  }
];



