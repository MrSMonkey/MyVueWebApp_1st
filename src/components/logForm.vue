<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors () {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '不包含@'
        } else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          this.userFlag = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{6}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码不是6位'
        } else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          this.passwordFlag = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.passwordErrors.status || !this.userErrors.status) {
          this.errorText = '账户名密码输入有误'
        } else {
          this.errorText = ''
          this.$http.post('api/login').then((res) => {
            this.$emit('has-log', res.body)
          }, (error) => {
            console.log(error)
          })
        }
      }
    }
  }
</script>