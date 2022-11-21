<template>
  <div class="action-item">
   <div>
     {{action.firstIndex}}|  {{action.secondIndex}} |{{action.element}}
     <button @click="travel">time travel</button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    action: []
  },methods: {
    travel(){
      this.$emit("actionTravel", this.action.indexAction);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
