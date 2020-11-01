<template>
  <canvas>
  </canvas>
</template>

<script>
import {BinTree} from "../model/BinTree"

export default {
  name: 'Canvas',
  components: {
  },
  created(){

      const bintree = new BinTree();
      bintree.add(5);
      bintree.add(10);
      bintree.add(2);
      bintree.add(4);
      bintree.add(4);
      console.log(bintree)
      console.log("bin Tree created");
  }
}
</script>

<style>

</style>
