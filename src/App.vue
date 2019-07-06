<template>
  <v-layout justify-center>
    <v-flex>
      <v-toolbar dark fixed>
        <v-toolbar-title>Rick and Morty</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <router-view/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
