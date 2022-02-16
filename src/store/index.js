import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        title: "JavaScript",
        completed: false,
      },
      {
        title: "Typescript",
        completed: false,
      },
    ],
    isEditingTodo: false,
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed === true).length;
    },
    pendingTodos(state) {
      return state.todos.filter((todo) => todo.completed === false).length;
    },
  },
  mutations: {
    mutateNewTodo(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
    mutateDeleteTodo(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    mutateToggleTodoStatus(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },
  actions: {
    addNewTodo({ commit }, todoItem) {
      commit("mutateNewTodo", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("mutateDeleteTodo", todoItem);
    },
    toggleTodoStatus({ commit }, todoItem) {
      commit("mutateToggleTodoStatus", todoItem);
    },
  },
});
