const store = new Vuex.Store({
    state: {
      msg: 'Shin seorim',
      count: 0
    },
    mutations: {
      increment(state, payload) {
          state.count += payload;
      }
    },
    getters: {
      msg(state) {
        return state.msg.toUpperCase();
      },
      count(state) {
        return state.count;
      }
    },
    actions: {
      increment(context, payload) {
        setTimeout(function() {
          context.commit('increment', payload);
        }, 2000);
      }
    }
});

new Vue({
    el: '#app',
    data() {
      return {
        header: 'Vuex 앱'
      }
    },
    computed: {
      welcome() {
        return store.getters.msg;
      },
      counter() {
        return store.getters.count;
      }
    },
    methods: {
      increment() {
        store.dispatch('increment', 10);
      }
    }
});


