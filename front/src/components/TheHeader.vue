<template>
  <v-app-bar app color="black" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="120"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn color="blue accent-4" tile>Sign up</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>
