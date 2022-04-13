<template>
  <div class="home">home</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
      <PostList :posts="posts" />
  </div>
  <div v-else>
    Loading...
  </div>

</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'


export default {
  name: 'HomeView',

  components: { PostList },


  // composation api function
  setup() {
    const posts = ref([])
    const error = ref(null)

    // fetch the data
    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data avaiable')
        }
        posts.value = await data.json()
      }
      catch( err ) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, error }
    }
}
</script>
