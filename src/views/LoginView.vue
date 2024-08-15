<template>
  <div class="login-container">
    <div class="card login-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Login</h2>
        <login-form @login="handleLogin" />
        <router-link to="/register" class="d-block text-center mt-3 link-register">Não tem conta? Registre-se</router-link>
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
          alert('Falha no Login: ' + error.message);
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
  background: linear-gradient(135deg, #4a90e2, #9013fe);
}

.login-card {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-weight: bold;
  color: #333;
  font-size: 1.5rem;
}

.link-register {
  color: #9013fe;
  text-decoration: underline;
  transition: color 0.3s;
}

.link-register:hover {
  color: #4a90e2;
}

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
</style>
