<template>
  <div>
    <h2 v-if="!repoName">LOADING...</h2>
    <p v-else>
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        repoName: '',
        repoUrl: ''
      }
    },
    async mounted(){
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'

      try {
        const response = await axios.get(url)
        const result = response.data
        const mostRepo = result.items[0]

        this.repoName = mostRepo.name
        this.repoUrl = mostRepo.html_url
      } catch (e) {
        alert('请求出错了333....')
      }
    }
  }
</script>

<style>

</style>



