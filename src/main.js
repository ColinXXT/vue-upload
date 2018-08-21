import Vue from "vue";
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from "./pages/UploadIndex.vue";

Vue.config.productionTip = false;

Vue.use('iView')
new Vue({
  render: h => h(App)
}).$mount("#app");
