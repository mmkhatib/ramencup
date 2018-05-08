<template>
    <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="State Abbreviations"
            v-model="value2"
            :data="data2">
    </el-transfer>
</template>

<script>
    export default {
        data() {
            // eslint-disable-next-line
            const generateData2 = _ => {
                const data = [];
                const states = ['La Penguina', 'Restaurant 2', 'Restaurant 3', 'Restaurant 4', 'Restaurant 5', 'Restaurant 2', 'Restaurant 2 '];
                // const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
                states.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index
                        // initial: initials[index]
                    });
                });
                return data;
            };
            return {
                data2: generateData2(),
                value2: []
                // filterMethod(query, item) {
                //     return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
                // }
            };
        }
    };
</script>

<style scoped>


</style>