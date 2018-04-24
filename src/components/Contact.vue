<template>
  <div class="hello py-5 container">
    <h4 class="head-text text-center">Thanks for wanting to contact with me</h4>
    <div class="btn-wrapper text-center my-3">
      <button class="btn btn-success mx-5 btn-lg my-3">Call me</button>
      <button class="btn btn-success btn-lg">Hire me</button>
    </div>
    <div class="row social-area">
      <div class="col-sm-6 col-md-4">
        <p>Follow me in facebook</p>
        <i class="fa fa-facebook" aria-hidden="true"></i>



      </div>
      <div class="col-sm-6 col-md-4">
        <p>You can also see me on Twitter</p><i class="fa fa-twitter" aria-hidden="true"></i></div>
      <div class="col-sm-6 col-md-4">
        <p>You can also see in Linkedin</p>
        <a href=https://www.linkedin.com/in/md-sani-ahmed-210726161/><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.head-text {
  margin-top: 25px;
}

.fa {
  font-size: 80px;
  color: rgb(43, 180, 180);
  cursor: pointer;
  text-align: center;
}
</style>

