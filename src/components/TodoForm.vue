<template>
  <form @submit.prevent="addNewTodoItem">
    <input type="text" v-model="newTodoItem" style="border: 2px solid grey" />
    <button type="submit" style="margin-left: 15px">Add New Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addNewTodoItem() {
      if (this.newTodoItem !== "") {
        this.$store.dispatch("addNewTodo", this.newTodoItem);
        this.newTodoItem = "";
      }
    },
  },
};
</script>
