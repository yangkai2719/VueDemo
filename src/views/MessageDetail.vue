<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages" :key="m,id">
        <router-link :to="`/home/message/detail/${m.id}?id=${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view/>
  </div>
</template>

<script>
        const allMessageDetails = [
          {id: 1, title: 'message001',content:'message content 001'},
          {id: 3, title: 'message003',content:'message content 003'},
          {id: 5, title: 'message005',content:'message content 005'},
        ]
   export default{
          data(){
            return{
              messageDetail:{}
            }
          },
     mounted(){
       this.showUI(this.$r)
     },
    methods: {
      showUI(route){
        const id = route.params.id * 1
        const messageDetail = allMessageDetails.find(md=>md.id===id)
         this.messageDetail=messagDetail
      },
    }
  }
</script>


<style>

</style>

