<template>

    <el-button class="el-button" @click="testOne()">测试</el-button>

</template>

<script>
    export default {
        name: 'HelloWorld',
        testNumber: 1,
        props: {
            msg: String
        },
        methods: {
            testOne() {
                this.$http.post('test/hello').then(res => {

                    console.log(res);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
