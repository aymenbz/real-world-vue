<template>
  <div>
    <h1>Create An Event {{user.name}}</h1>
    <p>This Event was created By {{user.id}}</p>
    <!-- <ul>
      <li v-for="cat in categories" :key="cat.id">{{cat.name}}</li>
    </ul>-->
    <p>There Are {{catLength}} Categories</p>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    count() {
      return this.$store.getters.activeTodoCount;
    },
    ...mapState(["user", "categories"])
  }
};
</script>

<style>
</style>
