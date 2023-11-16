<script>
export default {}
</script>
<template>
  <ul class="headWrapper">
    <li @click="$router.push('/main')">home</li>
    <li @click="$router.push('/about')">posts from api</li>
  </ul>
</template>
<style scoped>
.headWrapper {
  padding: 20px;
  color: rgb(0, 23, 62);
  background-color: bisque;
  display: flex;
  justify-content: center;
}
.headWrapper li {
  padding: 10px 30px;
}
li {
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.5s;
}
li:hover {
  transition: 0.5s;
  color: azure;
}
</style>
