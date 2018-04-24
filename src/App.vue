<template>
  <div id="app" class="container">
    <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <router-link to="/"><a class="navbar-brand" href="#">Coding <span><img src="./image/logo.jpeg" width="30" height="30" alt=""></span>.com</a></router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/About">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Service">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="container text-center">
      <h3>Thanks for visiting our Coding71</h3>
      <p>All &copy;copyright reserved coding71</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>
