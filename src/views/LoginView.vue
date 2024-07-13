<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <login-form @login="handleLogin" />
        <router-link to="/register" class="d-block mt-3">Don't have an account? Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import { mockApi } from '@/mockApi';

export default {
  name: 'LoginView',
  components: {
    LoginForm
  },
  methods: {
    handleLogin(credentials) {
      mockApi.login(credentials.email, credentials.password)
        .then(response => {
          console.log('Login successful:', response);
        })
        .catch(error => {
          console.error('Login failed:', error);
        });
    }
  }
};
</script>

<style scoped>
</style>
