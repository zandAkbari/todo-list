<template>
  <div class="post-box p-4 w-full md:w-1/2">
    <div class="w-full text-left">Sortable Post List</div>
    <TransitionGroup name="list"  >
   <PostItem v-for="(item , index) in posts" :post="item" :index="index" :length="posts.length"  :key="item.id" @clickUp="clicked" @clickDown="clicked" />
    </TransitionGroup>
  </div>
</template>

<script>
import PostItem from "./PostItem"
export default {
  name: 'PostBox',
  props: {
    posts: Array
  },components: {
    PostItem
  },methods: {
    clicked(isUp,index){
      //Call emit to change post order with old and new index
if(isUp){
  this.$emit("changePostOrder", index, index - 1);
}else{
  this.$emit("changePostOrder", index, index + 1);
}
    }
  }
}
</script>


