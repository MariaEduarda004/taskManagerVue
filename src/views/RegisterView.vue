<template>
  <div class="register-container">
    <div class="card register-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Register</h2>
        <register-form @register="handleRegister" />
        <router-link to="/" class="d-block text-center mt-3">Already have an account? Login</router-link>
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
          // Optionally redirect to login or another page
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Registration failed:', error);
          alert('Registration failed: ' + error.message);
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
  background-color: #f0f2f5;
}

.register-card {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-title {
  font-weight: bold;
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
