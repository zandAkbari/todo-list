<template>
  <div class="action-item">
   <div class="flex items-center justify-between p-2">
     <div class="p-2 flex items-center">
      move post {{action.element}} from index {{action.firstIndex+1}} to index  {{action.secondIndex+1}}
     </div>

     <button class="time-travel p-2 flex items-center" @click="travel">
       time travel
     </button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    action: Object
  },methods: {
    travel(){
      this.$emit("actionTravel", this.action.indexAction);
    }
  }
}
</script>


<style scoped lang="scss">
.action-item{
  background: white;
  min-height: 3rem;
  margin-top:.1rem ;
  border-radius: 1rem;
}
.time-travel{
  background: #09c693;
  height: 1.5rem;
  min-width: 6rem;
}
</style>
