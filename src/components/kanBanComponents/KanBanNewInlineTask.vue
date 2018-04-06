<template>
  <v-card class="ma-2 pa-1">
    <v-layout class="kanban-card grey lighten-2" wrap>
      <v-flex :class="bgColor" class="mw-10 card-color-indicator"></v-flex>
      <v-flex pt-2>
        <v-card-title class=" pa-0 lighten-2 pl-3  no-pad">
          <v-layout row >
            <v-flex xs2> Title: </v-flex>
            <v-flex xs10 pr-3>
              <v-text-field name="description" label="title" v-model="card.title"
                            class="input-group--focused pt-0 mt-0 regular mr-4"  single-line hide-details></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text mb-3>
          <v-layout row>
            <v-flex xs2>   Task Type:</v-flex>
            <v-flex>
              <v-select :items="taskTypes" single-line label="Task type:" hide-details v-model="card.taskType" class="pt-0 ml-1 mr-3 no-pad"></v-select>
            </v-flex>
          </v-layout>
          <span class="mt-3">Description:</span>
          <v-text-field class="grey lighten-4 kanban-card-description pa-3 italic regular grey--text mt-3" hide-details="" multi-line=""
                        v-model="card.description"></v-text-field>
        </v-card-text>
        <v-flex xs12 class="red--text regular" v-show="card.description.length===0 || card.title.length===0">
          <span class="caption">* Please fill out all fields</span>
        </v-flex>
        <v-flex xs12>
          <v-btn icon class="text--white white--text elevation-3 right" :class="card.description.length>0 && card.title.length>0 ? 'blue' :''"
          title="save" :disabled="card.description.length===0 || card.title.length===0 " @click="addCard({card}); $emit('disableNewTask')">
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "m-kan-ban-new-inline-task",
    computed: {
      ...mapGetters(['getStatus', 'activeUser']),
      bgColor() {
        switch (this.card.taskType) {
          case 'feature':
            return 'light-blue text--lighten-3'
          case 'bug':
            return 'red darken-1 text--lighten-2'
          default:
            return 'grey lighten-1 text--lighten-4'
        }
      },
    },
    data() {
      return {
        taskTypes: ['feature', 'bug', 'other'],
        card:
          {
            title: '',
            description: '',
            status: 'todo',
            taskType: '',
            creator: '',
            fixed: false,
          },
      }
    }, methods: {
      ...mapActions(['addCard'])
    },
    created () {
      this.card.creator = this.activeUser.userName
    }
  }
</script>
