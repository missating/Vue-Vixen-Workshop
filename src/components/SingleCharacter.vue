<template>
  <v-container mt-5>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-img :src="character.image" height="600px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{character.name}}</div>
              <span class="grey--text">{{character.species}}</span>
            </div>
          </v-card-title>
          <v-card-text>
            {{character.name}} originated from {{character.origin.name}} and is currently on
            {{character.location.name}} and has appeared in the following episodes:
          </v-card-text>

          <div v-for="(episode, index) in character.episode" :key="index">
            <v-card-text>
             {{episode}}
            </v-card-text>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleCharacter",
  data() {
    return {
      character: []
    };
  },
  created() {
    this.getSingleCharacter();
  },
  methods: {
    async getSingleCharacter() {
      const id = this.$router.history.current.params.id;
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        this.character = response.data;
      } catch (error) {}
    }
  }
};
</script>
