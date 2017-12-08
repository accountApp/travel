<template>
    <div>
        <el-button type="primary">
            <router-link to="/addAdmin" tag="span">添加管理员</router-link>
        </el-button>
        <el-table
                v-loading="loading"
                :data="tableData"
                height="537"
                border
                style="width: 100%"
        >
            <el-table-column
                    prop="aid"
                    align="center"
                    label="ID">
            </el-table-column>
            <el-table-column
                    prop="aname"
                    align="center"
                    label="管理员">
            </el-table-column>
            <el-table-column label="操作"
                             align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                loading:true
            }
        },
        created(){
            var that=this;
            fetch("/ajax/admin/select").then(function (e) {
                return e.json()
            }).then(function (e) {
                if(e.message){
                    console.log(e)
                    that.loading=false
                }else{
                    that.tableData=e
                    that.loading=false
                }
            })
        },
        methods:{
            handleEdit(index, row) {
                delete row.apass;
                this.$router.push({path:"/editAdmin",query:row})
            },
            handleDelete(index, row) {
                var that=this;
                fetch("/ajax/admin/del?aid="+row.aid).then(function (e) {
                    return e.text();
                }).then(function (e) {
                    if(e=="ok"){
                        that.$message({
                            message:"删除成功",
                            type:"success",
                            duration:1000
                        })
                        that.tableData.splice(index,1);
                    }
                })
            },

        }
    }
</script>

<style scoped>

</style>