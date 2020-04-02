// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/app.css')
import { store } from './store/store';
import firebase from 'firebase';
import './firebase';


Vue.config.productionTip = false

let firebaseConfig = {
  apiKey: "AIzaSyA7YvrpHZqSoAyxGNuGJNRK4bvsatWkKo0",
  authDomain: "petstore-8fc21.firebaseapp.com",
  databaseURL: "https://petstore-8fc21.firebaseio.com",
  projectId: "petstore-8fc21",
  storageBucket: "petstore-8fc21.appspot.com",
  messagingSenderId: "872420165769",
  appId: "1:872420165769:web:0c7ac26a3c22b0b6215e58",
  measurementId: "G-G2YQT3J0FT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})