<template>
  <div>
    <v-card class="card my-6" background="#FAFAFA">
      <v-container class="py-0">
        <v-row>
          <v-col cols="auto" class="pa-0 d-none d-md-block">
            <div class="grey">
              <v-img height="135" width="135" :src="user.avatar"></v-img>
            </div>
          </v-col>
          <v-col class="d-block d-md-flex justify-space-between ml-4 text-left">
            <div>
              <h3><text-highlight :queries="search">{{ user.name }}</text-highlight></h3>
              <p class="grey--text text--darken-1 font-weight-bold mb-0">
                <text-highlight :queries="search">{{ user.title }}</text-highlight>
              </p>
              <p class="grey--text text--darken-1">
                <text-highlight :queries="search">{{ user.address }}, {{ user.city }}</text-highlight>
              </p>
            </div>
            <div class="card--email text-right mt-1 mb-0">
              <a :href="`mailto:${user.email}`" class="grey--text">
                <text-highlight :queries="search">{{ user.email }}</text-highlight>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextHighlight from 'vue-text-highlight'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  name: "Card",
  components: {
    TextHighlight
  },
  computed: {
    ...mapGetters({
      search: 'search'
    })
  },
};
</script>

<style lang="sass" scoped>
.card
  overflow: hidden
  height: 135px
  &--email
    white-space: nowrap
</style>