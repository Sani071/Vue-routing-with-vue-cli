<template>
  <div id="service" class="main container">
    <h4>We have provided web related service</h4>
    <p>We have provided updated web technology that's are very demandfull tech in nowdays</p>
    <h2 class="text-center">Our services</h2>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <div class="card">
          <div class="card-body"><img src="../image/web5.jpg" alt="" class="card-img-top">
            <p class="lead my-3">Web designer</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card">
          <div class="card-body"><img src="../image/responsive.jpg" alt="" class="card-img-top my-3">
            <p class="lead">Responsive Web Design</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card">
          <div class="card-body"><img src="../image/web4.png" alt="" class="card-img-top my-3">
            <p class="lead">Web developing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Service"
  };
</script>

<style scoped>
  .main {
    margin-top: 70px;
  }

  .card {
    background: rgb(245, 231, 231);
    height: 400px;
    text-align: center;
    margin-bottom: 15px;
  }

  .card img {
    border-radius: 50%;
    height: 250px;
  }
</style>
