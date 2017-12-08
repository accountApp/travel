<template>
    <section class="hot">
        <div class="hotTop">
            <div class="green"></div>
            <div class="hotTitle">
                <div>热门推荐</div>
                <div>HEHOTCHRACTER</div>
            </div>
            <div class="more">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <ul class="hotCon">
            <li v-for="item in datas">
                <img src="/src/assets/img/home-icon-kapian-zc@2x.png" alt="">
                <div class="zhezhao">
                    <img class="zhezhaoLeft" src="/src/assets/img/home-icon-imgxiao-zc@2x.png" alt=""  @click="detail(item.cid)"  >
                    <div class="zhezhaoCon">
                        <div @click="detail(item.cid)">{{item.title}}</div>
                        <div>Summer of eighteen degrees north</div>
                        <img src="/src/assets/img/home-icon-sangehuomiao-zc@2x.png" alt="">
                        <div class="jilu">
                            <img class="dateimg" src="/src/assets/img/home-icon-shijian-zc@2x.png" alt="">
                            <div class="date">{{item.cdate.substr(0,10)}}</div>
                            <img class="liulanimg" src="/src/assets/img/home-icon-shoucang-zc@2x.png" alt="" @click="love(item.cid)" >
                            <div class="liulan" @click="love(item.cid)" >{{item.loveNum}}</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: '',
        data(){
            return {
                datas:[]
            }
        },
        created(){
            var that=this;
              fetch("/ajax/content/tuijian").then(function (e) {
                  return e.json()
              }).then(function (e) {
                  if(!e.message){
                      that.datas=e
                  }
              })
        },
        methods:{
            detail(cid){
                this.$router.push("/detailpage?cid="+cid)
            },
            love(cid){
                var that=this;
                if(sessionStorage.getItem("indexLogin")){
                    var uid=JSON.parse(sessionStorage.indexLogin).uid;
                    fetch("/ajax/love?cid="+cid+"&uid="+uid).then(function (e) {
                        return e.text()
                    }).then(function (e) {
                        if(e=="ok"){
                            for(var i=0;i<that.datas.length;i++){
                                if(that.datas[i].cid==cid){
                                    mui.toast("点赞成功")
                                    that.datas[i].loveNum+=1;
                                }
                            }
                        }else if(e=="done"){
                            mui.toast("你已点过赞了！")
                        }
                    })
                }else{
                    this.$router.push("/login")
                }

            }
        }
    }
</script>

<style>
    .hot{
        width: 7.02rem;
        height: auto;
        padding: 0.24rem 0.24rem;
    }
    .hotTop{
        width: 100%;
        height: 0.5rem;
    }
    .green{
        width: 0.07rem;
        height: 100%;
        background: #26d87a;
        float: left;
        border-radius: 0.1rem;
    }
    .hotTitle{
        width: 2rem;
        height: 100%;
        float: left;
        margin-left: 0.13rem;
    }
    .hotTitle>div:first-child{
        font-size: 0.28rem;
        line-height: 0.28rem;
        color: #1b7ecd;

    }
    .hotTitle>div:last-child{
        font-size: 0.16rem;
        line-height: 0.16rem;
        color: #e4e4e4;
        margin-top: 0.05rem;
    }
    .more{
        width: 0.4rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        float: right;
    }
    .more>div{
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        margin-top: 0.2rem;
    }
    .more>div:first-child{
        background: #1ae49a;
    }
    .more>div:nth-child(2){
        background: #76efc2;
    }
    .more>div:last-child{
        background: #d1faeb;
    }
    .hotCon{
        width: 100%;
        height: auto;
        margin-top: 0.18rem;
    }
    .hotCon>li{
        width: 100%;
        height: 2.5rem;
        position: relative;
        /*background: red;*/
    }
    .hotCon>li>img{
        width: 100%;
        height: 100%;
    }
    .zhezhao{
        width: 100%;
        height:2.1rem;
        position: absolute;
        z-index: 1;
        top:0.23rem;
        left: 0.15rem;
        /*background: red;*/
    }
    .zhezhaoLeft{
        width: 2.20rem;
        height: 2.01rem;
        float: left;
    }
    .zhezhaoCon{
        width: 4.26rem;
        height: auto;
        float: left;
        margin-left: 0.19rem;
    }
    .zhezhaoCon>div:first-child{
        width: 100%;
        height: 0.27rem;
        margin-top: 0.23rem;
        font-size: 0.27rem;
        color: #858c94;
        line-height: 0.27rem;
        font-weight: bolder;
    }
    .zhezhaoCon>div:nth-child(2){
        width: 100%;
        height: 0.18rem;
        margin-top: 0.11rem;
        font-size: 0.18rem;
        color: #d6d9db;
        line-height: 0.18rem;
        font-weight: bolder;
    }
    .zhezhaoCon>img{
        width: 0.66rem;
        height: 0.26rem;
        margin-top: 0.07rem;
        display: block;
    }
    .jilu{
        width: 100%;
        height: 0.2rem;
        margin-top: 0.62rem;
        /*background: red;*/
    }
    .dateimg{
        width: 0.20rem;
        height:0.20rem;
        float: left;
    }
    .date{
        font-size: 0.13rem;
        line-height: 0.2rem;
        margin-left: 0.11rem;
        float: left;
        color: #d6d9db;
    }
    .liulanimg{
        width: 0.20rem;
        height:0.20rem;
        float: left;
        margin-left: 1.36rem;
    }
    .liulan{
        font-size: 0.13rem;
        line-height: 0.2rem;
        margin-left: 0.11rem;
        float: left;
        color: #d6d9db;
    }



</style>
