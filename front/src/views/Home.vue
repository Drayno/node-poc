<template>

  <div class="home">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">CRUD Clientes</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


  </b-navbar>
</div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "home",
};
</script>
