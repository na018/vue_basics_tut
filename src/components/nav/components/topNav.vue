<template>
  <v-toolbar class="test" app :clippedLeft="clipped" dark color="indigo">
    <v-toolbar-side-icon @click.stop="$emit('update:toolbarSideIcon', drawer, miniVariant)"></v-toolbar-side-icon>
    <v-btn icon @click.stop="$emit('update:miniVariant', drawer, miniVariant)">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-btn icon @click.stop="$emit('update:clipped',clipped)">
      <v-icon>web</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="$emit('update:rightDrawer')">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "m-top-nav",
    props: {
      clipped: {
        type: Boolean,
        required: true,
      },
      miniVariant: {
        type: Boolean,
        required: true,
      },
      drawer: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
        }],
      }
    },
  }

</script>
