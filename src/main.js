let demo = document.querySelector("#demo")
let style = document.querySelector("#style")
let btnPause = document.querySelector("#btnPause")
let btnPlay = document.querySelector("#btnPlay")
let btnSlow = document.querySelector("#btnSlow")
let btnNormal = document.querySelector("#btnNormal")
let btnFast = document.querySelector("#btnFast")
let string = `
/*
**今天，我给大家画一个我最喜欢的卡通人物
**那就是哆啦A梦
**让我先把字体变成它的本体色
*/
body{
    color:#07bbee;
}
/*
**先让我画它的头部
*/
.head {
    position: absolute;
    width: 230px;
    height: 202px;
    border: 1px solid #555;
    border-radius: 120px;
    top: 120px;
    left: 50%;
    margin-left: -115px;
    background: #07bbee;
}
/*
**接下来就要画它的脸啦
*/
.face {
    position: absolute;
    bottom: 10px;
    left: 50%;
    background-color: white;
    width: 176px;
    height: 145px;
    margin-left: -89px;
    border-radius: 50%;
}
/*
**接下来是眼睛
*/
.eyes {

    width: 100px;
    height: 100px;
    position: absolute;
    top: 26px;
    left: 50%;
    margin-left: -50px;
}

.eye {
    border: rgb(10, 10, 10) solid 1px;
    width: 50px;
    height: 59px;
    border-radius: 23px;
    position: absolute;
    background-color: white;
}

.eye.left {
    left: 0;
}

.eye.right {
    right: 0;
}
/*
**没有眼珠的眼睛太空洞了
**那就给它画个眼珠吧
*/
.zhu {
    height: 10px;
    width: 10px;
    border: rgb(10, 10, 10) solid 1px;
    background-color: black;
    border-radius: 5px;
    position: absolute;
    top: 28px;
}

.zhu.left {
    position: absolute;
    right: 8px;
}

.zhu.right {
    position: absolute;
    left: 8px;
}

.nose {
    border: rgb(218, 30, 30) solid 1px;
    width: 20px;
    height: 22px;
    background-color: #C93300;
    border-radius: 9px;
    position: absolute;
    left: 50%;
    margin-left: -9px;
    top: 30px;
}
/*
**接下来我要画它的嘴巴了
*/
.lip.top {
    border: rgb(10, 10, 10) solid 1.2px;
    background-color: black;
    height: 62px;
    width: 0px;
    position: absolute;
    top: 52px;
    left: 50%;
}

.face::after {
    background-color: rgb(255, 255, 255);
    width: 20px;
    height: 37px;
    position: absolute;
    display: block;
    content: '';
    top: 50px;
    left: 18px;
}

.face::before {
    background-color: rgb(255, 255, 255);
    width: 20px;
    height: 37px;
    position: absolute;
    display: block;
    content: '';
    top: 50px;
    left: 140px;
    z-index: 1;
}

.lip.bottom {
    width: 140px;
    height: 140px;
    position: absolute;
    border-bottom: 2px solid black;
    top: -25px;
    left: 50%;
    margin-left: -70px;
    border-radius: 68px;
}
/*
**我最爱的胡须来了
*/
.whiskers {
    /* border: rgb(10, 10, 10) solid 1.2px; */
    width: 150px;
    height: 50px;
    position: absolute;
    top: 34px;
    left: 50%;
    margin-left: -70px;
}

.whiskersLeft {
    position: absolute;
    height: 50px;
    width: 50px;
}

.whiskersRight {
    position: absolute;
    right: 0;
    height: 50px;
    width: 50px;
}

.leftTop {
    width: 42px;
    height: 1.5px;
    transform: rotate(20deg);
    background-color: rgb(73, 73, 73);
    position: absolute;
    top: 15px;
    z-index: 3;
}

.leftMiddle {
    width: 42px;
    height: 1px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top: 30px;
    z-index: 3;
}

.leftBottom {
    width: 42px;
    height: 1.5px;
    transform: rotate(-20deg);
    background-color: rgb(73, 73, 73);
    position: absolute;
    top: 45px;
    z-index: 3;
}

.rightTop {
    width: 42px;
    height: 1.5px;
    transform: rotate(-20deg);
    background-color: rgb(73, 73, 73);
    position: absolute;
    top: 15px;
    z-index: 3;
}

.rightMiddle {
    width: 42px;
    height: 1px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top: 30px;
    z-index: 3;
}

.rightBottom {
    width: 42px;
    height: 1.5px;
    transform: rotate(20deg);
    background-color: rgb(73, 73, 73);
    position: absolute;
    top: 45px;
    z-index: 3;
}
/*红红的脖子才是最可爱的呢
*/
.neck {
    position: absolute;
    width: 180px;
    background-color: #C93300;
    height: 22px;
    top: 300px;
    left: 50%;
    margin-left: -90px;
    border-radius: 10px;
    z-index: 2;
}
/*
**没有铃铛怎么行呢
**让我给它加上铃铛吧
*/
.bell {
    width: 36px;
    height: 36px;
    background-color: yellow;
    position: absolute;
    left: 50%;
    margin-left: -18px;
    top: 10px;
    border-radius: 50%;
    border: black solid 1px;
}

.react {
    width: 34px;
    height: 5px;
    position: absolute;
    border: black solid 1px;
    top: 11px;
    left: 50%;
    margin-left: -17px;
}

.yuan {
    position: absolute;
    width: 7px;
    height: 6px;
    background-color: black;
    border-radius: 6px;
    top: 18px;
    left: 50%;
    margin-left: -3.5px;
}

.shu {
    position: absolute;
    width: 2px;
    height: 13px;
    background-color: black;
    border-radius: 6px;
    top: 22px;
    left: 50%;
    margin-left: -1px;
}
/*
**接下来我要画它的身子了
*/
.itBottom {
    /* border: tomato solid 1px; */
    position: relative;
    width: 350px;
    height: 200px;
    top: 315px;
    left: 50%;
    margin-left: -175px;
    overflow: hidden;
}

.body {
    border: rgb(7, 7, 7) solid 1px;
    position: absolute;
    width: 170px;
    height: 130px;
    top: 0px;
    left: 50%;
    margin-left: -85px;
    background-color: #07bbee;
    overflow: hidden;
    border-bottom: transparent;
}

.body::before {
    width: 18px;
    height: 18px;
    bottom: -9px;
    content: '';
    display: block;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    border: rgb(7, 7, 7) solid 1px;
    left: 50%;
    margin-left: -8px;

}

.duzi {
    border: rgb(7, 7, 7) solid 1px;
    border-top: transparent;
    position: absolute;
    width: 130px;
    height: 130px;
    background-color: rgb(255, 255, 255);
    top: -24px;
    left: 50%;
    margin-left: -65px;
    border-radius: 50%;
}

.ding {
    border-top: rgb(7, 7, 7) solid 1px;
    width: 100px;
    height: 50px;
    position: relative;
    left: 50%;
    margin-left: -50px;
    top: 44px;
    overflow: hidden;
}

.dou {
    border: rgb(7, 7, 7) solid 1px;
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 0;
    border-radius: 50%;
}
/*
**jiojio也来了
*/
.foot {
    width: 202px;
    height: 50px;
    position: relative;
    /* border: rgb(7, 7, 7) solid 1px; */
    top: 45px;
    left: 50%;
    margin-left: -102px;
}

.footLeft {
    width: 100px;
    height: 25px;
    position: absolute;
    border: rgb(7, 7, 7) solid 1px;
    top: 0px;
    left: 0;
    border-radius: 30px 20px;
}

.footRight {
    width: 100px;
    height: 25px;
    position: absolute;
    border: rgb(7, 7, 7) solid 1px;
    top: 0px;
    right: 0;
    border-radius: 30px 20px;
}
/*
**呀还没有胳膊
**怎么可以呢
*/
.hand{
    position: relative;
    height: 200px;
    width: 300px;
    /* border: rgb(0, 0, 0) solid 1px; */
    top: 50px;
    left: 50%;
    margin-left: -150px;
}

.handLeft{
    width: 40px;
    height: 40px;
    position: absolute;
    border: rgb(0, 0, 0) solid 1px;
    top: 68px;
    left: 50%;
    margin-left: -116px;
    transform: rotate(-30deg);
    background-color:  #07bbee;
    z-index: 1;
    border-right: transparent;
}
.zhuaLeft{
    content: '';
    display: block;
    border: rgb(0, 0, 0) solid 1px;
    width: 40px;
    height: 40px;
    border-radius: 18px;
    position: absolute;
    top: 76px;
    left: 20px;
    z-index: 2;
    background-color: white;
}
.handRight{
    width: 40px;
    height: 40px;
    position: absolute;
    border: rgb(0, 0, 0) solid 1px;
    top: 68px;
    left: 50%;
    margin-left: 76px;
    transform: rotate(30deg);
    background-color:  #07bbee;
    z-index: 1;
    border-left: transparent;
}
.zhuaRight{
    content: '';
    display: block;
    border: rgb(0, 0, 0) solid 1px;
    width: 40px;
    height: 40px;
    border-radius: 18px;
    position: absolute;
    top: 76px;
    left: 239px;
    z-index: 2;
    background-color: white;
}
/*
**我最爱的蓝胖胖画好了
**但是感觉缺点灵感
**看我让它通过眼神和你交流
*/
.zhu {
    animation: eyemove 5s linear infinite;
}

@keyframes eyemove {
    60% {
        margin: 0 0 0 0;
    }

    70% {
        margin: -15px 0 0 0;
    }

    75% {
        margin: -15px 0 0 -5px;
        margin-right: -5px;
    }

    80% {
        margin: -15px 0 0 5px;
        margin-right: 5px;
    }

    87% {
        margin: -15px 0 0 0;
    }

    90% {
        margin: 0 0 0 0;
    }
}
/*
**好了
**我的作品完成了
**一个可爱的蓝胖胖送给你哦
*/

`
let string2 = ""
let n = 0
let time = 50
let step = () => {
    let id = setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        demo.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999);
        demo.scrollTo(0, 9999);
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, time)
    btnPause.onclick = () => {
        window.clearTimeout(id)
    }
    btnPlay.onclick = () => {
        step()
    }
    btnSlow.onclick = () => {
        window.clearTimeout(id)
        time = 100
        step()
    }
    btnNormal.onclick = () => {
        window.clearTimeout(id)
        time = 50
        step()
    }
    btnFast.onclick = () => {
        window.clearTimeout(id)
        time = 20
        step()
    }
}
step()