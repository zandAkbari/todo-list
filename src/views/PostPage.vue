<template>
  <div class="post-page">
    <ActiontBox @actionTravel="actionTravel" :actions="actions" />
    <PostBox @changePostOrder="changePostOrder" :posts="posts"/>
  </div>
</template>

<script>
import ActiontBox from "@/components/ActiontBox";
import PostBox from "@/components/PostBox";
export default {
  name: 'PostPage',
  props: {
    msg: String
  }, components: {
    ActiontBox,PostBox
  },data: function() {
    return {
      posts:[],
      actions:[],
      newActionIndex:0
    };
  },methods: {
changePostOrder(firstIndex,secondIndex){
  this.actions.push({
    firstIndex:firstIndex,
    secondIndex:secondIndex,
    indexAction:this.newActionIndex,
    element:this.posts[firstIndex]
  })
  this.swapArray(this.posts,firstIndex,secondIndex)
  this.newActionIndex++

},swapArray(array,firstIndex,secondIndex){
      let temporary =array[firstIndex]
      array[secondIndex]=array[firstIndex]
      array[firstIndex]=temporary
    },
    actionTravel(id){
for(let i=this.actions.length-1;i>=id;i--){
  this.swapArray(this.posts,this.actions[i].secondIndex,this.actions[i].firstIndex)
  this.newActionIndex=this.actions[i].indexAction
this.actions.pop()
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
