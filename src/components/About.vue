<template>
  <div id="About" class="py-5 container">
    <h4 class="head">Thanks for wanting to know about me</h4><hr>
    <div class="row about-wrapper">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../image/web2.png" alt="" class="img-responsive mx-3 about-img card-img-top">
            <h3 class="card-title text-center lead">Web Designer</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../image/web1.png" alt="" class="img-responsive mx-3 about-img card-img-top">
            <h3 class="card-title text-center lead">Web Developer</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../image/web3.jpg" alt="" class="img-responsive mx-3 about-img card-img-top">
            <h3 class="card-title text-center lead"> Full Stack Web Developer</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  };
</script>

<style scoped>
.head{
  margin-top:25px;
}
  .about-img {
    border: 2px solid gray;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .card {
    background: rgb(245, 231, 231);
    height: 350px;
    text-align: center;
  }
</style>

