const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'birinci task'},
        'task-2': {id: 'task-2', content: 'ikinci task'},
        'task-3': {id: 'task-3', content: 'ucuncu task'},
        'task-4': {id: 'task-4', content: 'dorduncu task'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'liste 1',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
};

export default initialData;

