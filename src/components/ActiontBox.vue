<template>
  <div class="action-box">
   <ActiontItem  v-for="item in actionsReverse" :action="item" :key="item.indexAction" @actionTravel="actionTravel" />
  </div>
</template>

<script>
import ActiontItem from "./ActiontItem";
export default {
  name: 'ActionBox',
  props: {
    actions: Array
  },components: {
    ActiontItem
  },methods: {
    actionTravel(id){
      this.$emit("actionTravel", id);
    }
  } ,computed: {
    actionsReverse: function() {
      return this.actions.length ? this.actions.slice().reverse() : [];
    }}
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
