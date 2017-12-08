<template>
    <div class="login">
        <div class="loginTop">
            <div class="regs">
                <router-link tag="div" to="/load">注册</router-link>
            </div>
        </div>
        <div class="loginBottom">
            <div class="loginBox">
                <form action="">
                    <div class="login-box">
                        <span class="USERNAME"></span>
                        <span>USERNAME</span>
                        <input type="text" class="user" v-model="user">
                        <div class="iconfont icon-duihao userok" v-show="user"></div>
                        <ul class="notice" v-show="user.includes(emaile)">
                            <li @click="input" ref="[li]">QQ.com</li>
                            <li @click="input" ref="[li]">126.com</li>
                            <li @click="input" ref="[li]">163.com</li>
                        </ul>
                    </div>
                    <div class="login-box">
                        <span class=" USERNAME PASSWORD"></span>
                        <span>PASSWORD</span>
                        <input type="password" class="user" v-model="pass">
                        <div class="iconfont icon-duihao userok" v-show="pass"></div>
                    </div>
                <div class="find">
                    <div class="findCir">
                        <div class="findCirSon"></div>
                    </div>
                    <a href="">找回遗失的密码</a>
                </div>
                <div class="ok" ref="ok" v-if="user&&pass" @click="submit">
                    <div class="okCir iconfont icon-duihao" style="color:#4ba4fe;"></div>
                </div>
                <div class="ok" ref="ok" v-else>
                        <div class="okCir iconfont icon-duihao"></div>
                </div>
                </form>
                <div class="weiBo">
                    <div class="weiCir"></div>
                    使用微博完成第三方登录
                </div>
                <div class="weiXin">
                    <div class="weiCir"></div>
                    使用微信完成第三方登录
                </div>
            </div>
            <div class="circle">
                <div class="cir1">
                    <div class="cir2"></div>
                </div>
            </div>
            <div class="circle1"></div>
        </div>
    </div>
</template>

<style scoped>
    .login{
        width:100%;
        height:100%;
    }
    .loginTop{
        width:100%;
        height:5.8rem;
        background-image: url("../assets/img/login.jpg");
        background-size:cover;
        background-position: center;
    }

     .regs{
        width:1.19rem;
        height:0.63rem;
        background: #fff;
        border-radius: 0.3rem;
        text-align: center;
        line-height: 0.63rem;
        margin-top:0.64rem;
        float:right;
        margin-right:0.24rem;

    }
     .regs div{
         font-size:0.24rem;
         color:#a3a3a3;
     }
    .loginBottom{
        width:100%;
        height:7.5rem;
        background:#3051e5;
        position:relative;
    }
    .circle{
        width:2.24rem;
        height:2.24rem;
        border-radius: 50%;
        background:rgba(83,124,236,0.4);
        position:absolute;
        top:-1.12rem;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }
    .cir1{
        width:1.8rem;
        height:1.8rem;
        background: rgba(101,156,245,0.6);
        border-radius: 50%;
        position:absolute;
        left: 0;right:0;top:0;bottom:0;
        margin:auto;
    }
    .cir2{
        width:1.38rem;
        height:1.38rem;
        background: rgba(75,164,254,0.9) url("../assets/img/user.png") no-repeat center;
        border-radius: 50%;
        position:absolute;
        left: 0;right:0;top:0;bottom:0;
        margin:auto;
    }
    .circle1{
        width:1.38rem;
        height:1.38rem;
        background: rgba(75,164,254,1) url("../assets/img/user.png") no-repeat center;
        border-radius: 50%;
        position:absolute;
        top:-0.69rem;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }
    .loginBox{
        width:6.7rem;
        height:6.25rem;
        margin:auto;
        padding-top:1.29rem;
        box-sizing: border-box;
    }
    .login-box{
        width:100%;
        height:0.88rem;
        border-bottom: 0.01rem solid #6f86ed;
        background: #3051e5;
        box-sizing: border-box;
        line-height: 0.88rem;
        color: #fff;
        position:relative;
    }
    .notice{
        /*width:3.5rem;*/
        height:0.41rem;
        background: rgba(235,238,252,0.8);
        border-radius: 20px;
        position:absolute;
        bottom:-0.25rem;
        right:0;
        z-index:2;
    }
    .notice li{
        font-size: 0.08rem;
        float:left;
        height:100%;
        line-height: 0.41rem;
        color:#ffde42;
        margin-left:0.1rem;
    }
    .notice li:first-child{
        color:#2cd27a;
    }
    .notice li:last-child{
        margin-right: 0.1rem;
    }
    .login-box span{
        font-size: 0.28rem;
        color: #fff;
    }

    .user{
        width:4.1rem;
        height: 100%;
        outline: none;
        border:none;
        float: left;
        background: none;
        color:#fff;
    }
    .userok{
        width:0.44rem;
        height:0.44rem;
        color:#6f86e7;
        font-size: 0.44rem;
        line-height: 0.44rem;
        position:absolute;
        top:0.22rem;
        right:0.15rem;
    }
    .find{
        width:100%;
        height:0.77rem;
    }
    .findCir{
        width:0.14rem;
        height:0.14rem;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        margin-left: 0.17rem;
        margin-top:0.24rem;
        float:left;
        position:relative;
        margin-right:0.25rem;
    }
    .findCirSon{
        width:0.06rem;
        height:0.06rem;
        background: #fff;
        border-radius: 50%;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
    }
    .USERNAME{
        float: left;
        width: 0.34rem;
        height: 0.34rem;
        margin-top: 0.27rem;
        background: url("../assets/img/user.png") no-repeat ;
        background-size: 0.34rem;
    }
    .PASSWORD{
        float: left;
        width: 0.34rem;
        height: 0.34rem;
        margin-top: 0.27rem;
        background: url("../assets/img/pass.png") no-repeat center;
        background-size: 0.4rem;
        background-position: -0.02rem 0.05rem;
    }
    .USERNAME+span{
        margin-left: 0.02rem;
        width: 2.12rem;
        height: 100%;
        float: left;
        opacity: 0.7;color: #fff;
    }
    .findCir+a{
        font-size: 0.22rem;
        margin-top:0.15rem;
        color:#98a8f2;
        float:left;
    }
    .ok{
        width:100%;
        height:0.89rem;
        background: #fff;
        border-radius: 0.1rem;
        border:0.01rem solid #dadff8;
        border-top:none;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom:0.32rem;
    }
    .okCir {
        width: 0.53rem;
        height: 0.53rem;
        border-radius: 50%;
        color:#E6E6E6;
        font-size: 0.53rem;
    }
    .weiBo{
        width:100%;
        height:0.9rem;
        background: #5974ea;
        border-radius: 0.1rem;
        margin-bottom:0.12rem;
        text-align: center;
        line-height: 0.9rem;
        position:relative;
        font-size: 0.24rem;
        color:#fff;
    }
    .weiCir{
        width:0.6rem;
        height:0.6rem;
        border-radius: 50%;
        position:absolute;
        left:0.19rem;
        top:0.15rem;
        overflow: hidden;
        background:#6a82ec url("../assets/img/weibo.png") no-repeat center;
        background-size: 0.5rem;
    }
    .weiXin>.weiCir{
        background:#6a82ec url("../assets/img/weixin.png") no-repeat center;
        background-size: 0.5rem;
    }
    .weiXin{
        width:100%;
        height:0.9rem;
        background: #5974ea;
        border-radius: 0.1rem;
        position:relative;
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.24rem;
        color:#fff;
    }
</style>
<script>
    export default {
        data(){
          return{
              user:'',
              pass:'',
              emaile:'@'
          }
        },
        methods:{
            input(){
                var that=this;
                var notice=document.querySelector('.notice');
                notice.onclick=function(e){
                    var li=e.target;
                    var val=li.innerHTML;
                    that.user=that.user+val;
                    this.style.cssText='display:none';
                }
            },
            submit(){
                var that=this;
                fetch("/ajax/users/checkLogin",{
                    method:"post",
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    body:"user="+this.user+"&pass="+this.pass
                }).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    if(!e.message){
                        sessionStorage.indexLogin=JSON.stringify(e[0]);
                        that.$router.go(-1)
                    }else{
                        that.user=''
                        that.pass=''
                        mui.alert("账号或密码错误")
                    }
                })
            }
        }
    }
</script>
<form action="" enctype=""></form>

