<template>
    <div>
        <el-button type="primary">
            <router-link to="/addUser" tag="span">添加用户</router-link>
        </el-button>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="头像"
                    width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.photo" alt="">
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    width="180">
                <template slot-scope="scope">
                    {{ scope.row.uname }}
                </template>
            </el-table-column>
            <el-table-column
                    label="邮箱"
                    width="180">
                <template slot-scope="scope">
                    {{ scope.row.email }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
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
            fetch("/ajax/users/select").then(function (e) {
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
                delete row.upass;
                this.$router.push({path:"/editUser",query:row})
            },
            handleDelete(index, row) {
                var that=this;
                fetch("/ajax/users/del?uid="+row.uid).then(function (e) {
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
            }
        }
    }
</script>

<style scoped>

</style>