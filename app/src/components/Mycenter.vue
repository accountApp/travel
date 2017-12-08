<template>
    <div id="personCenter">
        <div class="top">
            <div class="t-circle">
                <div class="cir-img"></div>
            </div>
            <div class="word1">Charles Mark</div>
            <div class="word1" style="margin-top:2px;">I really like the scenery of the city</div>
            <ul class="slh">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class="star">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="message"></div>
            <div class="set"></div>
        </div>
        <div class="related">
            <div class="related-top">
                <div class="rt-biao"></div>
                <div class="rt-title">
                    <div class="rt-title1">与我相关</div>
                    <div class="rt-title2">ORDER INQUIRY</div>
                </div>
            </div>
            <div class="related-bottom">
                <div class="related-big">
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">ALL ORDERS</div>
                            <div class="rson-s2">全部订单</div>
                        </div>
                    </div>
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">WAIT FOR PAYMENT</div>
                            <div class="rson-s2">等待付款</div>
                        </div>
                    </div>
                </div>
                <div class="related-big">
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">WAITING FOR TRAVEL</div>
                            <div class="rson-s2">等待出行</div>
                        </div>
                    </div>
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">WAITING COMMENT</div>
                            <div class="rson-s2">等待点评</div>
                        </div>
                    </div>
                </div>
                <div class="related-big">
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">MY WALLET</div>
                            <div class="rson-s2">我的钱包</div>
                        </div>
                    </div>
                    <div class="related-son">
                        <div class="rson-left">
                            <div class="rson-l1"></div>
                        </div>
                        <div class="rson-right">
                            <div class="rson-s1">DAILY ATTENDANCE</div>
                            <div class="rson-s2">每日签到</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="bottom">
            <div class="related-top">
                <div class="rt-biao"></div>
                <div class="rt-title">
                    <div class="rt-title1">常用功能</div>
                    <div class="rt-title2">COMMONLY USED FUNCTION</div>
                </div>
            </div>
            <div class="bmiddle">
                <ul>
                    <li>
                        <img src="/src/assets/img/geren-icon-shoucang@2x.png" alt="">
                    </li>
                    <li>
                        我的收藏
                    </li>
                    <li>6</li>
                </ul>
                <ul>
                    <li style="background-image: -webkit-radial-gradient(top,#81f0b5,#39eaa1);box-shadow: 0 0 0.04rem 0.01rem #d8e8ff;">
                        <img src="/src/assets/img/geren-icon-lishi@2x.png" alt="">
                    </li>
                    <li>
                        浏览历史
                    </li>
                    <li>5</li>
                </ul>
                <ul>
                    <li style="background-image: -webkit-radial-gradient(top,#ffd02b,#ffb934);box-shadow: 0 0 0.04rem 0.01rem #d8e8ff;">
                        <img src="/src/assets/img/geren-icon-changyong@2x.png" alt="">
                    </li>
                    <li>
                        常用信息
                    </li>
                    <div class="circle">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </ul>
                <ul>
                    <li>
                        <img src="/src/assets/img/geren-icon-guwen@2x.png" alt="">
                    </li>
                    <li>
                        专属顾问
                    </li>
                    <div class="circle">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </ul>
                <ul>
                    <li style="background-image: -webkit-radial-gradient(top,#81f0b5,#39eaa1);box-shadow: 0 0 0.04rem 0.01rem #d8e8ff;">
                        <img src="/src/assets/img/geren-icon-zhushou@2x.png" alt="">
                    </li>
                    <li>
                        行程助手
                    </li>
                    <div class="circle">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </ul>
                <ul>
                    <li style="background-image: -webkit-radial-gradient(top,#ffd02b,#ffb934);box-shadow: 0 0 0.04rem 0.01rem #d8e8ff;">
                        <img src="/src/assets/img/geren-icon-shequ@2x.png" alt="">
                    </li>
                    <li>
                        社区交友
                    </li>
                    <div class="circle">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </ul>
                <ul>
                    <p @click="logout" class="logout">退出</p>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods:{
            logout(){
                mui.toast("退出成功")
                sessionStorage.removeItem("indexLogin");
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    #personCenter{
        height: calc(100% - 0.98rem);
        overflow-y: scroll;
    }
    body{
        width:100vw;
        height:100vh;
        background: #f8f8f8;
    }
    .top{
        width:100%;
        height:5rem;
        background: #f8f8f8;
        overflow: hidden;
        position:relative;
    }
    .t-circle{
        width:7.5rem;
        height:4.72rem;
        background: #ffffff;
        border-radius: 50%;
        margin-top:-2.36rem;
        position:relative;
    }
    .cir-img{
        width:1.8rem;height:1.8rem;
        background-image:url("/src/assets/img/peo.png");
        background-size:contain;
        background-repeat: no-repeat;
        background-position: 0,0;
        position:absolute;
        bottom:-0.48rem;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }
    .word1{
        width:100%;
        height:0.32rem;
        text-align: center;
        line-height: 0.26rem;
        font-size:0.32rem;
        color:#2a7ef5;
    }
    .word1{
        margin-top:0.48rem;
    }
    .slh{
        width:100%;
        height:0.17rem;
        display: flex;
        align-items: center;
    }
    .slh li{
        width:0.03rem;
        height:0.03rem;
        background: #efdbff;
        border-radius: 50%;
        float:left;
        margin-right:0.03rem;
    }
    .slh li:first-child{
        margin-left: 3.27rem;
        background: #fff;
    }
    .star{
        width:100%;
        height:0.22rem;
        display: flex;
        align-items: center;
    }
    .star li{
        width:0.22rem;
        height:0.22rem;
        float:left;
        margin-right:0.06rem;
        background-image: url("/src/assets/img/green.png");
        background-size:100%;
    }
    .star li:first-child{
        margin-left: 3.08rem;
        background-size: cover;
    }
    .star li:last-child{
        background-image: url("/src/assets/img/erji-xingxing-hui@2x.png");
    }
    .message,.set{
        width:0.55rem;
        height:0.55rem;
        border-radius: 50%;
    }
    .message{
        position:absolute;
        left:1.08rem;
        top:1.55rem;
        background: #fcfcfc url("/src/assets/img/mess.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .set{
        position:absolute;
        right:1.08rem;
        top:1.6rem;
        background: #fcfcfc url("/src/assets/img/set.png");
        background-size: contain;
        background-repeat: no-repeat;

    }
    .related{
        width: 100%;
        height:4.56rem;
        padding-bottom:0.35rem;
        background: #f8f8f8;
    }
    .related-top{
        width: 100%;
        height:0.51rem;
        margin-bottom: 0.24rem;
    }
    .rt-biao{
        width: 0.07rem;
        height:100%;
        border-radius: 0.2rem;
        float: left;
        margin-left: 0.24rem;
        background: #26d87a;
    }
    .rt-title{
        width: auto;
        height:100%;
        float: left;
        margin-left: 0.12rem;
    }
    .rt-title1{
        width: auto;
        height: 0.28rem;
        margin-bottom: 0.05rem;
        letter-spacing: 0.05rem;
        font-size: 0.28rem;
        line-height: 0.28rem;
        padding-left: 0.05rem;
        background-image: -webkit-linear-gradient(left ,#1970c2,#1ae09b,#199bb3,#1acba2,#1ae09b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;

    }
    .rt-title2{
        width: auto;
        height: 0.2rem;
        font-size: 0.12rem;
        letter-spacing: 0.02rem;
        color: #e4e4e4;
        line-height: 0.2rem;
    }
    .related-bottom{
        width: 100%;
        height:3.62rem;
    }
    .related-big{
        width: 100%;
        height:1.08rem;
        margin-bottom: 0.19rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .related-big:last-of-type{
        margin-bottom: 0;
    }
    .related-son{
        width:3.39rem;
        height:1.08rem;
        background:#f8f8f8;
        border-radius: 0.1rem;
        box-shadow: 0 0 0.02rem 0.04rem rgba(240,240,240,0.5);
        position: relative;
    }
    .rson-left{
        width: 1.04rem;
        height:1.08rem;
        background:rgba(233,233,233,0);
        position: absolute;
        top: 0;
        left:0;
        z-index: 2;
    }
    .rson-l1{
        width: 0.6rem;
        height:0.6rem;
        border-radius: 50%;
        background-image:url("/src/assets/img/r1@2x.png") ;
        background-size:0.25rem 0.33rem;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #2a7ef5;
        margin: 0.22rem 0.24rem;

    }
    .related-big:first-of-type .related-son:nth-of-type(2) .rson-l1{
        background-color: #2a7ef5;
        background-image: url("/src/assets/img/r2@2x.png");
    }
    .related-big:nth-of-type(2) .related-son:nth-of-type(1) .rson-l1{
        background-color: #35eaa0;
        background-image: url("/src/assets/img/r3@2x.png");
    }
    .related-big:nth-of-type(2) .related-son:nth-of-type(2) .rson-l1{
        background-color: #35eaa0;
        background-image: url("/src/assets/img/r4@2x.png");
    }
    .related-big:nth-of-type(3) .related-son:nth-of-type(1) .rson-l1{
        background-color: #ffc923;
        background-image: url("/src/assets/img/r5@2x.png");
    }
    .related-big:nth-of-type(3) .related-son:nth-of-type(2) .rson-l1{
        background-color: #ffc923;
        background-image: url("/src/assets/img/r6@2x.png");
    }
    .rson-right{
        width:100%;
        height:1.08rem;
        background-image: url("/src/assets/img/home-icon-kapian2-zc@2x.png");
        background-size: 100%;
        background-position: 0 0;
        position: absolute;
        top:0;
        left:0;
    }
    .rson-s1{
        width: auto;
        height: 0.13rem;
        font-size: 0.12rem;
        line-height: 0.13rem;
        padding-left:1.23rem;
        box-sizing: border-box;
        color:#adf2f9;
        margin-bottom: 0.13rem;
        margin-top: 0.33rem;
    }
    .rson-s2{
        width: auto;
        height: 0.23rem;
        font-size: 0.23rem;
        line-height: 0.23rem;
        padding-left: 1.23rem;
        box-sizing: border-box;
        color:#656565;
    }
    .bottom{
        background: #f8f8f8;
        padding-bottom: 0.44rem;
    }
    .bmiddle{
        width:100%;
        height:auto;
        margin-top:0.24rem;
        padding:0 0.24rem;
        -webkit-box-sizing: border-box;
    }
    .bmiddle>ul{
        width: 100%;
        height:0.9rem;
        border-radius: 0.04rem;
        margin-bottom:0.12rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .bmiddle>ul>li:first-child{
        width:0.56rem;
        height:0.56rem;
        border-radius: 50%;
        background-image: -webkit-radial-gradient(top,#90dafd,#5faffd);
        box-shadow: 0 0 0.04rem 0.01rem #d8e8ff;
        margin-left:0.24rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bmiddle>ul>li>img{
        width:0.28rem;
        heigth:0.28rem;
    }
    .bmiddle>ul>li:nth-child(2){
        font-size:0.22rem;
        color:#666;
        margin-right: 3.8rem;
    }
    .bmiddle>ul>li:nth-child(3){
        width:0.38rem;
        height:0.26rem;
        border-radius: 0.1rem;
        background-image: -webkit-radial-gradient(top,#5ad946,#34ce5e);
        box-shadow: 0 0 0.04rem 0.01rem #aaf0d2;
        font-size:0.1rem;
        color: #ffffff;
        font-weight: 400;
        text-align: center;
        line-height: 0.26rem;
        margin-right: 0.22rem;
    }
    .circle{
        display: flex;
       margin-right:0.2rem;
        line-height: 0.26rem;

    }
    .circle>p{
        width:0.1rem;
        height:0.1rem;
        background: #e8e8e8;
        border-radius: 50%;
        margin-left:0.04rem;
    }
    .logout{
        width: 100%;
        text-align: center;
        font-size: 0.35rem;
        color: #666;
    }
</style>
