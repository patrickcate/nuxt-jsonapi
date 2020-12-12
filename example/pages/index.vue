<template>
  <div class="container">
    <h1 class="text-center">Nuxt JSON:API Module</h1>
    <img
      src="/nuxt-jsonapi-logo.svg"
      alt="Nuxt JSON:API logo"
      width="400"
      height="104"
      class="logo center"
    />
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

<style>
.logo {
  display: block;
  max-width: 100%;
  height: auto;
}

.container {
  font-family: sans-serif;
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
