<template>
  <div
    style="
      width: 500px;
      margin: 15px auto;
      display: flex;
      justify-content: space-between;
    "
  >
    <span
      :class="{ completed: todo.completed }"
      @click="toggleTodoStatus(todo)"
      >{{ todo.title }}</span
    >
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["todo"],

  methods: {
    ...mapActions({
      deleteTodo: "deleteTodo",
      toggleTodoStatus: "toggleTodoStatus",
      editTodo: "editTodo",
    }),
    // deleteTodo() {
    //   this.$store.dispatch("deleteTodo", this.todo);
    // },
    // toggleTodoStatus() {
    //   this.$store.dispatch("toggleTodoStatus", this.todo);
    // },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
