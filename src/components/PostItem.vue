<template>
  <div class="post-item w-full  p-2 mt-2 justify-between flex flex-row">
    <div class="p-2 flex items-center ">
     {{post.title}}
    </div>
    <div class="p-2 flex items-center h-100">
      <div class="flex flex-col">
      <i class="up-arrow" v-if="!isFirst" @click="click(true)"></i>
      <i class="down-arrow" v-if="!isLast" @click="click(false)"></i>
     </div>
    </div>
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
.post-item{
  background: white;
  border-radius: 1rem;
  min-height: 4rem;
}
.up-arrow {
  border: solid #4a30c1;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom: .25rem;
}

.down-arrow {
  border: solid #4a30c1;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: .25rem;
}
</style>
