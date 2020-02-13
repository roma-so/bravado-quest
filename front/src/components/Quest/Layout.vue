<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" sm="10" lg="8" class="mt-6 mx-auto">
        <v-card class="pt-3 pb-4">
          <v-text-field v-model="search" class="px-4" label="Search" prepend-inner-icon="$search" solo @keyup="updateSearch()"></v-text-field>
          <the-quest-list />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
import TheQuestList from "@/components/Quest/List"

export default {
  name: "Quest",
  data: () => ({
    lazy: {},
    search: ''
  }),
  components: {
    TheQuestList
  },
  computed: {
    ...mapGetters({
      searchData: 'search'
    })
  },
  mounted() {
    if (this.$route.params.search) {
      this.search = this.$route.params.search
      this.$store.commit('SET_SEARCH', this.search)
    }
  },
  methods: {
    updateQuery() {
      history.pushState({}, null, `/search/${this.search}`)
    },
    updateSearch() {
      clearTimeout(this.lazy)
      if (this.search.toLowerCase() !== this.searchData) {
        this.$store.commit('SET_SEARCHING', true)
        this.lazy = setTimeout(() => {
          this.updateQuery()
          this.$store.commit('FILTER_USERS', this.search)
        }, 500)
      } else this.$store.commit('SET_SEARCHING', false)
    }
  }

};
</script>
