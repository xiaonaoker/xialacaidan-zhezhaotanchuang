window.onload=function() {
    //函数的声明
    var flag = [false, false, false],
        titles,
        title1 = document.getElementById("title1"),
        title2 = document.getElementById("title2"),
        title3 = document.getElementById("title3"),
        menus,
        menu1 = document.getElementById("menu1"),
        menu2 = document.getElementById("menu2"),
        menu3 = document.getElementById("menu3"),
        lists,
        list1 = document.getElementById("list1"),
        list2 = document.getElementById("list2"),
        list3 = document.getElementById("list3"),
        cells2,
        cells2_11, cells2_12, cells2_13, cells2_14,
        cells2_21, cells2_22, cells2_23, cells2_24,
        cells2_31, cells2_32;
        var screen=document.getElementById("screen"),
            dialog=document.getElementById("dialog"),
            close=document.getElementById("close"),
            dialog_submit=document.getElementById("dialog_submit"),
            login=false;
    close.onclick=function(){
        dialog.style.display="none";
        screen.style.display="none";
    };
    dialog_submit.onclick=function(){
        dialog.style.display="none";
        screen.style.display="none";
        login=true;
    };
    dialog_submit.onmouseover=function(){
        dialog_submit.style.backgroundColor="skyblue";
    };
    dialog_submit.onmouseout=function(){
        dialog_submit.style.backgroundColor="lightblue";
    };

    //封装函数：二级列表悬浮效果和点击事件
    var cellHover2 = function (event, parentnode, colorin, colorout) {
        parentnode.onmouseover = function (event) {
            if (event.target.className == "cells2") {
                event.target.style.backgroundColor = colorin;
            }
        };
        parentnode.onmouseout = function (event) {
            if (event.target.className == "cells2") {
                event.target.style.backgroundColor = colorout;
            }
        };
        parentnode.onclick = function (event) {
            if (event.target.className == "cells2") {
                if(login==false){
                    screen.style.display="block";
                    screen.style.height=innerHeight+"px";
                    screen.style.width=innerWidth+"px";
                    list1.innerHTML="";
                    list2.innerHTML="";
                    list3.innerHTML="";
                    dialog.style.display="block";
                    dialog.style.top=((innerHeight-dialog.offsetHeight)/2)+"px";//窗口可放在屏幕中间
                    dialog.style.left=((innerWidth-dialog.offsetWidth)/2)+"px";
                }else{
                    list1.innerHTML="";
                    list2.innerHTML="";
                    list3.innerHTML="";
                    alert("这里是\"" + event.target.id + "：" + event.target.innerHTML + "\"的内容")
                }
            }
        };
    };
    //二级列表悬浮点击事件
    cellHover2(event, menu1, "#ddd", "#ccc");
    cellHover2(event, menu2, "#ddd", "#ccc");
    cellHover2(event, menu3, "#ddd", "#ccc");

    //封装函数：添加子节点的函数
    var createElement = function (parentnode, id, classname) {
        var nodename = document.createElement("div");
        parentnode.appendChild(nodename);
        nodename.id = id;
        nodename.className = classname;
        nodename = null;
    };

    //点击某菜单动态添加收起列表
    title1.addEventListener("click", function () {
        if (flag[0] == false) {
            list1.innerHTML = "";
            createElement(list1, "cells2_11", "cells2");
            cells2_11 = document.getElementById("cells2_11");
            createElement(list1, "cells2_12", "cells2");
            cells2_12 = document.getElementById("cells2_12");
            createElement(list1, "cells2_13", "cells2");
            cells2_13 = document.getElementById("cells2_13");
            createElement(list1, "cells2_14", "cells2");
            cells2_14 = document.getElementById("cells2_14");
            cells2_11.innerHTML = "第一季度";
            cells2_12.innerHTML = "第二季度";
            cells2_13.innerHTML = "第三季度";
            cells2_14.innerHTML = "第四季度";
            flag[0] = true;
        } else {
            list1.innerHTML = "";
            flag[0] = false;
        }
    });
    title2.addEventListener("click", function () {
        if (flag[1] == false) {
            list2.innerHTML = "";
            createElement(list2, "cells2_21", "cells2");
            cells2_21 = document.getElementById("cells2_21");
            createElement(list2, "cells2_22", "cells2");
            cells2_22 = document.getElementById("cells2_22");
            createElement(list2, "cells2_23", "cells2");
            cells2_23 = document.getElementById("cells2_23");
            createElement(list2, "cells2_24", "cells2");
            cells2_24 = document.getElementById("cells2_24");
            cells2_21.innerHTML = "火相星座";
            cells2_22.innerHTML = "地相星座";
            cells2_23.innerHTML = "风相星座";
            cells2_24.innerHTML = "水相星座";
            flag[1] = true;
        } else {
            list2.innerHTML = "";
            flag[1] = false;
        }
    });
    title3.addEventListener("click", function () {
        if (flag[2] == false) {
            list3.innerHTML = "";
            createElement(list3, "cells2_31", "cells2");
            cells2_31 = document.getElementById("cells2_31");
            createElement(list3, "cells2_32", "cells2");
            cells2_32 = document.getElementById("cells2_32");
            cells2_31.innerHTML = "学业";
            cells2_32.innerHTML = "工作";
            flag[2] = true;
        } else {
            list3.innerHTML = "";
            flag[2] = false;
        }
    });
    //在点击菜单后悬浮菜单上能下拉
    title1.addEventListener("mouseover", function () {
        if ((flag[0] || flag[1] || flag[2]) == true) {
            list1.innerHTML = "";
            list2.innerHTML = "";
            list3.innerHTML = "";
            createElement(list1, "cells2_11", "cells2");
            cells2_11 = document.getElementById("cells2_11");
            createElement(list1, "cells2_12", "cells2");
            cells2_12 = document.getElementById("cells2_12");
            createElement(list1, "cells2_13", "cells2");
            cells2_13 = document.getElementById("cells2_13");
            createElement(list1, "cells2_14", "cells2");
            cells2_14 = document.getElementById("cells2_14");
            cells2_11.innerHTML = "第一季度";
            cells2_12.innerHTML = "第二季度";
            cells2_13.innerHTML = "第三季度";
            cells2_14.innerHTML = "第四季度";
            flag[0] = true;
        }
    });
    title2.addEventListener("mouseover", function () {
        if ((flag[0] || flag[1] || flag[2]) == true) {
            list1.innerHTML = "";
            list2.innerHTML = "";
            list3.innerHTML = "";
            createElement(list2, "cells2_21", "cells2");
            cells2_21 = document.getElementById("cells2_21");
            createElement(list2, "cells2_22", "cells2");
            cells2_22 = document.getElementById("cells2_22");
            createElement(list2, "cells2_23", "cells2");
            cells2_23 = document.getElementById("cells2_23");
            createElement(list2, "cells2_24", "cells2");
            cells2_24 = document.getElementById("cells2_24");
            cells2_21.innerHTML = "火相星座";
            cells2_22.innerHTML = "地相星座";
            cells2_23.innerHTML = "风相星座";
            cells2_24.innerHTML = "水相星座";
            flag[1] = true;
        }
    });
    title3.addEventListener("mouseover", function () {
        if ((flag[0] || flag[1] || flag[2]) == true) {
            list1.innerHTML = "";
            list2.innerHTML = "";
            list3.innerHTML = "";
            createElement(list3, "cells2_31", "cells2");
            cells2_31 = document.getElementById("cells2_31");
            createElement(list3, "cells2_32", "cells2");
            cells2_32 = document.getElementById("cells2_32");
            cells2_31.innerHTML = "学业";
            cells2_32.innerHTML = "工作";
            flag[2] = true;
        }
    })











}
