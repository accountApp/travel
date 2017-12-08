<template>
    <footer>
        <router-link to="/" class="part">
            <img class="partimg" src="/src/assets/img/home-icon-home-zc@2x.png" alt="">
        </router-link>
        <router-link to="" class="part">
            <img class="partimg" src="/src/assets/img/home-icon-faxian-zc@2x.png" alt="">
        </router-link>
        <router-link to="" class="part">
            <img class="partimg" src="/src/assets/img/home-icon-shequ-zc@2x.png" alt="">
            <img  class="xiaoxi" src="/src/assets/img/home-icon-xiaoxishu-zc@2x.png" alt="">
        </router-link>
        <router-link to="/mycenter" class="part">
            <img class="partimg" src="/src/assets/img/home-icon-gerenzhongxin-zc@2x.png" alt="">
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: 'last'
    }
</script>

<style>
    footer{
        position: absolute;bottom: 0;left: 0;z-index: 1;
        width: 100%;
        height: 0.98rem;
        display: flex;
        justify-content: space-between;
    }
    .part{
        display: block;
        width: 25%;
        height: 100%;
        background: #375bf9;
        position: relative;
    }
    footer>div:first-child{
        background: #3051e5;
    }
    .partimg{
        width: 0.88rem;
        height: 0.88rem;
        display: block;
        margin: 0.05rem auto;
    }
    .xiaoxi{
        width: 0.39rem;
        height: 0.33rem;
        top: 0.05rem;
        left: 1.2rem;
        position: absolute;
    }

</style>
