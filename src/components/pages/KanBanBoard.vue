<template>
  <v-layout row v-if="cardsByStatus">
    <!-- todo |KB-9| create 'm-kan-ban-column' for each status defined in the vuex store 'src/store/modules/kanbancards.js' -->
  </v-layout>
</template>

<script>
  import MKanBanColumn from "../kanBanComponents/KanBanColumn"
  import {mapGetters} from 'vuex'

  export default {
    components: {MKanBanColumn},
    name: "m-kan-ban-board",
    computed: {
      ...mapGetters(['cardsByStatus', 'getStatus', 'activeBoard']),
    },
  }
</script>

