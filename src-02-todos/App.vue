
<template>
  <div class="todo-container">
    <div class="todo-container">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos"
                  :deleteCompleteTodos="deleteCompleteTodo"
                  :selectAllTodos="selectAllTodos"/>
    </div>
  </div>


</template>

<script>
  import Header from './components/HelloWorld'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './utils/storageUtils'

  export default {
    data(){
      return {
        todos: storageUtils.readTodos()
      }
    },




    methods: {
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index, 1)
      },
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos(isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)
      }

    },
    Watch: {
      todos: {
        deep: true,
        handler: storageUtils.saveTodos
      }
    },
    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer,
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    bordeer-radius: 5px;
  }
</style>
