<template>
    <section class="category">
            <router-link to="/list" class="cateList">
                <img src="/src/assets/img/home-icon-kapian2-zc@2x.png" alt="">
                <div class="topBox">
                    <img src="/src/assets/img/home-icon-gonglue-zc@2x.png" alt="">
                    <div class="topBoxCon">
                        <div>SBENT IN PARIS</div>
                        <div>旅游攻略</div>
                    </div>
                </div>
            </router-link>


        <router-link to="" class="cateList">
            <img src="/src/assets/img/home-icon-kapian2-zc@2x.png" alt="">
            <div class="topBox">
                <img src="/src/assets/img/home-icon-jipiao-zc@2x.png" alt="">
                <div class="topBoxCon">
                    <div>PLANE TICKET BOOK</div>
                    <div>机票预定</div>
                </div>
            </div>

        </router-link>
        <router-link to="" class="cateList">
            <img src="/src/assets/img/home-icon-kapian2-zc@2x.png" alt="">
            <div class="topBox">
                <img src="/src/assets/img/home-icon-jiudian-zc@2x.png" alt="">
                <div class="topBoxCon">
                    <div>HOTEL RESERVATION</div>
                    <div>酒店预定</div>
                </div>
            </div>

        </router-link>
    </section>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style>
    .category{
        width: 7.02rem;
        height: 2.55rem;
        background: #f8f8f8;
        padding: 0.38rem 0.24rem;
        display: flex;
        justify-content: space-between;
       flex-wrap: wrap;
    }
    .cateList{
        width: 3.43rem;
        height: 1.15rem;
        position: relative;
        display: block;

    }
    .cateList>img{
        width: 100%;
        height: 100%;
    }
    .topBox{
        width: 3.43rem;
        height: 1.15rem;
        position: absolute;
        z-index: 1;
        /*background: red;*/
        top:0;
    }
    .topBox>img{
        width: 0.64rem;
        height:0.64rem;
        float: left;
        margin-top: 0.25rem;
        margin-left: 0.22rem;
    }
    .topBoxCon{
        width: 2.1rem;
        height: 100%;
        float: left;
        margin-left: 0.41rem;
    }
    .topBoxCon>div:first-child{
        margin-top: 0.33rem;
        font-size: 0.14rem;
        color: #adf2f9  ;
        line-height: 0.12rem;
    }
    .topBoxCon>div:last-child{
        font-size: 0.23rem;
        color: #656565;
        margin-top: 0.07rem;
        line-height: 0.23rem;
    }

</style>
