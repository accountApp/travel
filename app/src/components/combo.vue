<template>
    <div class="combo">
        <div class="font">
            <p>{{title}}</p>
        </div>
        <div class="font1">
            <p>5DAY，4NIGHT</p>
            <img src="../assets/img/xiangqing-icon-rl-@2x.png" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <div class="info-img">

                </div>
                <ul class="address">
                    <li>{{start}}</li>
                    <li>
                        <img src="../assets/img/xiangqing-henxian2-@2x.png" alt="">
                    </li>
                    <li>始发地址</li>
                </ul>
            </div>
            <div class="info-right">
                <p>RMB.</p>
                <div class="price">
                    <p>{{money}}</p>
                    <p>每人</p>
                </div>
            </div>
            <div class="dott"></div>
        </div>
        <div class="xin">
            <img src="../assets/img/xiangqing-icon-xinxin-@2x.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props:["title","money","start"]

    }
</script>

<style scoped>
    .combo{
        width: 7.02rem;height: 1.95rem;
        margin: 0.48rem auto 0.35rem;
    }
    .font>p{
        font-size: 0.3rem;font-family: Helvetica;
        font-weight: bolder;color: #8d8d8d;
    }
    .font1{
        width: 3.38rem;padding-bottom: 0.06rem;
        overflow: hidden;
        border-bottom: 1px dotted #d8d8d8;
    }
    .font1>p{
        font-size: 0.2rem;color: #bbbbbb;
        float: left;
    }
    .font1>img{
        width: 0.21rem;height: 0.18rem;
        display: block;float: left;
        margin-left: 0.17rem;
        margin-top: 0.08rem;
    }
    .info{
        width: 100%;height:1rem;
        overflow: hidden;position: relative;
    }
    .info-left{
        float: left;
        overflow: hidden;margin-top: 0.1rem;
    }
    .info-img{
        width: 0.54rem;height:0.54rem;
        float: left;
        background: url("../assets/img/xiangqing-icon-dingwei-@2x.png") no-repeat center;
        background-size: 0.88rem;
        overflow: hidden;margin-right: 0.15rem;margin-top: 0.07rem;
    }
    .info-img>img{
        width: 100%;height:100%;
        float: left;display: block;
    }
    .address{
        float: left;width: 2.8rem;
        height:100%;
    }
    .address>li:first-child{
        width: 100%;
        font-size: 0.2rem;color: #afb9fe;
    }
    .address>li:nth-child(3){
        width: 100%;
        font-size: 0.2rem;
        color: #bbbbbb;
    }
    .address>li:nth-child(2){
        width: 100%;height:0.03rem;
    }
    .address>li:nth-child(2)>img{
        width: 0.32rem;height:100%;
        display: block;
    }
    .info-right{
        width: 2.63rem;height:100%;
        float: right;
        overflow: hidden;
    }
    .info-right>p{
        margin-top: 0.19rem;
        font-size: 0.26rem;
        color: #385cfd;font-weight: bold;float: left;
    }
    .price{
        width: 1.3rem;height: 100%;
        float: right;
    }
    .price>p{
        font-size: 0.3rem;font-weight: bold;
        color: #385cfd;
    }
    .price>p:nth-child(2){
        width: 0.74rem;height:0.32rem;
        background: #385cfd;
        color: #fff;text-align: center;
        line-height: 0.32rem;font-size: 0.2rem;
        border-radius: 0.6rem;float: right;font-weight: normal;
    }
    .dott{
        width: 4.63rem;height:0.01rem;
        box-sizing: border-box;
        border-bottom: 1px dotted #d8d8d8;
        position: absolute;bottom:0;
        left:0;
    }
    .xin{
        width:1.55rem;height: 0.18rem;margin-top: 0.17rem;
    }
    .xin>img{
        width: 100%;height:100%;
        display: block;
    }
</style>