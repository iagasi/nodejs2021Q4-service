declare const _default: {
    users: {
        getAll: string;
        getById: (id: string) => string;
        create: string;
        update: (id: string) => string;
        delete: (id: string) => string;
    };
    tasks: {
        getAll: (boardId: string) => string;
        getById: (boardId: string, taskId: string) => string;
        create: (boardId: string) => string;
        update: (boardId: string, taskId: string) => string;
        delete: (boardId: string, taskId: string) => string;
    };
    boards: {
        getAll: string;
        getById: (id: string) => string;
        create: string;
        update: (id: string) => string;
        delete: (id: string) => string;
    };
    login: string;
};
export = _default;
