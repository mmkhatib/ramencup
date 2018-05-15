<template>
    <div class="container">
        <div class="block">
            <span class="demonstration">Week</span>
            <el-date-picker
                    v-model="value3"
                    type="week"
                    format="week of dd-MMM-yyyy"
                    placeholder="Pick a week">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: "week-picker",
        data() {
            return {
                value3: '',
                value4: '',
                value5: '',
                value14: []
            };
        }
    };

</script>

<style scoped>

</style>