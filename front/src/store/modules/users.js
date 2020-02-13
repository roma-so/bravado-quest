import axios from 'axios'
// initial state
const state = {
  data: [],
  users: [],
  search: '',
  searching: false
}

// getters
const getters = {
  data: stateFreezed => stateFreezed.data,
  users: stateFreezed => stateFreezed.users,
  search: stateFreezed => stateFreezed.search,
  searching: stateFreezed => stateFreezed.searching,
}

// actions
const actions = {
  fetchUsers ({ commit, state }) {
    axios.get(`/users/users.json`)
      .then((response) => {
        if (response) {
          commit('SET_USERS', response)
          if (state.search) commit('FILTER_USERS', state.search)
        }
      })
  }
}

// mutations
const mutations = {
  ['SET_USERS'] (stateFreezed, users) {
    stateFreezed.users = users.data
    stateFreezed.data = users.data
  },
  ['FILTER_USERS'] (stateFreezed, search) {
    stateFreezed.search = search.toLowerCase()
    if (stateFreezed.search) {
      stateFreezed.users = stateFreezed.data.filter((user) => {
        return JSON.stringify(Object.values(user)).toLowerCase().indexOf(stateFreezed.search) > -1
      })
    } else stateFreezed.users = stateFreezed.data
    stateFreezed.searching = false
  },
  ['SET_SEARCH'] (stateFreezed, query) {
    stateFreezed.search = query
  },
  ['SET_SEARCHING'] (stateFreezed, status) {
    stateFreezed.searching = status
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
