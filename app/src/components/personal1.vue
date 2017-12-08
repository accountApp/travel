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
        <!--<validator name="validator1">-->
            <form>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="text" class="form-control"  name="uname" placeholder="请设置您的用户名" id="uname" @blur="checkUname" v-model="uname">
                    <div class="success" style="display: none" flag1="false"></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="text" class="form-control" name="email" placeholder="请填写您的初始邮箱" id="email" v-model="Email" @blur="checkEmail">
                    <div class="success" style="display: none" flag1="false"></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="password" class="form-control" id="pass" name="upass" placeholder="请填写您的六位密码" v-model="upass" @blur="checkUpass">
                    <div class="success" style="display: none" flag1="false"></div>
                </div>
                <div class="form-lis">
                    <label class="control-label"></label>
                    <div class="round">
                        <div class="round1"></div>
                    </div>
                    <input type="password" class="form-control" id="pass1"  name="upass1" placeholder="请重复填写您的六位密码" v-model="upass1" @blur="checkUpass1">
                    <div class="success" style="display: none" flag1="false"></div>
                </div>
                <div class="submit1" style="position: relative" @click="next()">
                        <input type="button" value="" class="submit" >
                        <div class="icon"></div>
                </div>
            </form>
        <!--</validator>-->
    </div>
</template>

<script>
    $(function(){
        $("form").validate({
            rules:{
                uname:{
                    required:true,
                    minlength:6,
                    maxlength:12,
                },
                email:{
                    email:true,
                },
                upass:{
                    required:true,
                    minlength:6,
                    maxlength:12,
                },
               upass1:{
                    required:true,
                    minlength:6,
                    maxlength:12,
                    equalTo:"#pass",
                }
            },
            messages:{
                uname:{
                    required:"用户名必填",
                    minlength:"用户名不得少于6个字符",
                    maxlength:"用户名不得超过12个字符",
                },
                email:{
                    email:"请输入正确的Email格式"
                },
                upass:{
                    required:"密码必填",
                    minlength:"密码不得少于六位",
                    maxlength:"密码不得多于十二位",
                },
                upass1:{
                    required:"密码必填",
                    minlength:"密码不得少于六位",
                    maxlength:"密码不得多于十二位",
                    equalTo:"密码不一致"
                },
            },
            submitHandler:function(form) {
                console.log(1)
//                $(form).ajaxSubmit();
            }
        })

    })

    export default {
        data() {
            return {
                uname:"",
                Email:"",
                upass:"",
                upass1:"",
                flag:false
            }
        },
        methods:{
            checkUname(){
                if(this.uname.length>=6 && this.uname.length<=12){
                    $("#uname").parents(".form-lis").children(".success").css({display:"block"}).attr("flag1","true")
                }else{
                    $("#uname").parents(".form-lis").children(".success").css({display:"none"}).attr("flag1","false")
                }
                this.checkSubmit()
            },
            checkEmail(){
                var str=this.Email;
                var tag='@';
                if(str.indexOf(tag)!=-1){
                    $("#email").parents(".form-lis").children(".success").css({display:"block"}).attr("flag1","true")
                }else{
                    $("#email").parents(".form-lis").children(".success").css({display:"none"}).attr("flag1","false")
                }
                this.checkSubmit()
            },
            checkUpass(){
                if(this.upass.length>=6 && this.upass.length<=12){
                    $("#pass").parents(".form-lis").children(".success").css({display:"block"}).attr("flag1","true")
                }else{
                    $("#pass").parents(".form-lis").children(".success").css({display:"none"}).attr("flag1","false")
                }
                this.checkSubmit()
            },
            checkUpass1(){
                if(this.upass1.length>=6 && this.upass1.length<=12 && this.upass1==this.upass){
                    $("#pass1").parents(".form-lis").children(".success").css({display:"block"}).attr("flag1","true")
                }else{
                    $("#pass1").parents(".form-lis").children(".success").css({display:"none"}).attr("flag1","false")
                }
                this.checkSubmit()
            },
            checkSubmit(){
                var flag=true;
                var suc=$(".success");
                for(var i=0;i<suc.length;i++){
                    if($(suc[i]).attr("flag1") !="true"){
                       flag=false;
                    }
                }
                this.flag=flag
                if(this.flag==true){
                    $(".icon").css({backgroundColor:"#4ba4fe"})

                }
            },
            next(){
                var that=this;
                if(this.flag==true){
                    fetch("/ajax/users/reg",{
                        method:'post',
                        headers:{
                            "content-type":'application/x-www-form-urlencoded'
                        },
                        body:"uname="+this.uname+"&upass="+this.upass+"&email="+this.Email+"&upass1="+this.upass1
                    }).then(function(e){
                        return e.text();
                    }).then(function(e){
                        if(e){
                            var obj={"uname":that.uname,"email":that.Email,"uid":e}
                            sessionStorage.indexLogin=JSON.stringify(obj);
                            that.$router.push('/');
                        }
                    })
                }
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
    background-image: url("/src/assets/img/registerno.png");
    background-size:cover;
    background-position:center center;
}
.process:first-of-type{
    background-image: url("/src/assets/img/registeractive.png");
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
    background-image: url("/src/assets/img/denglu-icon-zhanghao@2x.png");
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
    background-image: url("../assets/img/2.png");
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
