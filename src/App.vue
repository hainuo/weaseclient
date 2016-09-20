<template>
  <div class="background">
    <div class="img">
      <!-- use router-view element as route outlet -->
      <div :class.sync="routerShow">
        <router-view></router-view>
        <p>当前路径: {{$route.path}}</p>
        <p>当前路由参数: {{$route.params | json}}</p>
        <hr/>
        <div>
          <Display></Display>
          <Increment></Increment>
        </div>
      </div>
    </div>
  </div>
  <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="32rem" dismissable>
    <span class="glyphicon glyphicon-ok"></span>
    <strong>登陆成功!</strong>
    <p>维意微信公众管理平台欢迎您！</p>
  </alert>
  <div class="form" :class.sync="formShow">
    <form class="loginForm">
      <div class="text-center margin-5 h3">登陆</div>
      <div class="input-group">
        <bs-input :value.sync="username" label="用户名" name="username" type="text" help="仅允许小写字母和数字。" error="请输入用户名"
                  placeholder="仅能以小写字母开始。"
                  pattern="^[a-z][a-z0-9]+$" :mask="mask" minlength="5" required icon></bs-input>
        <bs-input :value.sync="password" label="密码" name="password" help="请保护好你的密码。" placeholder="至少6为字母或者数字"
                  type="password" error="请输入密码"
                  minlength="6" required icon></bs-input>
      </div>
      <hr/>
      <div class="checkbox-group">
        <checkbox button :checked.sync="remember" value="1" v-on:click="" type="success">记住登陆状态</checkbox>
      </div>
      <hr/>
      <div class="button-group">
        <button type="button" class="btn btn-primary" v-on:click="login">立即登陆</button>
        <button type="button" class="btn btn-danger">忘记密码</button>
      </div>
    </form>
  </div>

</template>
<script>
  import { alert, input, checkbox } from 'vue-strap';
  import Display from './components/Display.vue';
  import Increment from './components/Increment.vue';
  import store from './vuex/store';
  export default {
    replace: false,
    components: {
      alert,
      checkbox,
      bsInput: input,
      Display,
      Increment,
    },
    data: function data() {
      return {
        username: null,
        password: null,
        showRight: false,
        routerShow: '',
        remember: '',
        formShow: '',
      };
    },
    methods: {
      login: function login() {
        this.showRight = true;
//        console.log(this);
        this.$router.go('/bar');
        this.$http.post(
          'http://localhost:8081/Login/index',
          {
            username: this.username,
            password: this.password,
          }
        ).then((response) => {
          console.log(response.data.data);
//          this.formShow = 'hide';
//          if ( this.remember ) this.remember = 1;
          this.$auth.setToken(response.data.data);
          console.log(this.$auth.setUserData(JSON.stringify(response.data.data)));
          console.log(this.$auth.getUserData());
          console.log(this.$auth.isAuthenticated());
        });
      },
    },
    store,
  };

</script>
<style>
  body {
    background-color: #e7e8eb;
    height: 100%;
    width: 100%;
  }

  hr {
    clear: both;
    margin: 0.5rem;
  }

  .background {
    top: 0;
    left: 0;
    display: block;
    overflow: hidden;
    min-width: 100rem;
    min-height: 50rem;
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
    height: 23rem;
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

  .loginForm .checkbox-group {
    width: 10rem;
    margin: 0px auto;
  }

  .loginForm .checkbox-group label.btn > input[type=checkbox] {
    position: relative;
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
