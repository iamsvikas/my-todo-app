<template>
  <div class="container">
    <div id="app">
      <h1>My Todos</h1>
      <h3>Completed: {{ completedTodos }}</h3>
      <h3>Pending: {{ pendingTodos }}</h3>
      <TodoForm />
      <TodosList />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodosList from "./components/TodosList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  components: {
    TodosList,
    TodoForm,
  },
  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-shadow: 5px 10px 100px #999999;
  border: 2px solid rgb(230, 222, 222);
  padding: 10px 0 40px 0;
}
</style>
