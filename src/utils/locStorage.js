function lStorageState() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
}

export { lStorageState };
