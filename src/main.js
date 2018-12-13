import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

const vm = new Vue({
  el:'#app',
  data:{
    list:[]
  },
  render: h => h(App)
});
// eslint-disable-next-line no-console
console.log(vm);
