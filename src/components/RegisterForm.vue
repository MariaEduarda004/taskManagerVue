<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input type="text" id="name" v-model="name" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email:</label>
      <input type="email" id="email" v-model="email" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password:</label>
      <input type="password" id="password" v-model="password" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('register', { name: this.name, email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>

</style>
