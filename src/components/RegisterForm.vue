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
    <button type="submit" class="btn btn-primary btn-block">Register</button>
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
.form-label {
  font-weight: 500;
  color: #555;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
  border-color: #9013fe;
  box-shadow: 0 0 8px rgba(144, 19, 254, 0.3);
}

.btn-primary {
  background-color: #9013fe;
  border-color: #9013fe;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  background-color: #4a90e2;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.btn-block {
  width: 100%;
  margin-top: 20px;
}
</style>
