Vue.directive('style-me', {
    bind(el, binding) {
        el.style.color = binding.value || "blue";

        if (binding.modifiers.large)
        {
            el.style.fontSize = "42px";
        }

        else if (binding.modifiers.small)
        {
            el.style.fontSize = "17px";
        }

        el.className = binding.arg;
    }
});

new Vue ({
   el : '#app',
   data () {
       return {
           Welcome : '안녕!'
       }
   } 
});