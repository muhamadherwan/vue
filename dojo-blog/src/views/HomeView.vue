<template>
  <div class="home">home</div>
  <h2>Computed Value</h2>
  <input type="text" v-model="search">
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  // composation api function
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'daigo', 'ezzi'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    return { names, search, matchingNames }
  }
}
</script>
