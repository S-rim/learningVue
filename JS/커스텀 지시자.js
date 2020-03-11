new Vue({
   el : '#app',
   data() {
       return {
           Welcome : '안녕~'
       }
   },
   directives : {
       styleMe(el) {
           bind : {
               el.style.color = 'blue';
               el.style.fontSize = '42px';
               el.classNmae = 'text-center';
           }
       }
   }
});