<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{messagesDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message content 001'},
    {id: 3, title: 'message003', content: 'message content 003'},
    {id: 5, title: 'message005', content: 'message content 005'},
  ]
  export default{
    data(){
      return {
        messageDetail: {}
      }
    },
    mounted(){
      this.showUI(this.$route)
    },
    watch: {
      $route(value){
        this.showUI(value)
      }
    },
    methods: {
      showUI(route){
        const id = route.params.id * 1
        const messageDetail = allMessageDetails.find(md => md.id === id)
        this.messageDetail = messageDetail
      },
    }
  }
</script>


<style>

</style>

