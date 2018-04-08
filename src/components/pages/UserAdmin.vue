<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <v-layout wrap pa-3>
            <!-- todo |KB-2| use 'src/components/userAdminComponents/UserCard.vue' for displaying one Person by passing the Person object as attribute to <m-user-card> -->
            <p class="centerElem card pa-1">{{onePerson}}</p>
            <ul class="centerElem card pa-5 mt-4">
                <li>id: <v-text-field type="Number" v-model="onePerson.id" ></v-text-field></li>
                <li>username: <v-text-field v-model="onePerson.userName" ></v-text-field></li>
                <li>first name:<v-text-field v-model="onePerson.firstName" ></v-text-field></li>
                <li>last name: <v-text-field v-model="onePerson.lastName" ></v-text-field></li>
                <li><img :src="onePerson.img" class="avatarIcon" ></li>
            </ul>
        </v-layout>
    </v-card>
</template>

<script>


    export default {

        name: "m-user-admin",
        data() {
            return {
                onePerson: {
                    firstName: "Hero",
                    id: 3,
                    img: "/static/img/avatars/hero.png",
                    lastName: "Hunter",
                    userName: "heroHunter",
                }
            }
        },
    }
</script>
<style lang="scss">
    .avatarIcon{
        width:auto;
        height:40px;
    }
    .centerElem {
        margin:auto;
    }
    ul.card{
        list-style-type: none;
        color: grey;
        .input-group--text-field{
            padding-top: 0;
        }
        li{
            color: grey;
        }
    }

</style>


