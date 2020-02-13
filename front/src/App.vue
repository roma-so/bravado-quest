<template>
  <v-app>
    <the-header />
    <v-content>
      <the-quest-layout />
    </v-content>
  </v-app>
</template>

<script>
import TheQuestLayout from "@/components/Quest/Layout";
import TheHeader from "@/components/TheHeader";

export default {
  name: "App",

  components: {
    TheQuestLayout,
    TheHeader
  },

  data: () => ({
    //
  })
};
</script>
