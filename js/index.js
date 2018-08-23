/**
 * Created by 三木 on 2018/8/22.
 */
window.onload=function(){

    //////////////////////////////////选项卡///////////////////////////////////////
    let right_right=document.getElementsByClassName("right_right");
    let shophide=document.getElementsByClassName("shophide");
    right_right[0].onmouseenter=function(){
        shophide[0].style.height="100px";
        shophide[0].style.boxShadow="0 5px 10px 1px rgba(0,0,0,0.15)";

    };
    right_right[0].onmouseleave=function(){
        shophide[0].style.height=0;
        shophide[0].style.boxShadow="none";

    };
    let text=document.getElementsByClassName("text");   //text(只有一个子元素)是html集合，被调用时必须加[0]
    let li=text[0].getElementsByTagName("li");
    let asideBox=document.getElementsByClassName("asideBox");
    for(let i=0;i<li.length;i++){
        li[i].onmouseenter=function(){
            asideBox[i].style.display="block";
        };
        li[i].onmouseleave=function(){
            asideBox[i].style.display="none";
        }
    }


    /*let appliance=document.getElementsByClassName("appliance")[0];
    let applyHead_right=appliance.getElementsByClassName("applyHead_right")[0];
    let applyHead_rightLi=applyHead_right.getElementsByTagName("li");

    let applyBottom_right=appliance.getElementsByClassName("applyBottom_right");

    console.log(applyBottom_right);
    for(let i=0;i<applyHead_rightLi.length;i++){
        applyHead_rightLi[i].onmouseenter=function(){
            for(let i=0;i<applyBottom_right.length;i++){
                applyBottom_right[i].style.zIndex=5;
            }
            applyBottom_right[i].style.zIndex=10;
        };
    }*/
////////////////////////////////////家电//////////////////////////////////////////////////////
    function enter(section){
        let applyHead_right=section.getElementsByClassName("applyHead_right")[0];
        let li_section=applyHead_right.getElementsByTagName("li");

        let applyBottom_right=section.getElementsByClassName("applyBottom_right");
        for(let i=0;i<li_section.length;i++){
            li_section[i].onmouseenter=function(){
                for(let i=0;i<applyBottom_right.length;i++){
                    applyBottom_right[i].style.zIndex=5;
                    li_section[i].className="";
                }
                applyBottom_right[i].style.zIndex=10;
                li_section[i].className="applyHead_hot";
            };
        }
    }


    let appliance=document.getElementsByClassName("appliance")[0];
    enter(appliance);
    let Intelligence=document.getElementsByClassName("Intelligence")[0];
    enter(Intelligence);
    let collocation=document.getElementsByClassName("collocation")[0];
    enter(collocation);
    let parts=document.getElementsByClassName("parts")[0];
    enter(parts);
    let periphery=document.getElementsByClassName("periphery")[0];
    enter(periphery);


////////////////////////////////////banner//////////////////////////////////////////////
    /*1.css初始化  class  z-index
    * 2.setinterval（move，2000）num=0
    * 3.移入 移出banner
    * 4.左右箭头
    * 5.小点点击
    * */
    let banner=document.getElementsByClassName("banner")[0];
    let bannerLi=banner.getElementsByTagName("li");
    
    let dot=document.getElementsByClassName("dot")[0];
    let dotLi=dot.getElementsByTagName("li");
    let btns=document.getElementsByClassName("btns")[0];
    let btns1=document.getElementsByClassName("btns1")[0];
    

    let t=setInterval(move,1000);
    let num=0;
    function move() {                             //如何轮播
        num++;
        if(num==bannerLi.length){
            num=0;
        }
        for(let i=0;i<bannerLi.length;i++){
            bannerLi[i].style.zIndex="5";
            dotLi[i].className="";
        }
        bannerLi[num].style.zIndex="10";
        dotLi[num].className="dotHot";
    }

    function move1() {
        num--;
        if(num<0){
            num=bannerLi.length-1;
        }
        for(let i=0;i<bannerLi.length;i++){
            bannerLi[i].style.zIndex="5";
            dotLi[i].className="";
        }
        bannerLi[num].style.zIndex="10";
        dotLi[num].className="dotHot";
    }

    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,1000);
    };


    btns.onclick=function () {
        clearInterval(t);
        move1();
    };

    btns1.onclick=function () {
        clearInterval(t);
        move();
    };
    for(let i=0;i<dotLi.length;i++){
        dotLi[i].onclick=function () {                     //易错  要遍历
            clearInterval(t);
            for(let j=0;j<bannerLi.length;j++){
                bannerLi[j].style.zIndex="5";
                dotLi[j].className="";
            }
            bannerLi[i].style.zIndex="10";
            dotLi[i].className="dotHot";
            num=i;
        }
    }


};