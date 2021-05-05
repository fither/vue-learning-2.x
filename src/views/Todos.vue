<template>
  <div id="todos">
    <TodosAdd/>
    <TodosFilter/>
    <TodosInfo/>
    <TodosPreview/>
  </div>
</template>

<script>
import TodosAdd from '@/components/Todos/TodosAdd';
import TodosFilter from '@/components/Todos/TodosFilter';
import TodosPreview from '@/components/Todos/TodosPreview';
import TodosInfo from '@/components/Todos/TodosInfo';

export default {
  name: 'todos',
  components: {
    TodosAdd,
    TodosFilter,
    TodosPreview,
    TodosInfo
  }
}
</script>

<style scoped>


</style>