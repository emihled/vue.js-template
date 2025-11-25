import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      students: [
        {id: 1, name: "Emihle", studentNumber: 324},
        {id: 2, name: "Ty", studentNumber: 34}
      ]
    }
  },
  getters: {
    getStudents (state) {
      return state.students
    }
  },
  mutations: {
    
  },
  actions: {
    
  }
})

export default store
