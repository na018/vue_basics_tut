<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0 transparent">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img :src="user.img">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title> {{userName}}</v-list-tile-sub-title>
          <v-list-tile-title>
            {{user.firstName + ' ' + user.lastName}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>
  export default {
    name: "m-user-card",
    props: {
      user: {
        type: Object,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
    },
  }
</script>
