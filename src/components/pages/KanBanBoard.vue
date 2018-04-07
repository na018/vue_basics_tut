<template>
  <v-layout row v-if="cardsByStatus">
    <m-kan-ban-column v-for="(state, index) in getStatus" :key="index"
                      group="board" :status="state" :activeBoard="activeBoard"
                      :width="getStatus.length"></m-kan-ban-column>
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

