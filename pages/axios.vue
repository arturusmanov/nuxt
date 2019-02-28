<template>
  <div>
    <p>{{ info }}</p>
    <button @click="load">asd</button>
    <input type="text" v-model="name">
    <p>{{ artist }}</p>
    <button @click="interval">interval</button>
    <button @click="clearIntId">Clear interval</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        info: null,
        loading: true,
        errored: false,
        name: 'axios',
        errors: [],
        artist: 0,
        intervalId: 0
      };
    },
    filters: {
      currencydecimal(value) {
        return value.toFixed(2);
      }
    },
    methods:{
      load(){
        axios
          .post('http://127.0.0.1:3012/artists', {
            name: this.name
          })
          .then(response => {this.artist})
          .catch(e => {
            this.errors.push(e)
          })

      },
      interval(){
        this.intervalId = setInterval(this.load, 1000)
      },
      clearIntId(){
        clearInterval(this.intervalId)
      }
    },


  }

</script>

<style scoped>

</style>
