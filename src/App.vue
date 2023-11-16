<script setup>
import { RouterLink, RouterView } from "vue-router"
import HeaderTim from "@/components/TimHeader.vue"
import FooterTim from "@/components/TimFooter.vue"
</script>

<template>
  <HeaderTim />
  <RouterView />
  <FooterTim />
</template>
