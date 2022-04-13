<template>
  <div class="home">home</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <button @click="age++">Add age</button>
  <button @click="handleClick">Click me</button>
  <input type="text" v-model="name">

</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  // composation api function
  setup() {

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'Ayu'
      age.value = 41
    }

    return {name, age, handleClick }
  }
}
</script>
