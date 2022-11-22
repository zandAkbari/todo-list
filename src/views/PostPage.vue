<template>
  <div class="post-page p-4 flex flex-row w-full flex-wrap">
    <PostBox @changePostOrder="changePostOrder" :posts="posts"/>
    <ActiontBox @actionTravel="actionTravel" :actions="actions" />

  </div>
</template>

<script>
import ActiontBox from "@/components/ActiontBox";
import PostBox from "@/components/PostBox";
import api from "../api/Post";
export default {
  name: 'PostPage',
  components: {
    ActiontBox,PostBox
  },data: function() {
    return {
      posts:[],
      actions:[],
      newActionIndex:0
    };
  },created() {
  this.getPosts()
    },

  methods: {
    getPosts(){
      api.getPosts().then((data) => {
        this.posts=data.data.splice(0, 5)
      })
    },
changePostOrder(firstIndex,secondIndex){
  this.actions.push({
    firstIndex:firstIndex,
    secondIndex:secondIndex,
    indexAction:this.newActionIndex,
    element:this.posts[firstIndex].id
  })
  this.swapArray(this.posts,firstIndex,secondIndex)
  this.newActionIndex++

},swapArray(array,firstIndex,secondIndex){
      let temporary =array[firstIndex]
      array[firstIndex]=array[secondIndex]
      array[secondIndex]=temporary
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
.post-page{

}
</style>
