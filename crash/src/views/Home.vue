<template>
  <AddTask @add-task="addTask" v-show="showAddTask" />

<Tasks 
  :tasks="tasks" 
  @delete-task="deleteTask" 
  @toggle-reminder="toggleReminder" />

</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Home',

    props: {
        showAddTask: Boolean,
    },

    components: {
        Tasks,
        AddTask,
    },

    data() {
        return {
            tasks:[]
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
    
    // toggleReminder(id) {
    //   this.tasks = this.tasks.map( (task) => 
    //     task.id === id ? { ...task, reminder: !task.reminder }
    //     : task
    //   )
    // },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map( (task) => 
        task.id === id ? { ...task, reminder: data.reminder }
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

</style>