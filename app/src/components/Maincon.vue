<template>
    <div class="con">
        <header>
            <div class="headerTop">
                <div class="searchBox">
                    <main>
                        <img class="searchBoxLeft" src="/src/assets/img/1_03.png" alt="">
                        <div class="searchBoxMid">
                            <div>纽约</div>
                            <!--<div>NEWYORK</div>-->
                        </div>
                        <div class="searchBoxRight">
                            <div class="yuan1"></div>
                            <div class="yuan2"></div>
                            <input type="text" class="search" placeholder="Search for...">
                            <img class="microphone" src="/src/assets/img/home-icon-yuyinsousuo-zc@2x.png" alt="">
                        </div>
                    </main>
                </div>
            </div>

            <banner></banner>
        </header>

        <category></category>
        <hot></hot>
    </div>
</template>

<script>
    import category from '@/components/category'
    import hot from '@/components/hot'
    import last from '@/components/last'
    import banner from '@/components/banner'
    export default {
        name:"Maincon",
        components:{category,hot,last,banner}
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 5.83rem;
        position: relative;
    }

    .con{
        width: 100%;
        height: calc(100% - 0.98rem);
        overflow-y: scroll;
    }

    .headerTop{
        width: 100%;
        height: 50%;
        background: #385cfd;
        overflow: hidden;
    }
    main{
        width: 7.02rem;
        height: 100%;
        margin: 0 auto;
    }
    .headerbottom{
        width: 100%;
        height: 50%;
        background: #fff;
    }


    .searchBox{
        width: 100%;
        height: 0.6rem;
        margin-top: 0.36rem;
    }
    .searchBoxLeft{
        width: 0.6rem;
        height: 0.6rem;
        float: left;
    }
    .searchBoxMid{
        margin-left: 0.13rem;
        height: 100%;
        float: left;
    }
    .searchBoxMid>div:first-child{
        height: 0.22rem;
        font-size: 0.24rem;
        /*margin-top: 0.09rem;*/
        /*line-height: 0.22rem;*/
        line-height: 0.6rem;

        color: #fff;
    }
    /*.searchBoxMid>div:last-child{
        !*height: 0.1rem;*!
        font-size: 0.14rem;
        margin-top: 0.05rem;
        line-height: 0.2rem;
        !*font-weight:bolder;*!
        color: #748dfe;
        !*-webkit-transform-origin-x: 0;*!
        !*-webkit-transform: scale(0.90);*!
        margin-left: 0.01rem;
        !*-webkit-text-size-adjust:none;*!
    }*/
    .searchBoxRight{
        width: 5.38rem;
        height: 0.6rem;
        float: right;
        background: #3051e5;
        border-radius: 0.3rem;
    }
    .yuan1,.yuan2{
        width: 0.05rem;
        height:0.05rem;
        border-radius: 50%;
        background: #fff;
        margin-left: 0.27rem;
        margin-top: 0.27rem;
        float: left;
    }
    .yuan2{
        margin-left: 0.04rem;
        background: #3bc885;
    }
    .search{
        width: 4.16rem;
        height: 100%;
        margin-left: 0.1rem;
        float: left;
        outline: none;
        border: none;
        font-size: 0.16rem;
        color: #cbcbcb;
        background: #3051e5;


    }
    input::-webkit-input-placeholder { /* WebKit browsers */
        color: #8397ef;
        font-size: 0.16rem;
    }
    .microphone{
        width: 0.44rem;
        height: 0.44rem;
        float: left;
        margin-top: 0.08rem;
        margin-left: 0.08rem;
    }
    .headerbottom{
        width: 100%;
        height: 50%;
        overflow: hidden;

    }

    .imgbox{
        width: 100%;
        height: 3rem;
        position: absolute;
        top: 1.32rem;
        border-radius: 0.08rem;
    }
    .imgbox>a{
        display: block;
        width: 6rem;
        height: 3rem;position: absolute;
        top:0;
        border-radius: 0.08rem;


    }
    .imgbox>a>img{
        width: 6rem;
        height: 3rem;
        border-radius: 0.08rem;

    }
</style>