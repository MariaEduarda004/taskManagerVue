<template>
  <div class="task-manager-container">
    <div class="card task-manager-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Gerenciador de Tarefas</h2>
        <form @submit.prevent="addTask" class="mb-4">
          <div class="input-group mb-3">
            <input type="text" v-model="newTaskName" class="form-control" placeholder="Digite a nova tarefa" required />
            <input type="date" v-model="newTaskDeadline" class="form-control" required />
            <button type="submit" class="btn btn-primary">Adicionar</button>
          </div>
        </form>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="task in tasks" :key="task.id">
            <div>
              <strong>
                {{ task.name }}
                <i v-if="task.completed" class="fas fa-check-circle text-success ms-2"></i>
              </strong><br>
              Criada em: {{ formatDate(task.created) }}<br>
              Prazo: {{ formatDate(task.deadline) }}<br>
              {{ task.completed ? 'Concluída' : 'Pendente' }}
            </div>
            <div>
              <button v-if="!task.completed" @click="completeTask(task.id)" class="btn btn-success btn-sm">Concluir</button>
              <button @click="removeTask(task.id)" class="btn btn-danger btn-sm ms-2">Remover</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mockApi } from '@/mockApi';
import { formatDate } from '@/utils';

export default {
  data() {
    return {
      newTaskName: '',
      newTaskDeadline: '',
      tasks: []
    }
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      const userId = localStorage.getItem('userId');
      mockApi.getTasks(userId)
        .then(tasks => {
          this.tasks = tasks;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    addTask() {
      const userId = localStorage.getItem('userId');
      const newTask = {
        id: Date.now(),
        name: this.newTaskName,
        created: new Date().toISOString().split('T')[0],
        deadline: this.newTaskDeadline,
        userId: userId,
        completed: false
      };
      mockApi.addTask(userId, newTask)
        .then(task => {
          this.tasks.push(task);
          this.newTaskName = '';
          this.newTaskDeadline = '';
        })
        .catch(error => {
          console.error('Error adding task:', error);
        });
    },
    removeTask(taskId) {
      mockApi.removeTask(taskId)
        .then(() => {
          this.tasks = this.tasks.filter(task => task.id !== taskId);
        })
        .catch(error => {
          console.error('Error removing task:', error);
        });
    },
    completeTask(taskId) {
      mockApi.completeTask(taskId)
        .then(updatedTask => {
          const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);
          if (taskIndex > -1) {
            this.tasks[taskIndex] = updatedTask;
          }
        })
        .catch(error => {
          console.error('Error completing task:', error);
        });
    },
    formatDate
  }
}
</script>

<style scoped>
.task-manager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.task-manager-card {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  color: #333;
}

.input-group {
  width: 100%;
}

.list-group-item {
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
}

.btn-sm {
  padding: 0.2rem 0.5rem;
}
</style>
