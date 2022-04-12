<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>

  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Promotion!</h1>
      <p>this is a description!</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links2>
        <a href="#">Modal2 link</a>
      </template>
      <h1>Modal2</h1>
      <p>this is modal 2</p>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">open modal (alt)</button>&nbsp;
  <button @click="toggleModal2">open modal 2</button>
</template>

<script>
// import the modal component
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  // export the component
  components: { Modal },
  data() {
    return {
      title: "My first vue app",
      // header: "Sign Up!",
      // text: "this is a description.",
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
