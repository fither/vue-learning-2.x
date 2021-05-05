import axios from 'axios';

const state = {
  todos: [],
  todosURL: 'https://jsonplaceholder.typicode.com/todos'
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(state.todosURL);
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(state.todosURL, { title, completed: false });
    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(state.todosURL + `/${id}`);
    commit('removeTodo', id);
  },
  async filterTodos({ commit }, event) {
    const limit = parseInt(event.target.value);
    const response = await axios.get(state.todosURL + `?_limit=${limit}`);
    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(state.todosURL + `/${updatedTodo.id}`);
    commit('updateTodo', updatedTodo);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo)),
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    let findedTodo = state.todos.find(todo => todo.id === updatedTodo.id)
    if (findedTodo) {
      findedTodo.completed = !findedTodo.completed;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}