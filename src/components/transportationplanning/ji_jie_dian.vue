<template>
    <div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="集结点名字">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="经度">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="维度">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">从地图上选择</el-button>
            </el-form-item>
        </el-form>

        <div style="text-align: right;">
            <el-button type="primary" @click="LastStep">上一步</el-button>
            <el-button type="primary" @click="CalPlan">计算方案</el-button>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'AdditionalTroops',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('Form submitted!');
        },
        LastStep() {

        },
        CalPlan() {

        }
    }
}
</script>
  
<style scoped></style>
  