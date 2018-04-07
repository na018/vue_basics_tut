<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0 transparent">
      <!-- todo |KB-2| implement UserCard with <v-list-tile-avatar><v-list-tile-content> -->
    </v-list>
  </v-toolbar>
</template>

<script>
  export default {
    name: "m-user-card",
      props: {
          propName: {
              type: Object,
              required: true,
          },
          // todo |KB-2| get User Object & userName from parent Component
      },
  }
</script>
