import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';

import AlertModal from '@/components/AlertModal';

import 'bootswatch/dist/cosmo/bootstrap.css';

const app = createApp(App);

//the modal uses a vuex store variable so its available in all components
app.use(store)

//the modal component is registered globally
app.component('alert-modal', AlertModal);

app.mount('#app')
