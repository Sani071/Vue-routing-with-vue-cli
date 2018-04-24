<template>
  <div id="home" class="container  bg-dark home-wrapper">
    <div class="row">
      <div class="col-md-12 col-xs-12 col-lg-12 col-xl-12 col-sm-12">
        <div class="text-scroll-wrapper text-center">
          <h1 id="text-scroll">Hi.Welcome coding71</h1><hr>
        </div>
      </div>
    </div>
    <img src="../image/bg.png" alt="" class="full-image">
    <div class="row pic-wrapper align-items-center justify-content-center  ">
      <div class="col-lg-12 align-self-center col-sm-12 col-md-12 col-xs-12 img-wrapper">
        <img src="../image/mypic.png" alt="" class="mypic">

      </div>
      <div class="my-title text-center">
        <h2>RS-Sani Ahmed</h2>
        <h6>Fullstack-Web Developer</h6>
        <p>Dhaka,Bangladesh</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  };
</script>

<style scoped>
  .full-image {
    min-height: 500px;
    position: absolute;
    opacity: 0.09;
  }

  .text-scroll-wrapper {
    margin-top: 100px;
  }

  #text-scroll {
    font-style: italic;
    font-size: 25px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    animation: test 3.8s steps(38);
    overflow: hidden;
    white-space: nowrap;
    width: 19ch;
    border-right: 2px solid rgb(207, 190, 190);
    color: white;
  }

  @keyframes test {
    0% {
      width: 0ch;
    }
    100% {
      width: 19ch;
    }
  }

  .pic-wrapper {
    /* width: 100%; */
    height: 500px;
    margin-top: 0;
  }

  .mypic {
    border: 2px solid gray;
    border-radius: 50%;
    display: block;
    margin: -70px auto;
    width: 200px;
    height: 200px;
  }

  .my-title {
    margin-top: -170px;
    color: rgb(230, 185, 195);
    font-weight: 700;
    font-family: fantasy;
    text-shadow: 1px 1px 1px rgb(109, 93, 93);
  }
</style>
