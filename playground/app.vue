<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const { $jsonApi } = useNuxtApp()

const baseUrl = ref($jsonApi.axios.defaults.baseURL)
</script>

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

    <h2>Base URL: {{ baseUrl }}</h2>

    <h2>Options API</h2>
    <OptionArticles />

    <h2>Composition API</h2>
    <CompositionArticles />
  </div>
</template>

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
