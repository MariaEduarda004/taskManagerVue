export const mockApi = {
    login(email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'password') {
            resolve({ success: true });
          } else {
            reject({ success: false, message: 'Invalid email or password' });
          }
        }, 1000);
      });
    },
    register(name, email, password) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, message: name, email, password });
        }, 1000);
      });
    },
    getTasks() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' }
          ]);
        }, 1000);
      });
    }
  };
  