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
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',

  components: { PostList },

  // composation api function
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>
