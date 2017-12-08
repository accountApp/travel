<template>
<div class="list">
    <div class="h-top">
        <div class="top"></div>
        <header>
            <a href="javascript:;" @click="back"><img src="/src/assets/img/2_03.gif" alt=""></a>
           热门攻略
        </header>
        <div class="search">
            <div class="s-circle1"></div>
            <div class="s-circle2"></div>
            <input type="text" placeholder="Search for...">
            <div class="s-yuyin"><img src="/src/assets/img/2_07.gif" alt=""></div>

        </div>
    </div>

    <div class="hot">
        <div class="hot-left"></div>
        <div class="hot-right">
            <span class="hr-top">热门推荐</span>
            <span class="hr-bottom">HEHOTCHRECTER</span>
        </div>
    </div>
<ul>
    <li class="center" v-for="item in datas">
        <div href="javascript:;">
             <img src="/src/assets/img/list1.jpeg" alt="" @click="detail(item.cid)">
            <div class="c-bottom">
                <div class="cb-left" >
                    <img src="/src/assets/img/2_03.jpg" alt="">
                </div>
                <div class="cb-right">
                    <span class="cbr-title" @click="detail(item.cid)" >{{item.title}}</span>
                    <div class="cbr-tip">
                        <div class="tip1">
                            <img class="tip11" src="/src/assets/img/2_11.jpg" alt="">
                            <span>{{item.cdate.substr(0,10)}}</span>
                        </div>
                        <div class="tip2" @click="love(item.cid)" >
                            <img class="tip21" src="/src/assets/img/erji-aixin@2x.jpg" alt="">
                            <span class="aa">{{item.loveNum}}</span>
                        </div>
                        <div class="tip3">
                            <img src="/src/assets/img/erji-xingx.jpg" alt="">
                            <img src="/src/assets/img/erji-xingx.jpg" alt="">
                            <img src="/src/assets/img/erji-xingx.jpg" alt="">
                            <img src="/src/assets/img/erji-xingx.jpg" alt="">
                            <img src="/src/assets/img/erji-xingx.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
</div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                datas:[]
            }
        },
        created(){
            var that=this;
            fetch("/ajax/content").then(function (e) {
                return e.json()
            }).then(function (e) {
                if(!e.message){
                    that.datas=e
                }
            })
        },
        methods:{
            detail(cid){
                this.$router.push({path:"/detailpage",query:{cid}})
            },
            back(){
                this.$router.go(-1)
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

<style scoped>

  .list{
      width: 100%;
      height: 13.34rem;
      background: #f8f8f8;
  }

  .h-top{
      width: 100%;
      height:2.47rem;
      background: #385cfd;
      overflow: hidden;
  }

    .top{
        width: 100%;
        height:0.40rem;
        background: #3557f0;
    }

    header{
        width: 100%;
        height:0.3rem;
        margin-top: 0.45rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight:500;
        color: #fff;
        line-height: 0.3rem;
        position: relative;
        overflow: hidden;
    }
    header>a{
        display: block;
        width: 0.48rem;
        height:0.3rem;
        position: absolute;
        top: 0;
        left:0.24rem;

    }
    header>a>img{
        display: block;
        width: 0.48rem;
        height:0.3rem;
    }

    .search{
        width: 72%;
        height:0.6rem;
        margin:0.45rem auto;
        background: #3051e5;
        border-radius: 0.3rem;
        position: relative;
    }
    .search>input{
        display: block;
        width: 100%;
        height:100%;
        background: rgba(255,255,255,0);
        border: none;
        padding-left: 0.5rem;
        color: #fff;
        font-size: 0.16rem;
        opacity: 0.7;




    }

    .search>input:focus{
        outline: none;
    }

    .s-circle1{
        width: 0.05rem;
        height:0.05rem;
        background: #f8f8f8;
        border-radius: 50%;
        position: absolute;
        top:0.28rem;
        left:0.27rem;

    }

    .s-circle2{
        width: 0.05rem;
        height:0.05rem;
        background: #3bc885;
        border-radius: 50%;
        position: absolute;
        top:0.28rem;
        left:0.36rem;
    }

    .s-yuyin{
        width:0.22rem;
        height:0.31rem;
        position: absolute;
        top:0.16rem;
        right:0.29rem;
    }

    .s-yuyin>img{
        display: block;
        width: 100%;
        height:100%;
    }

    .hot{
        width: 100%;
        height:0.5rem;
        margin-top: 0.24rem;

    }

    .hot-left{
        width: 0.07rem;
        height:100%;
        border-radius: 0.07rem;
        background: #26d87a;
        margin-left: 0.24rem;
        float: left;
    }

    .hot-right{
        width: 2rem;
        height:100%;
        margin-left: 0.12rem;
        float: left;
    }

    .hot-right>.hr-top{
        display: block;
        height:0.27rem;
        width: 1.15rem;
        line-height: 0.27rem;
        font-size: 0.27rem;
        font-family: '微软雅黑';
        font-weight: bold;
        background-image: -webkit-linear-gradient(-45deg, #196ec3, #1ab3ab, #00ffa2);
        /*background-image: -moz-linear-gradient(-45deg, #196ec3 0.2rem, #1ae49a 0.1rem);*/
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    .hot-right>.hr-bottom{
        display: block;
        height:0.16rem;
        line-height: 0.16rem;
        font-size: 0.16rem;
        margin-top: 0.08rem;
        color: #e4e4e4;
    }
     ul{
         width: 100%;
         height:auto;
     }
     .center{
         width: 94%;
         height:5rem;
         border-radius: 0.05rem;
         margin:0.22rem auto;
         background: #fff;
         box-shadow: 0 0 0.07rem 0.02rem #dddddd;

     }

    .center>div{
        display: block;
        width: 100%;
        height:100%;
        overflow: hidden;

    }

    .center>div>img{
        display: block;
        width:6.5rem;
        height:3.39rem;
        border-radius: 0.05rem;
        margin:0.24rem auto;
    }

    .c-bottom{
       width: 6.5rem;
        height:72rem;
        margin: 0.33rem auto;
    }

  .c-bottom>.cb-left{
      width: 0.72rem;
      height:0.72rem;
      background: #3bc885;
      border-radius: 50%;
      float: left;

  }

  .cb-left>img{
      display: block;
      width:100%;
      height: 100%;
      border-radius: 50%;
  }

    .cb-right{
        width: 5.0rem;
        height:0.72rem;
        margin-left: 0.54rem;
        float: left;

    }

   .cbr-title{
       display: block;
      height:0.28rem;
      font-size: 0.28rem;
      line-height: 0.28rem;
      color:#666666;
       font-family: '微软雅黑';
       font-weight: bold;

  }

    .cbr-tip{
        width:100%;
        height:0.19rem;
        font-size: 0.14rem;
        line-height: 0.19rem;
        margin-top: 0.19rem;
        color: #cccccc;
        font-family: '微软雅黑';
    }


  .cbr-tip>.tip1{
      height:100%;
      float: left;

  }



  .tip1>.tip11{
      display:block;
      height:0.11rem;
      float: left;
     margin-top: 0.04rem;

  }

  .tip1>span{
      display: block;
      height:0.19rem;
      line-height: 0.19rem;
      float: left;
      margin-left: 0.1rem;
  }

  .cbr-tip>.tip2{
      height:100%;
      width:1.46rem;
      float: left;
      line-height: 0.19rem;
      margin-left: 0.3rem;

  }

  .tip2>.tip21{
      display: block;
      height:0.19rem;
      float: left;
      margin-top: 0.02rem;

  }

  .tip2>.aa{
      display: block;
      height:0.19rem;
      line-height: 0.19rem;
      float: left;
      margin-left: 0.1rem;
  }



  .tip3{
      height:100%;
      float: right;


  }

  .tip3>img{
      display: block;
      height:0.22rem;
      float: left;
    /*  margin-top: 0.02rem;*/

  }

  .tip3>.timg1{
      height:0.14rem;
      margin-top: 0.02rem;
      margin-left: 0.04rem;
  }

  .tip3>.timg2{
      height:0.14rem;
      margin-top: 0.02rem;
      margin-left: 0.05rem;
  }







</style>
