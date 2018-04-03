<template>
  <v-navigation-drawer temporary :right="true" :value="rightDrawer" fixed app dark>
    <v-list>
      <v-list-tile @click="$emit('update:right',rightDrawer)">
        <v-list-tile-action>
          <v-icon>arrow_left</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Right temporary menu</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "m-right-nav",
    props: {
      rightDrawer: {
        type: Boolean,
        required: true,
      },
      right: {
        type: Boolean,
        required: true,
      },
    },
  }
</script>
