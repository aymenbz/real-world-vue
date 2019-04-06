<template>
  <div>
    <h1>Create An Event {{user.name}}</h1>
    <p>This Event was created By {{user.id}}</p>
    <ul>
      <li v-for="cat in categories" :key="cat.id">{{cat.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["user", "categories"])
};
</script>

<style>
</style>
