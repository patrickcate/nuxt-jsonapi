<script setup>
import { useNuxtApp, useAsyncData } from '#app'

const { $jsonApi } = useNuxtApp()

const { data: articles } = await useAsyncData(() => $jsonApi.get('/article'), {
  transform: ({ data }) => data,
})
</script>

<template>
  <ul v-if="articles.length">
    <li v-for="article in articles" :key="article.id">
      (Composition API) {{ article.title }}
    </li>
  </ul>
</template>
