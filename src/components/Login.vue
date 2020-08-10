<template>
  <div class="row">
    <div class="col m6 s6">
      <h5>Registrese</h5>
      <form action="" @submit.prevent="register">
        <div class="row">
          <div class="input-field col s12">
            <input type="email" class="validate" required v-model="register_email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" class="validate" required v-model="register_password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" class="validate" required v-model="register_password_again">
            <label for="password">Repita Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="submit" class="btn" />
          </div>
        </div>
      </form>
    </div>
    <div class="col m6 s6">
      <h5>Ingrese con su usuario y contraseña</h5>
      <form action="" @submit.prevent="login">
        <div class="row">
          <div class="input-field col s12">
            <input type="email" class="validate" required v-model="login_email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" class="validate" required v-model="login_password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="submit" class="btn" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // variables para el login
      login_email: '',
      login_password: '',
      // variables para el registro
      register_email: '',
      register_password: '',
      register_password_again: ''
    }
  },
  methods: {
    login() {
      console.log('login')
    },
    register() {
      console.log('REGISTER')
    }
  }
}
</script>