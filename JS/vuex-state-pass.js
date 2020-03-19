// 페이로드. state말고 다른 인수도 전달할 수 있게 하는 것.
const store = new Vuex.Store({
    state : {
        msg : 'Hello World',
        count : 0
    },
    mutations : {
        increment(state , payload) {
            state.count+=payload;
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
            store.commit('increment',10)
        }
    }
});