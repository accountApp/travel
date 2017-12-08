<template>
    <div>
        <section class="banner">
            <div class="back" @click="back">
                <span class="iconfont icon-jiantou-left"></span>
                <span class="iconfont icon-jiantou-left"></span>
            </div>
            <div class="share">
                <span class="iconfont icon-fenxiang"></span>
            </div>
        </section>
        <combo :title="datas.title" :money="datas.money" :start="datas.start"></combo>
        <product :start="datas.start" :end="datas.end" :startTime="datas.startTime" :endTime="datas.endTime"></product>
        <journey1></journey1>
        <journey2></journey2>
        <journey3></journey3>
    </div>
</template>

<script>
    import combo  from "@/components/combo.vue"
    import product from "@/components/product.vue"
    import journey1 from "@/components/journey1.vue"
    import journey2 from "@/components/journey2.vue"
    import journey3 from "@/components/journey3.vue"
    export default {
        components:{combo,product,journey1,journey2,journey3},
        data(){
            return {
                datas:[]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        },
        created(){
            var that=this;
            var cid=this.$route.query.cid;
            fetch("/ajax/content/detail?cid="+cid).then(function (e) {
                return e.json()
            }).then(function (e) {
                if(!e.message){
                    that.datas=e[0];
                    console.log(that.datas)
                }
            })
        }
    }
</script>

<style scoped>
    .banner{
        width: 100%;height:3.39rem;
        background: url("/src/assets/img/pexels-photo-45917.jpeg") no-repeat center;
        background-size: cover;
        overflow: hidden;
    }
    .back{
        width: 0.465rem;height:0.29rem;
        border-radius: 0.6rem;
        background: #897ed6;
        margin-left: 0.24rem;margin-top: 0.45rem;
        text-align: center;
        float: left;
    }
    .back>span{
        width: 0.1rem;
        font-size: 0.04rem;
        float: left;
    }
    .back>span:first-child{
        color: #ffffff;
        margin-left: 0.05rem;
    }
    .back>span:last-child{
        color:#afa7e4;
    }
    .share{
        width: 0.5rem;height:0.5rem;
        border-radius: 50%;
        text-align: center;line-height: 0.5rem;
        background: #7a74d4;float: right;
        color: #ffffff;margin-top: 0.75rem;
        margin-right: 0.24rem;
    }
    .share>span{
        float: left;font-size: 0.2rem;
        margin-left: 0.1rem;
    }
</style>