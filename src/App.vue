<template>
  <div id="app">{{value}}jac{{value1}}
    <InputCurrencyVue v-model="value" @change="onChange" allowClear currency></InputCurrencyVue>
    <InputCurrencyVue v-model="value1" allowClear></InputCurrencyVue>
  </div>
</template>

<script>
import InputCurrencyVue from './components/InputCurrencyVue.vue';

export default {
  name: 'input-currency-vue',
  components: {
    InputCurrencyVue
  },
  data () {
    return {
      value: 33456.1234,
      value1: 1234567
    }
  },
  mounted() {
  },
  methods: {
    onChange($event) {
      console.log('parent', $event)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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

.audio-pp {
  width: 25px;
  height: 25px;
  /* margin: 10px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 50%; */
}
</style>
