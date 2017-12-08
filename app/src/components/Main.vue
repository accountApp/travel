<template>
    <div class="main">
        <router-view></router-view>

        <last></last>
    </div>

</template>


<script>
    import last from "@/components/last"
    export default {
        name: 'Main',
        components:{last}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main{
        height: 100vh;
    }
</style>
