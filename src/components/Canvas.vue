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
      bintree.insert(5);
      bintree.insert(10);
      bintree.insert(2);
      bintree.insert(4);
      bintree.insert(17);
  
      console.log(bintree.find(5));
      console.log(bintree);
      console.log("bin Tree created");
      console.log(bintree.countNodes());
  }
}
</script>

<style>

</style>
