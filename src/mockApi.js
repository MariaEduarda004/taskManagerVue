export const mockApi = {
  users: [
    { id: 1, name: 'Maria', email: 'teste@gmail.com', password: 'teste' },
    { id: 2, name: 'Joao', email: 'joao@example.com', password: 'teste2' },
    { id: 3, name: 'Lucia', email: 'lucia@example.com', password: 'teste3' }
  ],

  tasks: [
    { id: 1, name: 'Finalizar relatório financeiro', userId: 1, created: '2024-08-01', deadline: '2024-08-10', completed: false },
    { id: 2, name: 'Reunião com a equipe de marketing', userId: 2, created: '2024-08-02', deadline: '2024-08-15', completed: false },
    { id: 3, name: 'Planejar a viagem de negócios', userId: 1, created: '2024-08-03', deadline: '2024-08-20', completed: false },
    { id: 4, name: 'Atualizar o site da empresa', userId: 3, created: '2024-08-04', deadline: '2024-08-25', completed: false },
    { id: 5, name: 'Revisar contrato de parceria', userId: 2, created: '2024-08-05', deadline: '2024-08-30', completed: false },
    { id: 6, name: 'Enviar proposta ao cliente', userId: 3, created: '2024-08-06', deadline: '2024-09-05', completed: false }
  ],

  login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
          resolve({ success: true, user });
        } else {
          reject({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  },

  register(name, email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.users.some(u => u.email === email)) {
          reject({ success: false, message: 'Email already in use' });
        } else {
          const newUser = { id: Date.now(), name, email, password };
          this.users.push(newUser);
          resolve({ success: true, user: newUser });
        }
      }, 1000);
    });
  },

  getTasks(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userTasks = this.tasks.filter(task => task.userId === parseInt(userId));
        if (userTasks.length > 0) {
          resolve(userTasks);
        } else {
          reject(new Error('No tasks found for this user'));
        }
      }, 1000);
    });
  },

  addTask(userId, task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (task.name && task.deadline) {
          const newTask = { ...task, userId, created: new Date().toISOString().split('T')[0], completed: false };
          this.tasks.push(newTask);
          resolve(newTask);
        } else {
          reject(new Error('Invalid task data'));
        }
      }, 1000);
    });
  },

  removeTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex > -1) {
          this.tasks.splice(taskIndex, 1);
          resolve(taskId);
        } else {
          reject(new Error('Task not found'));
        }
      }, 1000);
    });
  },

  completeTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
          task.completed = true;  // Atualiza o status da tarefa
          resolve(task);          // Retorna a tarefa atualizada
        } else {
          reject(new Error('Task not found'));  // Lança um erro se a tarefa não for encontrada
        }
      }, 1000);
    });
  },
};
