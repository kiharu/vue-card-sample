import _ from 'lodash'

// initial state
const state = {
  users: [
    {id: 1, name: 'test1', twitter: 'tw1', intro: 'intro1'},
    {id: 2, name: 'test2', twitter: 'tw2', intro: 'intro2'}
  ],
  contents: [
    {
      user: {id: 1},
      article: {text: 'content1'}
    },
    {
      user: {id: 2},
      article: {text: 'content2'}
    },
    {
      user: {id: 1},
      article: {text: 'content3'}
    }
  ]
}

// mutations
const mutations = {
  DELETE_USER (state, user) {
    // 配列の複数削除は後方から行う
    _.forEachRight(state.contents, (content, i) => {
      if (content.user.id === user.id) {
        state.contents.splice(i, 1)
      }
    })

    // マスタデータを一番最後に消すようにする(重要)
    state.users.splice(state.users.indexOf(user), 1)
  },

  ADD_USER (state) {
    let maxId = 1
    if (state.users.length) {
      maxId = _.maxBy(state.users, (user) => { return user.id }).id + 1
    }

    state.users.push({
      id: maxId,
      name: '',
      twitter: ''
    })
  },

  UPDATE_NAME (state, user, name) {
    user.name = name
  },

  UPDATE_TWITTER (state, user, twitter) {
    user.twitter = twitter
  },

  UPDATE_INTRO (state, user, intro) {
    user.intro = intro
  },

  RECEIVE_USERS (state, users) {
    state.users = users
  }

}

export default {
  state,
  mutations
}
