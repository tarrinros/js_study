<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo
      @add-todo="addTodo"
    />
    <hr>
    <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"/>
    <p v-else>No Todos!</p>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'

  export default {
    name: 'app',
    data() {
      return {
        todos: [
          // {id: 1, title: 'Купить хлеб', completed: false},
          // {id: 2, title: 'Купить масло', completed: false},
          // {id: 3, title: 'Купить молоко', completed: false}
        ]
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json
        })
    },
    components: {
      TodoList,
      AddTodo
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    }
  }
</script>