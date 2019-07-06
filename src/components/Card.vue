<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-img :src="card.image" aspect-ratio="1"></v-img>

          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{card.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-card-text>Status:</v-card-text>
              <v-card-text>{{card.status}}</v-card-text>
            </v-list-tile>

            <v-list-tile>
              <v-card-text>Gender:</v-card-text>
              <v-card-text>{{card.gender}}</v-card-text>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-btn flat color="dark" @click="viewACharacter">More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],

  methods: {
    viewACharacter() {
      this.$router.push(`/SingleCharacter/${this.card.id}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
