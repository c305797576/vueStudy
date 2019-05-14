<template>
    <div>
        <div class="notify">{{value}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {value:''}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped>
    .notify{
        height: 40px;
        width: 100px;
        background: rgba(0,0,0,.45);
        border-radius: 15px;
        line-height: 40px;
        text-align: center;
        color: white;
    }
</style>