'use strict'
import http from '../components/common/http/index'


export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  }
}

export const actions = {
  add ({commit}, info) {
    return http.post('company-api/api/employee/unchk/user/queryUserDetail', info).then((res) => {
      if (res.data && res.data.status === 20) {
        commit('add',res.data.content)
      }
      return res
    })
  }
}
