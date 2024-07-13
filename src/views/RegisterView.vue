<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Register</h2>
        <register-form @register="handleRegister" />
        <router-link to="/" class="d-block mt-3">Already have an account? Login</router-link>
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
        })
        .catch(error => {
          console.error('Registration failed:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui, se necessário */
</style>
