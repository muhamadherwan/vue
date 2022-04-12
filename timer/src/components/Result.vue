<template>
  <p>Reaction: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            rank: null
        }
    },

    mounted() {
        if (this.score < 250 ) {
            this.rank = "Cheetah!"
        } else if ( this.score < 400 ) {
            this.rank = "Rabbit!"
        } else {
            this.rank = "Turtle!"
        }
    }
}
</script>

<style>
p.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>