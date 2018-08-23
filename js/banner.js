/**
 * Created by 三木 on 2018/8/23.
 */
window.onload=function () {
    let bannerbox=document.getElementsByClassName("bannerbox")[0];
    let banner=bannerbox.getElementsByClassName("banner")[0];
    let bannerLi=banner.getElementsByTagName("li");
    console.log(bannerLi);

    let dot=document.getElementsByClassName("dot")[0];
    let dotLi=dot.getElementsByTagName("li");
    console.log(dotLi);

    let btns=bannerbox.getElementsByClassName("btns")[0];
    let btns1=bannerbox.getElementsByClassName("btns1")[0];

    //自动轮播
    let now=next=0;
    let t=setInterval(move,2000);

    function move() {
        next++;
        if(next==bannerLi.length){
            next=0;
        }
        bannerLi[next].style.left="1226px";
        animate(bannerLi[now],{left:-1226});
        animate(bannerLi[next],{left:0});
        dotLi[now].className="";
        dotLi[next].className="dotHot";
        // now=next;
    }
    function move1() {
        next--;
        if(next<0){
            next=bannerLi.length-1;
        }
        bannerLi[next].style.left="-1226px";
        animate(bannerLi[now],{left:1226});
        animate(bannerLi[next],{left:0});
        dotLi[now].className="";
        dotLi[next].className="dotHot";
        now=next;
    }

    //鼠标移入
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    };
    //按钮点击
    btns.onclick=function(){
        clearInterval(t);
        move();
    };
    btns1.onclick=function(){
        clearInterval(t);
        move1();
    };

    for (let i=0;i<dotLi.length;i++){
        dotLi[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                bannerLi[i].style.left="1226px";
                animate(bannerLi[now],{left:-1226});
                animate(bannerLi[i],{left:0});
                dotLi[now].className="";
                dotLi[i].className="change";
            }else{
                bannerLi[i].style.left="-1226px";
                animate(bannerLi[now],{left:1226});
                animate(bannerLi[i],{left:0});
                dotLi[now].className="";
                dotLi[i].className="change";
            }
            next=now=i;
        }

    }












}