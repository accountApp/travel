<template>
    <div>
        <div class="journey">
            <div class="left">
                <img src="../assets/img/xiangqing-icon-sjz1-@2x.png" alt="">
                <p>第三天</p>
            </div>
            <div class="line"></div>
            <div class="right">
                <p>纽约著名大厦纽约帝国大厦</p>
                <p>帝国大厦被美国土木工程师学会评价为现代世界七大工程奇迹之一。</p>
                <div class="time">
                    <div class="left-time">
                        <p class="cir"></p>
                        <p>11.25</p>
                        <p>2017</p>
                    </div>
                    <div class="right-time">
                        <p class="cir"></p>
                        <p>23656</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style scoped>
    .journey{
        width: 7.02rem;height:auto;
        margin: 0.48rem auto 0;
        overflow: hidden;position: relative;
    }
    .left{
        width: 1.1rem;height:100%;
        overflow: hidden;float: left;
    }
    .left>img{
        float: left;width: 0.28rem;height:0.28rem;
    }
    .left>p{
        float: right;
        font-size: 0.24rem;
        color: #000;opacity: 0.4;
    }
    .line{
        width: 0.03rem;height:80%;
        border-radius: 0.05rem;
        background: #f2f2f2;position: absolute;
        top:0.4rem;left:0.12rem;
    }
    .right{
        width: 5.14rem;height:auto;
        border: 0.02rem solid #e1e1e1;
        float: right;padding: 0.21rem 0.25rem;
        overflow: hidden;
    }
    .right>p{
        font-size: 0.26rem;color: #000;
        opacity: 0.6;margin-bottom: 0.24rem;
    }
    .time{
        width:100%;height: auto;overflow: hidden;
    }
    .left-time{
        float: left;
    }
    .left-time>p{
        float: left;margin-right: 0.1rem;
        font-size: 0.12rem;color: #cacaca;
    }
    .cir{
        width: 0.1rem;height:0.1rem;
        border-radius: 50%;border: 0.03rem solid #d4f7e4;
        background: #26d87a;margin-top: 0.1rem;
        margin-right: 0.1rem;
    }
    .right-time{
        float: right;
    }
    .right-time>p{
        font-size: 0.12rem;color: #cacaca;
        float: left;
    }
</style>