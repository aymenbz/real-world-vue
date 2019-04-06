<template>
  <div>
    <h1>Create An Event {{user.name}}</h1>
    <p>This Event was created By {{user.id}}</p>
    <!-- <ul>
      <li v-for="cat in categories" :key="cat.id">{{cat.name}}</li>
    </ul>-->
    <p>There Are {{catLength}} Categories</p>
    <p>{{getEventById(2)}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"])
  }
};
</script>

<style>
</style>
