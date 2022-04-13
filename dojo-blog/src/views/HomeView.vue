<template>
  <div class="home">home</div>
  <h2>Ref</h2>
  <p>{{ personOne.name }} - {{ personOne.age }}</p>
  <button @click="updatePersonOne">Update person one</button>
  <h2>Reactive</h2>
  <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
  <button @click="updatePersonTwo">Update person two</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  // composation api function
  setup() {
    const personOne = ref({ name: 'mario', age: 30})

    const personTwo = reactive({ name: 'ayu', age: 40})

    const updatePersonOne = () => {
      personOne.value.age = 40
    }

    const updatePersonTwo = () => {
      personTwo.age = 50
    }

    return { personOne, updatePersonOne, personTwo, updatePersonTwo }
  }
}
</script>
