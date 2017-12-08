<template>
    <div>
        <div class="product">
            <div class="circle"></div>
            <div class="product-main">
                <p>PRODUCT PRESENTATION</p>
                <P>产品介绍</P>
                <div class="product-info">
                    <img src="/src/assets/img/xiangqing-icon-kap2@2x.png" alt="">
                    <p>3748 5656 56565</p>
                </div>
                <div class="start-stop">
                    <img src="/src/assets/img/xiangqing-icon-kap2@2x.png" alt="" class="cir">
                    <p>{{start}}</p>
                    <p class="start">始</p>
                    <img src="/src/assets/img/xiangqing-jiantou-@2x.png" alt="" class="jiantou">
                    <img src="/src/assets/img/xiangqing_icon-fj-@2x.png" alt="" class="fj">
                    <img src="/src/assets/img/xiangqing-jiantou-@2x.png" alt="" class="jiantou jiantou1" style="transform: rotate(180deg)">
                    <img src="/src/assets/img/xiangqing-icon-kap2@2x.png" alt="" class="cir">
                    <p>{{end}}</p>
                    <p class="start">终</p>
                </div>
                <div class="time">
                    <span>{{startTime}}</span>
                    <span>{{endTime}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product',
        props:["start","end","startTime","endTime"]
    }
</script>

<style scoped>
    .product{
        width: 7.02rem;height:2.67rem;
        margin: 0 auto;
        background: url("/src/assets/img/xianqing-kapian-@2x.png") no-repeat center;
        background-size: cover;
        position: relative;
    }
    .circle{
        width: 0.06rem;height:0.06rem;
        background: #fff;border-radius: 50%;
        border:0.04rem solid #385cfd;
        position: absolute;
        top:-0.05rem;left:0.4rem;
    }
    .product-main{
        width: 6.66rem;height:auto;
        margin: 0 auto;
    }
    .product-main>p:first-child{
        font-size: 0.28rem;font-weight: bold;
        color: #9ba9fe;padding-top: 0.3rem;
    }
    .product-main>p:nth-child(2){
        font-size: 0.26rem;color: #fff;
    }
    .product-info{
        overflow: hidden;
    }
    .product-info>img{
        width: 0.2rem;height:0.2rem;
        float: left;margin-right: 0.12rem;
        margin-top: 0.1rem;
    }
    .product-info>p{
        font-size: 0.28rem;color: #fff;
        float: left;font-weight: bold;
    }
    .start-stop{
        overflow: hidden;
    }
    .cir{
        width: 0.2rem;height:0.2rem;
        margin-right: 0.13rem;float: left;
        margin-top: 0.15rem;
    }
    .start-stop>p{
        font-size: 0.38rem;color: #fff;
        float: left;margin-right: 0.05rem;
    }
    .start-stop>.start{
        padding: 0.04rem 0.18rem;
        background: #fff;color: #2961ef;
        border-radius: 0.6rem;font-size: 0.2rem;
        margin-top: 0.05rem;
        margin-right: 0.12rem;
    }
    .start-stop>img{
        float: left;
    }
    .jiantou{
        width: 0.54rem;height:0.22rem;
        margin-top: 0.14rem;margin-right: 0.24rem;
    }
    .jiantou1{
        margin-top: 0.08rem;
    }
    .fj{
        width: 0.29rem;height:0.36rem;
        margin-top: 0.07rem;margin-right: 0.24rem;
    }
    .time{
        margin-top: 0.12rem;
    }
    .time>span{
        color: #fff;font-size: 0.28rem;
        float: left;
    }
    .time>span:first-child{
        margin-left: 0.37rem;
    }
    .time>span:nth-child(2){
        margin-left: 3.2rem;
    }
</style>