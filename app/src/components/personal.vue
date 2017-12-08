<template>
    <div class="personal">
        <div class="spread">
            <div class="processBox">
                <div class="process"></div>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="process"></div>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="process"></div>
            </div>
        </div>
        <div class="per-header">
            <h4>基本信息填写</h4>
            <span>XINXITIANXIE</span>
        </div>
            <form>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="text" class="form-control" placeholder="请设置您的用户名"  v-model="uname" >
                    <div class="success" v-show="showUname"></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="text" class="form-control" placeholder="请填写您的初始邮箱"  v-model="Email" @change="changeEmail" >
                    <div class="success" v-show="showEmail" ></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="password" class="form-control" id="pass" name="upass" placeholder="请填写您的六位密码" v-model="upass"  @change="changePass" >
                    <div class="success" v-show="showPass" ></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="password" class="form-control" placeholder="请重复填写您的六位密码" v-model="upass1"  @change="changePass1">
                    <div class="success" v-show="showPass1"></div>
                </div>
                <div class="submit1" style="position: relative">
                        <input type="button" value="" class="submit" @click="submit()">
                        <div class="icon"></div>
                </div>
            </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname:"",
                showUname:this.uname?true:false,
                Email:"",
                showEmail:false,
                upass:"",
                showPass:false,
                upass1:"",
                showPass1:false,
                flag:false
            }
        },
        watch:{
            showUname:this.uname?true:false,
        },
        methods:{
            changeUname(){
               if(this.uname==""){
                   this.showUname=false;
               }else{
                   this.showUname=true;
                }
            },
            changeEmail(){
                if(this.Email==""){
                    this.showEmail=false;
                }else{
                    this.showEmail=true;
                }
            },
            changePass(){
                if(this.upass1==""){
                    if(this.upass=="" || this.upass.split("").length<6){
                        this.showPass1=false;
                    }else{
                        this.showPass=true;
                    }
                }else{
                    if(this.upass==this.upass1 && this.upass.split("").length>=6 ){
                        this.showPass=true;
                    }else{
                        this.showPass=false;
                        this.showPass1=false;
                    }
                }

            },
            changePass1(){
                if(this.upass1=="" || this.upass1.split("").length<6){
                    this.showPass1=false;
                }else if(this.upass==this.upass1){
                    this.showPass1=true;
                }
            },
            submit(){
                var that=this;
                if(this.uname=="" || this.Email=="" || this.upass=="" || this.upass1== ""){

                }
                /*if(this.flag==true){
                    console.log(1)
                    fetch("/abc/users/User",{
                        method:'post',
                        headers:{
                            "content-type":'application/x-www-form-urlencoded'
                        },
                        body:"uname="+this.uname+"&upass="+this.upass+"&email="+this.Email+"&upass1="+this.upass1
                    }).then(function(e){
                        return e.json();
                    }).then(function(e){
                        console.log(e.message)
                        if(e.message=="success"){
                            that.$router.push('/register');
                        }

                    })
                }*/
            }
        }
    }
</script>

<style scoped>
.personal{
    width: 100%;
    height:6.3rem;
}
.spread{
    width: 100%;
    height:0.6rem;
    margin-bottom: 0.1rem;
}
.processBox{
    width:100%;
    height:0.6rem;
    display: flex;
    justify-content: center;
}
.process{
    width:0.6rem;
    height:0.6rem;
    border-radius: 50%;
    background-image: url("../assets/img/registerno.png");
    background-size:cover;
    background-position:center center;
}
.process:first-of-type{
    background-image: url("../assets/img/registeractive.png");
}
.circles{
    width: 0.8rem;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:0 14px;
}
.circles>li{
    width: 0.08rem;
    height:0.08rem;
    border-radius: 50%;
}
.circles>li:first-child{
    background: #3357e6;
}
.circles>li:nth-child(2){
    background: #355ee8;
}
.circles>li:nth-child(3){
    background: #3b6aea;
}
.circles>li:nth-child(4){
    background: #4583ef;
}
.circles>li:nth-child(5){
    background: #509cf5;
}
.circles>li:nth-child(6){
    background: #65ceff;
}
.per-header{
    width: 100%;
   height:0.6rem;
    margin-bottom: 0.2rem;
}
.per-header h4{
    height:0.3rem;
    font-size:0.3rem;
    line-height: 0.3rem;
    color:#ffffff;
    font-weight: 500;
    margin-bottom: 0.1rem;
    letter-spacing:0.06rem;
    padding-left: 0.63rem;
    box-sizing: border-box;
}
.per-header span{
    height: 0.18rem;
    display: block;
    font-size:0.14rem;
    line-height: 0.18rem;
    color:#5974ea;
    letter-spacing:-0.01rem;
    padding-left: 0.77rem;
    box-sizing: border-box;
}
/*表单开始*/
.form-lis{
    width:6.7rem;
    height:0.72rem;
    /*background: red;*/
    margin: 0 auto;
    border-bottom:1px solid rgba(111,134,237,0.8);
    position: relative;
}
.form-lis .control-label{
    display: block;
    width: 0.25rem;
    height:0.25rem;
    margin-left: 0.22rem;
    margin-top: 0.23rem;
    float: left;
    background-image: url("../assets/img/denglu-icon-zhanghao@2x.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.form-lis:nth-child(2) .control-label{
    background-image: url("../assets/img/youxiang.png");
}
.form-lis:nth-child(3) .control-label{
    background-image: url("../assets/img/zhuce-icon-mima@2x.png");
}
.form-lis:nth-child(4) .control-label{
    background-image: url("../assets/img/zhuce-icon-mima@2x.png");
}
.round{
    width: 0.12rem;
    height:0.12rem;
    position: relative;
    margin-left: 0.28rem;
    margin-top: 0.3rem;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    float: left;
}
.round1{
    width: 0.07rem;
    height:0.07rem;
    position: absolute;
    top:0.02rem;
    left:0.02rem;
    background: #65ceff;
    border-radius: 50%;
}
.form-control{
    width: 4rem;
    height:99%;
    outline:none;
    border:none;
    padding-left: 0.45rem;
    font-size: 0.22rem;
    line-height: 0.72rem;
    letter-spacing:0.04rem;
    background: #3051e5;
    box-sizing: border-box;
    color:#fff;
    position: absolute;
    top:0;
    left:1.14rem;
    z-index: 1;
}
::placeholder{
    color:#697ee9;
}
input[type="button"]{
    width: 6.74rem;
    height: 0.9rem;
    background: #ffffff;
    font-size: 0.14rem;
    border-radius: 0.06rem;
    margin: 0.25rem auto;
    display: block;
    border:none;
    outline: none;
}
.icon{
    width: 0.53rem;
    height: 0.53rem;
    background-image: url("/src/assets/img/2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:90%;
    background-color:rgba(230,230,230,0.9);
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
}
.success{
    width: 0.43rem;
    height:0.43rem;
    background-image: url("../assets/img/denglu-icon-chenggong@2x.png");
    background-size: 0.43rem;
    background-position: center;
    border-radius: 50%;
    float: right;
    margin-top: 0.15rem;

}
/*表单结束 */
</style>
