import { TaskDto } from './tasks.dto';
declare function taskModel(options: TaskDto, boaidId: string | null): {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
};
export default taskModel;
