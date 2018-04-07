<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <m-user-card :user="activeUser"></m-user-card>
        <v-divider></v-divider>
        <v-layout wrap pa-3>

            <m-activate-user v-for="(user, key, index) in allUsers" :key="user.key"  v-if="key !== activeUser.userName"
                             :user="user" class="hover-user"
                             @changeActiveUser="activeUser = user"
            ></m-activate-user>
        </v-layout>
    </v-card>
</template>

<script>


    import MUserCard from "../userAdminComponents/UserCard"
    import MActivateUser from "../userAdminComponents/ActivateUser"

    export default {

        components: {
            MActivateUser,
            MUserCard,
        },
        name: "m-user-admin",
        computed: {
            // todo |KB-5| Get allUsers & activeUser from Vuex store
        },
        data() {
            return {
                activeUser: {
                    userName: "heroHunter",
                    id: 3,
                    firstName: "Hero",
                    lastName: "Hunter",
                    img: "/static/img/avatars/hero.png",

                },
                allUsers: {
                    colin: {
                        userName: "colin",
                        id: 1,
                        firstName: "Colin",
                        lastName: "Conjurer",
                        img: "/static/img/avatars/avatar-male-1.png",
                    },
                    jess: {
                        userName: "jess",
                        id: 2,
                        firstName: "Jessi",
                        lastName: "James",
                        img: "/static/img/avatars/avatar-female-1.png",
                    },
                    heroHunter: {
                        userName: "heroHunter",
                        id: 3,
                        firstName: "Hero",
                        lastName: "Hunter",
                        img: "/static/img/avatars/hero.png",
                    },

                },
            }
        },
    }
</script>



