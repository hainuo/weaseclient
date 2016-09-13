<template>
  <div class="background">
    <div class="img">
    </div>
  </div>
  <div class="form">
    <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="32rem" dismissable>
      <span class="glyphicon glyphicon-ok"></span>
      <strong>登陆成功!</strong>
      <p>维意微信公众管理平台欢迎您！</p>
    </alert>
    <form class="loginForm">
      <div class="text-center margin-5 h3">登陆</div>
      <bs-input :value.sync="username" label="用户名" name="username" type="text" help="仅允许小写字母和数字。" error="请输入用户名"
                placeholder="仅能以小写字母开始。"
                pattern="^[a-z][a-z0-9]+$" :mask="mask" minlength="5" required icon></bs-input>
      <bs-input :value.sync="password" label="密码" name="password" help="请保护好你的密码。" placeholder="至少6为字母或者数字"
                type="password" error="请输入密码"
                minlength="6" required icon></bs-input>
      　
      <hr/>
      <button type="button" class="btn btn-primary" v-on:click="login">立即登陆</button>
      <button type="button" class="btn btn-danger">忘记密码</button>
    </form>
  </div>

</template>
<script>
  import { alert, input } from 'vue-strap';
  export default {
    components: {
      alert,
      bsInput: input,
    },
    data: function data() {
      return {
        username: null,
        password: null,
        showRight: false,
      };
    },
    methods: {
      login: function login(e) {
        this.showRight = true;
        console.log(this, e);
        this.$http.get('http://www.hainuo.info').then((response) => {
          console.log(response);
        });
      },
    },
  };

</script>
<style>
  body {
    background-color: #e7e8eb;
    height: 100%;
    width: 100%;
  }

  .background {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-width: 100rem;
  }

  .background .img {
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover !important;
    background-image: url("assets/bg1.jpg");
  }

  .loginForm {
    position: absolute;
    width: 40rem;
    height: 20rem;
    bottom: 1rem;
    right: 3rem;
    border: 1px solid red;
    background-color: white;
    text-align: center;
    margin: 2rem;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    opacity: 0.7;
  }

  .loginForm .form-group {
    clear: left;
    margin: 1rem 0.3rem;

  }

  .loginForm .form-group .form-control {
    width: 20rem;
    float: left;
  }

  .loginForm .form-group .control-label {
    width: 5rem;
    text-align: right;
    float: left;
    line-height: 2.5rem;
    margin-right: 0.2rem;
    overflow: hidden;
  }

  .loginForm .form-group .help-block {
    float: left;
    text-align: left;
    font-size: 0.8rem;
    line-height: 2.5rem;
    margin-left: 0.5rem;
    overflow: hidden;
  }

  .loginForm .form-group .form-control-feedback {
    top: 0.2rem;
  }

  .loginForm button.btn {
    margin-right: 3rem;
  }
</style>
