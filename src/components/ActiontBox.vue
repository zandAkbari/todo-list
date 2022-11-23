<template>
  <div class="action-box w-full md:w-1/2 p-4 ">
    <div class="action-header flex items-center p-2">
    List of actions comitted
    </div>
    <TransitionGroup name="list"  >
   <ActiontItem  v-for="item in actionsReverse" :action="item" :key="item.indexAction" @actionTravel="actionTravel" />
    </TransitionGroup>
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
      //Reverse actions list to show stack
      return this.actions.length ? this.actions.slice().reverse() : [];
    }}
}
</script>


<style scoped lang="scss">
.action-header{
background: white;
  height: 4rem;
  border-radius: 1rem;
}
</style>
