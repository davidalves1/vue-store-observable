<template>
  <div>
    <h1>About {{ name }}</h1>
    <p>{{ count }} - {{ countStore }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br><br>
    <input type="text" placeholder="Nome" v-model="name">
    <br>
    <button @click="setName">Alterar</button>
    <br><br>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      count: 0,
      name: this.$store.state.name,
    };
  },
  computed: {
    countStore() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.count += 1;
      this.$store.commit('increment');
    },
    decrement() {
      this.count -= 1;
      this.$store.commit('decrement');
    },
    setName() {
      this.$store.commit('setName', this.name);
    },
  },
};
</script>
