<template>
  <div>
    <h1>Home</h1>
    <h2>Welcome {{ name }}</h2>
    <p>{{ count }} - {{ countStore }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br><br>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
import { mapState } from '../store';

export default {
  name: 'Home',
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ...mapState(['name']),
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
  },
};
</script>
