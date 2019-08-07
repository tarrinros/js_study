<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
      v-else-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"/>
    <p v-else>No Todos!</p>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'
  import Loader from '@/components/Loader'

  export default {
    name: 'app',
    data() {
      return {
        loading: true,
        todos: [
          // {id: 1, title: 'Купить хлеб', completed: false},
          // {id: 2, title: 'Купить масло', completed: false},
          // {id: 3, title: 'Купить молоко', completed: false}
        ],
        filter: 'all'
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 2000)
        })
    },
    // watch: {
    //   filter(value) {
    //     console.log(value)
    //   }
    // },


    components: {
      TodoList,
      AddTodo,
      Loader
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo(todo) {
        this.todos.push(todo)
      },
    }
  }
</script>