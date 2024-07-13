<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Gerenciador de Tarefas</h2>
        <form @submit.prevent="addTask" class="mb-3">
          <div class="mb-3">
            <label for="task" class="form-label">Tarefa:</label>
            <input type="text" id="task" v-model="newTask" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Tarefa</button>
        </form>
        <ul class="list-group">
          <li class="list-group-item" v-for="task in tasks" :key="task.id">
            {{ task.name }}
            <button @click="removeTask(task.id)" class="btn btn-danger btn-sm ms-2">Remover</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mockApi } from '@/mockApi';

export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      mockApi.getTasks()
        .then(tasks => {
          this.tasks = tasks;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    addTask() {
      const newTask = {
        id: Date.now(),
        name: this.newTask
      };
      this.tasks.push(newTask);
      this.newTask = '';
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
}
</script>

<style scoped>
</style>
