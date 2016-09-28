<template>
  <div id="background">
    <div class="img img1"></div>
  </div>
  <div class="container full-height">
    <div id="form-wrapper">
      <div class="form">
        <div class="page-header">
          <h4 class="text-center">用户登录</h4>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><i class="ion-ios-person"></i></span>
            <input type="name" class="form-control" name="name" id="name" value="" placeholder="用户名">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><i class="ion-ios-locked-outline"></i></span>
            <input type="password" class="form-control" name="password" id="password" placeholder="密码">
          </div>
        </div>
        <div class="form-group">
          <label class="switch">
            <input type="checkbox" id="mike" value="Mike" name="remember" v-model="remember"> <i></i>记住登录
          </label>
          <a href="" class="pull-right">忘记密码？</a>
        </div>
        <div class="form-group">
          <button type="button" @click="login" class="btn btn-block btn-success">登 录</button>
        </div>
        <div class="form-group">
          <div class="clearfix">
            <a href="" class="pull-right text-light">POWERED BY WEase.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        remember: 'checked',
      };
    },
    methods: {
      login() {
        console.log(this.remember);
      },
    },
    ready() {
      console.log(1234);
    },
    compiled() {
      console.log(this.remember);
    },
  };
</script>

<style>
  html {
    height: 100%;
    font-size: 1em;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 14px;
    font-family: "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
  }

  #background {
    position: absolute;
    background: #212121;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .img.img1 {
    background: url("assets/bg.jpg");
    width: 100%;
    height: 100%;
    background-size: cover !important;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
  }

  .container.full-height {

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  #form-wrapper {
    font-size: 1rem;
  }

  div.form {
    background-color: #eee;
    position: relative;
    padding: 2rem;
    text-align: center;
    opacity: 0.7;
    width: 20rem;
    border-radius: 0.1rem;
  }

  .form-group {
    margin: 0.2rem auto;
    position: relative;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    opacity: 1;
    filter: alpha(opacity=100);
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  }

  .page-header {
    width: 70%;
    margin: 1rem auto;
  }

  h2.text-center {

  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "Helvetica Neue", Helvetica, "Lantinghei SC", "Hiragino Sans GB", "PingFang HK", "Source Code Pro for Powerline";
    font-weight: 200;
    line-height: 1.2;
    color: inherit;
  }

  .switch input {
    display: none;
  }

  .switch i {
    display: inline-block;
    cursor: pointer;
    padding-right: 20px;
    transition: all ease 0.2s;
    -webkit-transition: all ease 0.2s;
    border-radius: 20px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, .5);
  }

  .switch i:before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
  }

  .switch :checked + i {
    padding-right: 0;
    padding-left: 20px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, .5), inset 0 0 40px lightblue;
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, .5), inset 0 0 40px lightblue;
  }

  .switch.red :checked + i {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, .5), inset 0 0 40px red;
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, .5), inset 0 0 40px red;
  }
</style>
