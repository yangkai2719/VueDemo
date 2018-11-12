<template>
  <div>
    <mt-button style="..." type="primary" @click="hint">测试mint-ui</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  export default {


    methods: {

      hint(){
        Toast({
          message:'提示',
          position:'bottom',
          duration:5000
        });
      }

    }
  }
  </script>
<style>
</style>



