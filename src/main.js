import {createApp} from 'vue'
import App from "./App.vue";
import axios from 'axios'//引入axios

const app = createApp(App)
app.config.globalProperties.$http = axios
createApp(App).mount("#app")

