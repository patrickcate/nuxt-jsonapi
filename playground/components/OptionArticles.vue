<script>
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'OptionArticles',
  async asyncData({ $jsonApi }) {
    const { data: articles } = await $jsonApi.get('/article')

    return {
      articles,
    }
  },
})
</script>

<template>
  <ul v-if="articles.length">
    <li v-for="article in articles" :key="article.id">
      (Options API) {{ article.title }}
    </li>
  </ul>
</template>
