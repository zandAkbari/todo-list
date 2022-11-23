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
      //Call API to get posts data
      api.getPosts().then((data) => {
        this.posts=data.data.splice(0, 5)
      })
    },
changePostOrder(firstIndex,secondIndex){
      //Add action to stack actions and call function to change the position of posts array
  this.actions.push({
    firstIndex:firstIndex,
    secondIndex:secondIndex,
    indexAction:this.newActionIndex,
    element:this.posts[firstIndex].id
  })
  this.swapArray(this.posts,firstIndex,secondIndex)
  this.newActionIndex++

},swapArray(array,firstIndex,secondIndex){
      //Change element positions in an array
      let temporary =array[firstIndex]
      array[firstIndex]=array[secondIndex]
      array[secondIndex]=temporary
    },
    actionTravel(id){
      //Do changes from the selected action until the first action
for(let i=this.actions.length-1;i>=id;i--){
  this.swapArray(this.posts,this.actions[i].secondIndex,this.actions[i].firstIndex)
  this.newActionIndex=this.actions[i].indexAction
this.actions.pop()
}
    }
  }
}
</script>


<style scoped lang="scss">
.post-page{

}
</style>
