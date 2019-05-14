<template>
    <div>
        {{msg}}
        <router-view></router-view>
        <button @click="show">notify</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'11111'
            }
        },
        methods: {
            show(){
                this.$notify('777777777',{delay:8000})
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>