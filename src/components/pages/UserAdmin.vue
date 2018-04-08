<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <v-layout wrap pa-3>
            <!-- todo |KB-1| display the onePerson Object in a paragraph <p> element -->
            <!-- todo |KB-1| create an unordered list <ul><li></li></ul> & show all onePerson attributes in a <v-text-field> with 1-way & 2-way data binding-->
        </v-layout>
    </v-card>
</template>

<script>


    export default {

        name: "m-user-admin",
        data() {
            return {
                key: 'value',
                //todo  [KB-1] create onePerson Object with userName, firstName, lastName, img as Object attributes
            }
        },
    }
</script>