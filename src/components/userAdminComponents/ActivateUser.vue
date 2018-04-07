<template>
  <v-flex lg6 xs12>
  <v-layout>
    <v-flex xs8>
      <!-- todo |KB-3| use 'src/components/userAdminComponents/UserCard.vue' <m-user-card> for displaying the user nicely -->
    </v-flex>
    <v-flex xs4 mt-2 mr-1 @click="setActive">
      <v-btn>set active</v-btn>
    </v-flex>
  </v-layout>
  </v-flex>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    components: {},
    name: "m-activate-user",
    props: {
      user: {
        type: Object,
        required: true,
      },
      userName: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions(['setActiveUser']),
      setActive() {
          // todo call setActiveUser method from store and transmit user Object as property (payload)
      },
    },
  }
</script>

