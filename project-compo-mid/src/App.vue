<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex justify-between items-center text-white font-mono mb-2 bg-red-800">
      <div class="flex items-center font-mono">
        <img
          alt="Vue logo"
          src="https://logolook.net/wp-content/uploads/2021/11/Hogwarts-Logo.png"
          class="mt-5 mb-5 ml-20 h-20 w-70"
        />
        <p class="font-bold">HOGWARTS MAGIC AWAKENED</p>
      </div>
      <div class="space-x-10 mr-20">
        <RouterLink to="/" class="font-black transition-colors duration-300 hover:text-yellow-500"
          >Student</RouterLink
        >
        <RouterLink
          to="/about "
          class="font-black transition-colors duration-300 hover:text-yellow-500"
          >Advisor</RouterLink
        >
        <a
          href="http://localhost:3006/students"
          class="font-black transition-colors duration-300 hover:text-yellow-500"
          >dbfile</a
        >
      </div>
    </nav>
    <RouterView />
  </header>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
