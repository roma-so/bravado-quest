<template>
  <div>
    <v-progress-circular
      v-if="searching"
      :size="40"
      class="list--loader"
      indeterminate
      color="grey"
    ></v-progress-circular>
    <div v-if="userData.length" :class="['px-4', {'list-searching': searching}]">
      <template v-if="users.length">
        <virtual-list :size="150" :remain="3" :itemcount="users.length">
          <quest-card v-for="(user, index) in users" :key="index" :user="user" />
        </virtual-list>
      </template>
      <template v-else>Not found</template>
    </div>
    <v-skeleton-loader v-else class="mx-auto" type="list-item-avatar-three-line"></v-skeleton-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import virtualList from 'vue-virtual-scroll-list'
import QuestCard from "@/components/Quest/Card"

export default {
  name: "List",
  computed: {
    ...mapGetters({
      searching: 'searching',
      userData: 'data',
      users: 'users'
    })
  },
  components: {
    virtualList,
    QuestCard
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  }
};
</script>

<style lang="sass" scoped>
.list
  transition: all .3s ease-in-out
  position: relative
  &-searching
    opacity: 0.6

  &--loader
    transform: translate3d(-50%, 0, 0)
    position: absolute
    z-index: 99
    top: 80px
    left: 50%
</style>
