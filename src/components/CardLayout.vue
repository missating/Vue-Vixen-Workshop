<template>
  <v-container justify-center mt-5>
    <v-layout wrap>
      <v-flex xs6 v-for="(character, index) in characters" :key="index">
        <card v-if="character" :card="character"></card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Card from "./Card";

export default {
  name: "CardLayout",
  components: {
    Card
  },
  data() {
    return {
      characters: []
    };
  },
  created() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        this.characters = response.data.results;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
