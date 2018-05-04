<template>
   <div>
       <el-select v-model="value5" multiple placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
   </div>
</template>

<!--<script>-->
    <!--export default {-->
        <!--name: "fav-restaurant-selector",-->
<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'American',
                    label: 'American'
                }, {
                    value: 'Japanese',
                    label: 'Japanese'
                }, {
                    value: 'Arabic',
                    label: 'Arabic'
                }, {
                    value: 'Italian',
                    label: 'Italian'
                }, {
                    value: 'Thai',
                    label: 'Thai'
                }],
                value5: [],
                value11: []
            }
        }
    }
</script>


<style scoped>

</style>