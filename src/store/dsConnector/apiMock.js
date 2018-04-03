export default {
  users: {
    'colin': {
      _id: 1,
      firstName: 'Colin',
      lastName: 'Conjurer',
      img: '/static/img/avatars/avatar-male-1.png',
    },
    'jess': {
      _id: 2,
      firstName: 'Jessi',
      lastName: 'James',
      img: '/static/img/avatars/avatar-female-1.png',
    },
    'heroHunter': {
      _id: 3,
      firstName: 'Hero',
      lastName: 'Hunter',
      img: '/static/img/avatars/hero.png',
    },
    'love': {
      _id: 4,
      firstName: 'Ada',
      lastName: 'Lovelace',
      img: '/static/img/avatars/avatar-female-2.png',
    },
    'justin': {
      _id: 5,
      firstName: 'Justin',
      lastName: 'Timber',
      img: '/static/img/avatars/avatar-male-2.png',
    },
  },
  kanBanBoards: {
    'kanban': {
      abbr: 'KB',
      kanBanItems: [
        {
          _id: 0,
          title: 'Create Kanban Board Architecure',
          description: 'Please architect the Board nicely,because a good architecture is so important for maintenance and extendability. It will save your boss a lot of money if done well.',
          status: 'todo',
          subTasks: {
            implement: {
              responsible: '',
              name: 'developer',
              status: 'done',
            },
            test: {
              responsible: '',
              name: 'tester',
              status: 'due',
            },
            document: {
              responsible: '',
              name: 'writer',
              status: '',
            },
            review: {
              responsible: '',
              name: 'reviewer',
              status: '',
            },
          },
          creator: 'Jessi James',
          order: 0,
          fixed: false,
          taskType: 'feature',
        },
        {
          _id: 1,
          title: 'Create Kanban Board Card Items',
          description: 'some description',
          status: 'todo',
          subTasks: {
            implement: {
              responsible: '',
              name: 'developer',
              status: 'done',
            },
            test: {
              responsible: '',
              name: 'tester',
              status: 'due',
            },
            document: {
              responsible: '',
              name: 'writer',
              status: '',
            },
            review: {
              responsible: '',
              name: 'reviewer',
              status: '',
            },
          },
          creator: 'Colin Egglesfield',
          order: 1,
          fixed: false,
          taskType: 'feature',
        }, {
          _id: 2,
          title: 'Create Kanban Board User Site',
          description: 'some description',
          status: 'inProgress',
          subTasks: {
            implement: {
              responsible: '',
              name: 'developer',
              status: 'done',
            },
            test: {
              responsible: '',
              name: 'tester',
              status: 'due',
            },
            document: {
              responsible: '',
              name: 'writer',
              status: '',
            },
            review: {
              responsible: '',
              name: 'reviewer',
              status: '',
            },
          },
          creator: 'Colin Egglesfield',
          order: 2,
          fixed: false,
          taskType: 'feature',
        }, {
          _id: 3,
          title: 'Fix the crazy appearing bug',
          description: 'some description',
          status: 'inProgress',
          subTasks: {
            implement: {
              responsible: '',
              name: 'developer',
              status: 'done',
            },
            test: {
              responsible: '',
              name: 'tester',
              status: 'due',
            },
            document: {
              responsible: '',
              name: 'writer',
              status: '',
            },
            review: {
              responsible: '',
              name: 'reviewer',
              status: '',
            },
          },
          creator: 'Jessi James',
          order: 3,
          fixed: false,
          taskType: 'bug',
        },
        {
          _id: 5,
          title: 'Design Board',
          description: 'some description',
          status: 'todo',
          subTasks: {
            implement: {
              responsible: '',
              name: 'developer',
              status: 'done',
            },
            test: {
              responsible: '',
              name: 'tester',
              status: 'due',
            },
            document: {
              responsible: '',
              name: 'writer',
              writer: '',
              status: '',
            },
            review: {
              responsible: '',
              name: 'reviewer',
              reviewer: '',
              status: '',
            },
          },
          creator: 'Jessi James',
          order: 5,
          fixed: false,
          taskType: 'other',
        },
      ],
    },
  },


}
