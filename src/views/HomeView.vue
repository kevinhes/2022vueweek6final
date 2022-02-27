<template>
  <div id="nav">
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/carts">購物車</router-link> |
      <router-link to="/dashboardlogin">管理員</router-link> |
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
