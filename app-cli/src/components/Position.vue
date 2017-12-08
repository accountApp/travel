<template>
    <div>
        <el-button type="primary">
            <router-link to="/addPosi" tag="span">添加分类</router-link>
        </el-button>
        <el-table
                v-loading="loading"
                :data="tableData"
                height="450"
                border
                style="width: 100%"
        >
            <el-table-column
                    prop="pid"
                    align="center"
                    label="位置ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="pname"
                    align="center"
                    label="位置名称"
                    width="180">
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
            fetch("/ajax/position/select").then(function (e) {
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
                this.$router.push({path:"/editPosi",query:row})
            },
            handleDelete(index, row) {
                var that=this;
                fetch("/ajax/position/del?pid="+row.pid).then(function (e) {
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