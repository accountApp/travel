<template>
  <div class="Load">
      <div class="load-top"></div>
     <div class="load-bottom">
         <div class="aperture">
             <div class="aperture1">
                 <div class="aperture2">
                     <div class="aperture3"></div>
                 </div>
             </div>
         </div>
         <!--注册内容开始-->
         <router-view class="load-form"/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Load',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Load{
    width: 100%;
    height:100%;
    background: #3051e5;
    overflow: hidden;
}
.load-top{
  width:100%;
  height:5.8rem;
  background-image: url("/src/assets/img/4d5f6516270781.58491dbe32d89.jpg");
  background-size:cover;
  background-position:center;
}
.load-bottom{
    width: 100%;
    height:7.54rem;
    position: fixed;
    bottom: 0;
    left:0;
    background: #3051e5;

}
.aperture{
    width: 100%;
    height:1.23rem;
    position: relative;
}
.aperture1{
    width: 2.24rem;
    height:2.24rem;
    position: absolute;
    top:-1.12rem;
    left:50%;
    margin-left: -1.12rem;
    background:rgba(217,232,232,0.5);
    border-radius: 50%;
}
.aperture2{
    width:1.8rem;
    height:1.8rem;
    position: absolute;
    top:0.22rem;
    left:0.22rem;
    background:rgba(166,206,236,0.5);
    border-radius: 50%;
}
.aperture3{
    width:1.38rem;
    height:1.38rem;
    position: absolute;
    top:0.21rem;
    left:0.21rem;
    background-image:url("/src/assets/img/denglu-icon-zhanghao@2x.png");
    background-size:1rem 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-color:rgba(75,164,254,0.9);
    border-radius: 50%;
}
</style>
