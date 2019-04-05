<template>
  <div>
    <h1>Create An Event {{userName}}</h1>
    <p>This Event was created By {{userName}}</p>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categories: state => state.categories
    })
  };
</script>

<style>
</style>
