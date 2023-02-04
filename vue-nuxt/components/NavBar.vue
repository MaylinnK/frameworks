<template>
  <div class="navbar">
    <nav>
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/RandomNumberPage">Random Number Page</nuxt-link>
    </nav>
  </div>
</template>
<style scoped>
.link {
  font-family: 'Montserrat', sans-serif;
  font-size: 19px;
  color: whitesmoke;
  text-decoration: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #39b982;
  display: flex;
  justify-content: center;
}

.navbar nav {
  justify-content: space-between;
  width: 20%;
  display: flex;
}

.navbar .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.navbar a {
  display: inline-block;
}

.navbar a:hover {
  color: darkgrey;
  transition: 200ms
}
</style>
