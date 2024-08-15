<template>
  <div class="register-container">
    <div class="card register-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Registrar</h2>
        <register-form @register="handleRegister" />
        <router-link to="/" class="d-block text-center mt-3 link-login">Já possui conta? Realize o login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';
import { mockApi } from '@/mockApi';

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  },
  methods: {
    handleRegister(credentials) {
      mockApi.register(credentials.name, credentials.email, credentials.password)
        .then(response => {
          console.log('Registration successful:', response);
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Registration failed:', error);
          alert('Falha ao registrar: ' + error.message);
        });
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4a90e2, #9013fe);
}

.register-card {
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

.link-login {
  color: #4a90e2;
  text-decoration: underline;
  transition: color 0.3s;
}

.link-login:hover {
  color: #9013fe;
}

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
</style>
