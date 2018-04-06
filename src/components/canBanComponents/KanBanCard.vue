<template>
      <v-card class="ma-2 move" @click="setCard({obj:item, prop: 'fixed', val: !item.fixed})">
        <v-layout class="kanban-card">
          <v-flex :class="bgColor" class="mw-10 card-color-indicator"></v-flex>
          <v-flex>
            <v-card-title class="grey pa-0 grey--text text--darken-2 lighten-2 pl-3">
              <span>{{item.title}}</span>
              <v-spacer></v-spacer>
              <span class="px-2 grey--text" :class="bgColor">{{boardAbbr +'-' +item.id}}</span>
            </v-card-title>
            <v-card-text :class="item.status === 'done' ? 'grey': ''">
              <v-container v-show="item.status !== 'done'" class="grey lighten-4 kanban-card-description" v-html="item.description"></v-container>
              <v-container v-show="item.status === 'inProgress'" class="no-details">
                <m-sub-task v-for="(subTask, key) in item.subTasks" :key="key" :subTask="subTask" :name="key" @updateCard="putCard({card: item})" :itemId="item.id"></m-sub-task>
              </v-container>
              <v-icon class="right trashBtn" title="delete card" @click="deleteCard({id: item.id})">delete</v-icon>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import MSubTask from "./subTask"
  export default {
    components: {MSubTask},
    name: "m-kan-ban-card",
    props: {
      item: {
        type: Object,
        required: true,
      },
      boardAbbr: {
        type: String,
        required: true
      }
    },
    computed: {
      bgColor() {
        switch (this.item.taskType) {
          case 'feature':
            return 'light-blue text--lighten-3'
          case 'bug':
            return 'red darken-1 text--lighten-2'
          default:
            return 'grey lighten-1 text--lighten-4'
        }
      },
    },
    methods: {
      ...mapActions(['setCard', 'putCard', 'deleteCard']),
    },
  }
</script>

