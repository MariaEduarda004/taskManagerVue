// src/utils.js

export function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
  