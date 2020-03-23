import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyA7YvrpHZqSoAyxGNuGJNRK4bvsatWkKo0",
    authDomain: "petstore-8fc21.firebaseapp.com",
    databaseURL: "https://petstore-8fc21.firebaseio.com",
    projectId: "petstore-8fc21",
    storageBucket: "petstore-8fc21.appspot.com",
    messagingSenderId: "872420165769",
    appId: "1:872420165769:web:0c7ac26a3c22b0b6215e58",
    measurementId: "G-G2YQT3J0FT"
});

export const db = app.database();

export const productsRef = db.ref('products');