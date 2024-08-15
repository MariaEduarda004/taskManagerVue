<template>
  <div class="task-manager-container">
    <div class="card task-manager-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Gerenciador de Tarefas</h2>
        <form @submit.prevent="addTask" class="mb-4">
          <div class="mb-3">
            <label for="input-title" class="form-label">Nova tarefa:</label>
            <input 
              type="text" 
              id="input-title" 
              v-model="newTaskName" 
              class="form-control" 
              placeholder="Digite a nova tarefa" 
              required 
            />
          </div>
          <div class="mb-3">
            <label for="task-deadline" class="form-label">Prazo:</label>
            <input 
              type="date" 
              id="task-deadline" 
              v-model="newTaskDeadline" 
              class="form-control" 
              required 
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Adicionar</button>
          </div>
        </form>
        <ul class="list-group">
          <li 
            class="list-group-item d-flex justify-content-between align-items-center" 
            v-for="task in tasks" 
            :key="task.id"
          >
            <div>
              <strong class="task-title">
                {{ task.name }}
                <i 
                  v-if="task.completed" 
                  class="fas fa-check-circle text-success ms-2"
                ></i>
              </strong><br>
              <span class="task-meta">
                Criada em: {{ formatDate(task.created) }}<br>
                Prazo: {{ formatDate(task.deadline) }}<br>
                Status: <span :class="task.completed ? 'text-success' : 'text-warning'">{{ task.completed ? 'Concluída' : 'Pendente' }}</span>
              </span>
            </div>
            <div class="task-actions">
              <button 
                v-if="!task.completed" 
                @click="completeTask(task.id)" 
                class="btn btn-success btn-sm"
              >
                Concluir
              </button>
              <button 
                @click="removeTask(task.id)" 
                class="btn btn-danger btn-sm ms-2"
              >
                Remover
              </button>
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
  background: linear-gradient(135deg, #2c3e50, #3498db);
}

.task-manager-card {
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 20px;
}

.card-title {
  font-weight: bold;
  color: #333;
  font-size: 1.6rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
  border-color: #3498db;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
}

.d-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.list-group-item {
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.task-meta {
  color: #777;
  font-size: 0.9rem;
}

.task-actions {
  display: flex;
  flex-direction: column;
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  margin-top: 4px;
}

.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-success {
  background-color: #27ae60;
  border-color: #27ae60;
}

.btn-success:hover {
  background-color: #229954;
}

.btn-danger {
  background-color: #e74c3c;
  border-color: #e74c3c;
}

.btn-danger:hover {
  background-color: #c0392b;
}
</style>
