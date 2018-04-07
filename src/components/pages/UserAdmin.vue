<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <m-user-card :user="activeUser"></m-user-card>
        <v-divider></v-divider>
        <v-layout wrap pa-3>
            <m-activate-user v-for="(user, key, index) in allUsers" :key="user.key" v-if="key !== activeUser.userName"
                             :user="user" class="hover-user"></m-activate-user>
        </v-layout>
    </v-card>
</template>

<script>

    import {mapGetters} from 'vuex'
    import MUserCard from "../userAdminComponents/UserCard"
    import MActivateUser from "../userAdminComponents/ActivateUser"

    export default {

        components: {
            MActivateUser,
            MUserCard,
        },
        name: "m-user-admin",
        computed: {
            ...mapGetters(['allUsers', 'activeUser']),
        },
    }
</script>



