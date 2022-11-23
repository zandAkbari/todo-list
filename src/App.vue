<template>
  <PostPage />

</template>

<script>

import PostPage from "@/views/PostPage";

export default {
  name: 'App',
  components: {
    PostPage,

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.list-leave-active {
  position: absolute;
}

</style>
