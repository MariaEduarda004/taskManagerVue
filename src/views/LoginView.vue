<template>
  <div class="login-container">
    <div class="card login-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Login</h2>
        <login-form @login="handleLogin" />
        <router-link to="/register" class="d-block text-center mt-3">Don't have an account? Register</router-link>
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
          localStorage.setItem('userId', response.user.id);
          this.$router.push('/task-manager');
        })
        .catch(error => {
          alert('Login failed: ' + error.message);
        });
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  color: #333;
}

.login-form {
  margin-top: 20px;
}
* {
  font-family: 'Roboto', sans-serif;
}

</style>
