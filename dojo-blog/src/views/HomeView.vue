<template>
  <div class="home">home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  // composation api function
  setup() {
    console.log(this) 

    // template ref
    const p = ref(null)

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ayu'
    }
    return {name, age, handleClick, p}
  }
}
</script>
