import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引用
import axios from 'axios'

//全局注册
Vue.prototype.$http=axios 
//等号后面的axios来自于import之后的取名，这个名字可以改变   $http是变量名一样的存在，也可以是$axios
//以上两行代码是固定格式，只有上行注释的两个地方可以修改

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
