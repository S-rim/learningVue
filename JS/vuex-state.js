const store = new Vuex.Store({
    state : {
        msg : 'Hello World',
        count : 0
    },
    mutations : {
        increment(state) {
            state.count++;
        }
    }
});

new Vue({
    el : '#app',
    data() {
        return {
            header : 'vuex 앱'
        }
    },
    computed : {
        welcome() {
            return store.state.msg;
        },
        counter() {
            return store.state.count;
        }
    },
    methods : {
        increment() {
            store.commit('increment')
        }
    }
});