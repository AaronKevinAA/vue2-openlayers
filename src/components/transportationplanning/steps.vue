<template>
    <div>
        <el-steps :active="next" finish-status="success">
            <el-step title="装载兵力"></el-step>
            <el-step title="装载关联"></el-step>
            <el-step title="装载步列"></el-step>
            <el-step title="装载点"></el-step>
            <el-step title="集结点"></el-step>
            <el-step title="方案生成"></el-step>
        </el-steps>
<!--      {{next}}-->
<!--        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
    </div>

</template>
  
<script>
export default {
    props:['active'],
    data() {
        return {
            index:0
        }
    },
    methods: {
    },
  computed:{
      next(){
        if(this.active === 1 ){
          return 0
        }else if(this.active === 2 ){
          return 1
        }else if(this.active === 3){
          return 5
        }else if(this.active === 5 ){
          return 3
        }else if(this.active === 6){
          return 4
        }else if(this.active === 7){
          return 5
        }
      }
    }
}
</script>