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
if(isUp){
  this.$emit("changePostOrder", index, index - 1);
}else{
  this.$emit("changePostOrder", index, index + 1);
}
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
<style lang="scss">



</style>
