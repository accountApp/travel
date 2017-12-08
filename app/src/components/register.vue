<template>
   <section class="register">
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
      <div class="title">
          <p>头像选择与上传</p>
          <p>TOUXIANG</p>
      </div>
       <div class="regheader2">
            <div class="reghcircle">
                   <div>
                       <img src="/src/assets/img/registerhead2.png" alt="">
                   </div>
            </div>
       </div>
       <div class="regupload">
           <div class="photo"></div>
           <div class="upload">
               <input type="file" name="file" id="file">
           </div>
       </div>
       <div class="submit1" style="position: relative">
           <input type="submit" value="" class="submit">
           <div class="icon"></div>
       </div>
   </section>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                files:"",
                flag:false
            }
        },
    }
</script>

<style scoped>
   .register{
       width:100%;
       height:6.4rem;
       background:#3051e5;
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
        background-image: url("../assets/img/registeractive.png");
        background-size:cover;
        background-position:center center;
    }
    .process:last-of-type{
        background-image: url("../assets/img/registerno.png");
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
    header{
       width:100%;
        height:5.8rem;
        background: red;
    }
    .title>p:first-child{
        font-size:0.22rem;
        color:#fff;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom:0.04rem;
    }
    .title>p:nth-child(2){
        color:#5772ea;
        letter-spacing:1px;
        font-size:0.18rem;
        font-family:"Times New Roman";
        text-align: center;
    }
    .regheader2{
        display: flex;
        justify-content: center;
        margin-top:0.36rem;
    }
    .reghcircle{
        width:1.48rem;
        height:1.48rem;
        border-radius:50%;
        background: #5471e8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .reghcircle>div{
        width:1.1rem;
        height:1.1rem;
        border-radius: 50%;
        background: #bbc7f7;
       position: relative;
    }
    .reghcircle>div>img{
        width:1.1rem;
        height:1.1rem;
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        margin: auto;
    }
    .regupload{
        margin:0.42rem 0 0.5rem 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .photo{
        width:0.68rem;
        height:0.58rem;
        background-image: url("../assets/img/zhuce-anniu-xiangji.png");
        background-position: center center;
        background-size:cover;
    }
    .upload{
        width:0.44rem;
        height:0.58rem;
        background-image: url("../assets/img/zong2.png");
        background-position: center center;
        background-size:cover;
        position: relative;
    }
    .upload input{
        width: 100%;
        height: 100%;
        font-size: 0.18rem;
        position: absolute;
        top:0;
        left:0;
        opacity: 0;
    }
   input[type="submit"]{
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
</style>
