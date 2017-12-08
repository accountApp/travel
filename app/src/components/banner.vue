<template>
   <div>
       <!--轮播图 开始 -->
       <div>
           <div class="main_banner">
               <div class="main_banner_bg"></div>
               <div class="main_banner_wrap">
                   <canvas id="myCanvas" width="150" height="150"></canvas>
                   <div class="main_banner_box" id="m_box">
                       <ul>
                           <li id="imgCard0">
                               <a href=""><span style="opacity:0;"></span></a>
                               <img src="/src/assets/img/1a79df44029555.5805a78bb7144.jpg" alt="">
                           </li>
                           <li id="imgCard1">
                               <a href=""><span style="opacity:0.4;"></span></a>
                               <img src="/src/assets/img/4d5f6516270781.58491dbe32d89.jpg" alt="">
                           </li>
                           <li id="imgCard2">
                               <a href=""><span style="opacity:0.4;" ></span></a>
                               <img src="/src/assets/img/pexels-photo-45917.jpeg" alt="">
                           </li>
                           <li id="imgCard3">
                               <a href=""><span style="opacity:0.4;"></span></a>
                               <img src="/src/assets/img/pexels-photo-279086.jpeg" alt="">
                           </li>
                           <li id="imgCard4">
                               <a href=""><span style="opacity:0.4;"></span></a>
                               <img src="/src/assets/img/pexels-photo-279086.jpeg" alt="">
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="infoBox">
               <div class="headerbottom" v-for="item in datas">
                   <div class="bannerTitle">{{item.title}}</div>
                   <div class="bannerCon">
                       <img class="dateimg" src="/src/assets/img/home-icon-shijian-zc@2x.png" alt="">
                       <div class="date">{{item.cdate.substr(0,10)}}</div>
                       <img class="xihuanimg" src="/src/assets/img/home-icon-xihuan-zc@2x.png" alt=""  @click="love(item.cid)" >
                       <div class="date" @click="love(item.cid)" >{{item.loveNum}}</div>
                       <img class="xingjiimg" src="/src/assets/img/home-icon-sixingji-zc@2x.png" alt="">
                   </div>
               </div>
               <div class="headerbottom" v-for="item in datas">
                   <div class="bannerTitle">{{item.title}}</div>
                   <div class="bannerCon">
                       <img class="dateimg" src="/src/assets/img/home-icon-shijian-zc@2x.png" alt="">
                       <div class="date">{{item.cdate.substr(0,10)}}</div>
                       <img class="xihuanimg" src="/src/assets/img/home-icon-xihuan-zc@2x.png" alt=""  @click="love(item.cid)" >
                       <div class="date" @click="love(item.cid)" >{{item.loveNum}}</div>
                       <img class="xingjiimg" src="/src/assets/img/home-icon-sixingji-zc@2x.png" alt="">
                   </div>
               </div>
           </div>

       </div>

       <!--轮播图 结束 -->
   </div>
</template>

<script>
    import "@/assets/js/index.js"
    export default {
        name: 'banner',
        data(){
            return {
                datas:[]
            }
        },
        methods:{
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
        },
        created(){
            var that=this;
            fetch("/ajax/content/lunbo").then(function (e) {
                return e.json()
            }).then(function (e) {
                if(!e.message){
                    that.datas=e
                }
            })
        }
    }
</script>

<style scoped>
    /*首页样式（音乐馆样式）*/
    html,body,header,nav,footer,div,ul,ol,li,p,form,input,a,span,em,i,strong,b,font,img{
        margin:0; padding:0; list-style:none; border:none;}
    body{font-family:"微软雅黑"; font-size:0.14rem; height:100%;}
    a{text-align:center; text-decoration:none; outline:none;}

    /*轮播图 开始*/
    .main_banner{width:100%; height:3rem;}
    .main_banner_wrap{

        width:100%; height:3.6rem; position:relative;
        /*background-image: -webkit-linear-gradient(top,#6b84f3,#bdc6f4);*/
        margin:0 auto; overflow:hidden;
        /*box-shadow: 0 0.01rem 0.02rem #c5c5c5;*/
        margin-top: -2rem;
    }
    #myCanvas {
        position: absolute;
        z-index: 13;
        opacity: 0.8;
        cursor: pointer;
        -webkit-animation: roll 3s;
        animation: roll 3s;
    }
    @-webkit-keyframes roll {
        from{-webkit-transform:rotate(120deg);opacity:0;}
        to{-webkit-transform:rotate(0deg);opacity:0.8;}
    }
    @keyframes roll {
        from{transform:rotate(120deg);opacity:0;}
        to{transform:rotate(0deg);opacity:0.8;}
    }
    @-webkit-keyframes arrow{
        from{-webkit-transform:scale(1); opacity:1;}
        to{-webkit-transform:scale(1.5); opacity:0.2;}
    }
    @-moz-keyframes arrow{
        from{-moz-transform:scale(1); opacity:1;}
        to{-moz-transform:scale(1.5); opacity:0.2;}
    }

    .main_banner_box{
        width:100%; height:3rem; margin:0.4rem auto 0; position:relative; z-index:0;
        /*-webkit-倒影样式*/
    }
    /*火狐倒影图层样式*/
    .main_banner_box p#rflt{width:100%; height:3rem; position:absolute; left:0; top:2.8rem;
        background:-moz-element(#m_box) no-repeat; -moz-transform:scaleY(-1); opacity:0.2;
    }/*火狐倒影图层样式*/
    .main_banner li{
        position:absolute; background:#000; overflow:hidden;
        box-shadow:0 0.04rem 0.08rem rgba(0, 0, 0, 0.15);
    }
    /*给每张图片初始设置不同宽高，层级，位置*/
    .main_banner li#imgCard0{
        width:6rem; height:3rem; z-index:5;border-radius: 0.08rem;
        left:0.75rem; top:0; opacity:1; background:#333d46;
    }
    .main_banner li#imgCard1{
        width:6rem; height:3rem;; z-index:1;border-radius:0.08rem;
        left:6rem; top:0.2rem; opacity:0; background:#333d46;
    }
    .main_banner li#imgCard2{/*初始在背后，透明度为0*/
        width:6rem; height:3rem; z-index:1;border-radius: 0.08rem;
        left:0; top:0.6rem; opacity:0; background:#333d46;
    }
    .main_banner li#imgCard3{/*初始在背后，透明度为0*/
        width:6rem; height:3rem; z-index:1; border-radius: 0.08rem;
        left:0; top:0.6rem; opacity:0; background:#333d46;
    }
    .main_banner li#imgCard4{
        width:6rem; height:3rem; z-index:2; border-radius:0.08rem;
        left:0; top:0.2rem; opacity:0; background:#333d46;
    }
    .main_banner li img{width:100%; height:100%;}
    .main_banner li span{/*遮罩层*/
        width:100%; height:100%; position:absolute; top:0; left:0;
        z-index:1; background:#000; opacity:0; filter:alpha(opacity=0);
        color:#fff; font-size:0.3rem; line-height:0.12rem; text-align:center;
    }
    .main_banner li p{width:100%; height:0.5rem; position:absolute;
        left:0; bottom:-0.50rem; background:rgba(0,0,0,0.7); color:#fff;
        text-indent:0.38rem; line-height:0.50rem; font-size:0.25rem;
    }

    /*轮播图 结束*/

    .bannerTitle{
        height: 0.3rem;
        line-height: 0.3rem;
        margin-left: 0.75rem;
        color: #8d8d8d;
        font-size: 0.3rem;
        margin-bottom: 0.2rem;
    }
    .bannerCon{
        height: 0.2rem;
        margin-left: 0.75rem;

    }
    .dateimg{
        width: 0.19rem;
        height: 0.14rem;
        float: left;
    }
    .date{
        font-size: 0.2rem;
        float: left;
        color: #dddddd;
        line-height: 0.2rem;
        margin-left: 0.34rem;
    }
    .xihuanimg{
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin-left: 1.2rem;
    }
    .xingjiimg{
        width: 1.24rem;
        height: 0.2rem;
        float: left;
        margin-left: 0.8rem;

    }

    .infoBox{
        width: 100%;height: 0.7rem;
        margin-top: 0.6rem;
        position: relative;
    }
    .headerbottom{
        position: absolute;
        top: 0;left: 0;
        opacity: 0;
    }
    .headerbottom:first-of-type{
        opacity: 1;
    }
</style>
