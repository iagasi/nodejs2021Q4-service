

export = {
    users: {
      getAll: '/users',
      getById: (id:string)=> `/users/${id}`,
      create: '/users',
      update: (id:string) => `/users/${id}`,
      delete: (id:string) => `/users/${id}`
    },
    tasks: {
      getAll: (boardId:string) => `/boards/${boardId}/tasks`,
      getById: (boardId:string, taskId:string) => `/boards/${boardId}/tasks/${taskId}`,
      create:( boardId:string) => `/boards/${boardId}/tasks`,
      update: (boardId:string, taskId:string) => `/boards/${boardId}/tasks/${taskId}`,
      delete: (boardId:string, taskId:string) => `/boards/${boardId}/tasks/${taskId}`
    },
    boards: {
      getAll: '/boards',
      getById: (id:string) => `/boards/${id}`,
      create: '/boards',
      update: (id:string) => `/boards/${id}`,
      delete: (id:string) => `/boards/${id}`
    },
    login: '/login'
  };