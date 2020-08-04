import Vue from 'vue';

function createStore({ state, mutations }) {
  return {
    state: Vue.observable(state),
    commit(key, ...args) {
      mutations[key](state, ...args);
    },
  };
}

export const store = createStore({
  state: { count: 0, name: 'David' },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    setName(state, name) {
      state.name = name;
    },
  },
});

export const mapState = (keys = []) => Object.keys(store.state)
  .filter((key) => keys.includes(key))
  .reduce((response, key) => {
    Object.assign(response, { [key]: () => store.state[key] });
    return response;
  }, {});
