<script setup>
import { RouterView } from "vue-router";

// Components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SideCart from "./components/SideCart.vue";
</script>

<template>
  <Header />
  <router-view />
  <SideCart />
  <Footer />
</template>

<style>
body {
  background: #f7f1f1;
}
</style>
