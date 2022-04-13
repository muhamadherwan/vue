<template>
  <div class="home">home</div>
  <h2>Computed Value</h2>
  <input type="text" v-model="search">
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
  <button @click="handleClick">Stop watching</button>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { watchEffect } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  // composation api function
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'daigo', 'ezzi'])

    const stopWatch = watch(search, () => {
      console.log('watch fuction run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect fuction run', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
    return { names, search, matchingNames, handleClick }
  }
}
</script>
