<template>
    <div>
        <el-button type="primary">
            <router-link to="/addCon" tag="span">添加内容</router-link>
        </el-button>
        <el-table
                v-loading="loading"
                :data="tableData"

                border
                style="width: 100%"
        >
            <el-table-column
                    prop="title"
                    align="center"
                    label="标题">
            </el-table-column>
            <el-table-column
                    prop="content"
                    align="center"
                    label="内容">
            </el-table-column>
            <el-table-column
                    prop="money"
                    align="center"
                    label="价格">
            </el-table-column>

            <el-table-column
                    prop="start"
                    align="center"
                    label="始发地">
            </el-table-column>
            <el-table-column
                    prop="end"
                    align="center"
                    label="目的地">
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    align="center"
                    label="出发时间">
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    align="center"
                    label="到达时间">
            </el-table-column>
            <el-table-column
                    prop="cdate"
                    align="center"
                    label="添加时间">
            </el-table-column>
            <el-table-column
                    prop="pname"
                    align="center"
                    label="所属位置">
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
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left" @click="pre">上一页</el-button>
            <el-button type="primary" @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                loading:true,
                pages:0,
                flag:true,
            }
        },
        created(){
            var that=this;
            fetch("/ajax/content/select?page="+this.pages).then(function (e) {
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
            pre(){
                this.pages=this.pages<=0?0:this.pages-1;
                var that=this;
                fetch("/ajax/content/select?page="+this.pages).then(function (e) {
                    return e.json()
                }).then(function (e) {
                    if(e.message){
                        console.log(e)
                        that.loading=false
                    }else{
                        that.tableData=e
                        that.loading=false
                        that.flag = true
                    }
                })
            },
            next(){
                if(this.flag) {
                    this.pages++;
                    var that = this;
                    fetch("/ajax/content/select?page=" + this.pages).then(function (e) {
                        return e.json()
                    }).then(function (e) {
                        if (e.message) {
                            console.log(e)
                            that.flag = false
                            that.pages--;
                            that.loading = false
                        } else {
                            that.tableData = e
                            that.loading = false
                        }
                    })
                }
            },
            handleEdit(index, row) {
                this.$router.push({path:"/editCon",query:row})
            },
            handleDelete(index, row) {
                var that=this;
                fetch("/ajax/content/del?cid="+row.cid).then(function (e) {
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