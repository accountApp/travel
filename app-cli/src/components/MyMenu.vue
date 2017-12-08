<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>管理员</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">
                            <router-link to="/admin" >管理员信息</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>用户</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">
                            <router-link to="/user" >用户信息</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>内容</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">
                            <router-link to="/content" >内容信息</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>推荐位</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">
                            <router-link to="/position" >推荐位信息</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script >
    export default {
        name:"MyMenu",
        methods: {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>