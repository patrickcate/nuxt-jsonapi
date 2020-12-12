<template>
  <div>
    <h1>Nuxt JSON:API Module</h1>
    <ul v-if="articles.length">
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  async fetch() {
    this.articles = await this.$jsonApi.get('/article').then(articles => {
      return articles.data
    })
  }
}
</script>
