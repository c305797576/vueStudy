<template>
    <div>
        计数器:    <button @click="minus">-</button>
      <br>
        当前:{{$store.state.count}}<br>
        计数器:    <button @click="add">+</button>
      {{$store.getters.getval}}
    </div>

</template>

<script>
  import * as Type from '../store/mutation-types';
    export default {
        data() {
            return {}
        },
        created() {
        },
        watch: {},
        methods: {
          add(){
            //提交add的mutation
            //载荷payload
            this.$store.commit(Type.INCREMENT,2)
          },
          minus(){
            this.$store.commit(Type.DECREMENT)
          }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>
