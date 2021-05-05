<template>
  <div class="todos-preview">
    <h3>Todos</h3>
    <div class="todos">
      <div 
        @dblclick="updateTodo(todo)" 
        v-for="(todo, index) in allTodos" :key="index" 
        class="todo" 
        :class="{completed: todo.completed, incompleted: !todo.completed}"
      >
        <span class="no-select">{{ todo.title }}</span>
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodosPreview',
  computed: {
    ...mapGetters(['allTodos'])
  },
  methods: {
    ...mapActions(['deleteTodo', 'fetchTodos', 'updateTodo'])
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background-color: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .todo.completed {
    background-color: #41b883;
  }

  .todo.incompleted {
    background-color: #35495e;
    color: #fff;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #FFF;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>