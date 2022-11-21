<template>
  <div class="post-item">
<div>{{post.title}}</div>
    <button class="up-arrow" v-if="!isFirst" @click="click(true)"> up </button>
    <button class="down-arrow" v-if="!isLast" @click="click(false)"> down</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    post: Object,
    length:Number,
    index:Number
  },methods: {
    click(isUp){
      if(isUp){
        this.$emit("clickUp",isUp, this.index);
      }else {
        this.$emit("clickDown",isUp, this.index);
      }

    },

  }, computed: {
    isFirst: function() {
      return this.index > 0 ? false : true;
    },
    isLast: function() {
      return this.index < this.length-1 ? false : true;
    },
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
