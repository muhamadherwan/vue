<template>
<div class="container">
<Header title="Todo List"
  @toggle-add-task="toggleAddTask" 
  :showAddTask = "showAddTask"
/>
<div v-show="showAddTask">
  <AddTask @add-task="addTask" />
</div>

<Tasks 
  :tasks="tasks" 
  @delete-task="deleteTask" 
  @toggle-reminder="toggleReminder" />
</div>

</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },

  data() {
    return {
      tasks:[],
      showAddTask : false
    }
  },

  methods: {
    // deleteTask(id) {
    //   if (confirm('Remove this tasks?')) {
    //       this.tasks = this.tasks.filter( (task) => task.id !== id )     
    //   }
    // },
    async deleteTask(id) {
      if (confirm('Remove this tasks?')) {
        const res = await fetch(`api/tasks/${id}`,
        {
          method: 'DELETE',
        })

        res.status === 200 ? 
        ( this.tasks = this.tasks.filter( (task) => task.id !== id ) ) :
        alert('Error deleting task')
               
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map( (task) => 
        task.id === id ? { ...task, reminder: !task.reminder }
        : task
      )
    },

    // addTask(newTask) {
    //   this.tasks = [...this.tasks, newTask]
    // },

    async addTask(newTask) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },


    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },

    // fetch data from json server
    async fetchTasks() {
      const res = await fetch('api/tasks')
      
      const data = await res.json()

      return data
    },
    // fetch single task from json server
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      
      const data = await res.json()

      return data
    },
  },

  // livecycle methods
  async created() {
    this.tasks = await this.fetchTasks()
    // this.tasks = [
    //   { id:1, text: 'Doctor Appointment', day: 'April 14 at 2:30pm', reminder: true },
    //   { id:2, text: 'Teacher Appointment', day: 'April 14 at 4:30pm', reminder: true },
    //   { id:3, text: 'Shopping', day: 'April 15 at 2:30pm', reminder: false }
    // ]
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
