import Vue from 'vue'
import App from './App.vue'
import  {Input} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Input)

new Vue({
  el: '#app',
  render: h => h(App)
})
