import  { useState } from 'react';
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '../../constants/app';
import type { CSSProperties, Task } from '../../types';
import { useTasksAction } from '../../feactures/hooks/Task';
import type { Dispatch, SetStateAction } from 'react'; // Ditambahkan

interface TaskFormProps {
    type: string;
    defaultProgressOrder: number;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>; // Ditambahkan
    task?: Task;
}

const TaskForm = ({ type, defaultProgressOrder, setIsModalOpen, task }: TaskFormProps): JSX.Element => {
    const [title, setTitle] = useState<string>(task?.title || '');
    const [detail, setDetail] = useState<string>(task?.detail || '');
    const [dueDate, setDueDate] = useState<string>(task?.dueDate || '');
    const [progressOrder, setProgressOrder] = useState<number>(defaultProgressOrder);
    const { addTask, editTask } = useTasksAction();

    const handleSubmit = (): void => {
        if (type === TASK_MODAL_TYPE.ADD) {
            addTask(title, detail, dueDate, progressOrder); // Ditambahkan
            setIsModalOpen(false); // Ditambahkan
        }
        if (task && type === TASK_MODAL_TYPE.EDIT) {
            editTask({ id: task.id, title, detail, dueDate, progressOrder });
            setIsModalOpen(false); // Ditambahkan
        }
    };
    return (
        <form style={styles.form}>
            <div style={styles.formItem}>
                <label>Title：</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e): void => {
                        setTitle(e.target.value);
                    }}
                    style={styles.formInput}
                />
            </div>
            <div style={styles.formItem}>
                <label>Detail：</label>
                <textarea
                    value={detail}
                    onChange={(e): void => {
                        setDetail(e.target.value);
                    }}
                    style={styles.formTextArea}
                />
            </div>
            <div style={styles.formItem}>
                <label>Due Date：</label>
                <input
                    type='date'
                    value={dueDate}
                    onChange={(e): void => {
                        setDueDate(e.target.value);
                    }}
                    style={styles.formInput}
                />
            </div>
            <div style={styles.formItem}>
                <label>Progress：</label>
                <select
                    style={styles.formInput}
                    defaultValue={progressOrder}
                    onChange={(e): void => {
                        setProgressOrder(Number(e.target.value));
                    }}
                >
                    <option value={TASK_PROGRESS_ID.NOT_STARTED}>{TASK_PROGRESS_STATUS.NOT_STARTED}</option>
                    <option value={TASK_PROGRESS_ID.IN_PROGRESS}>{TASK_PROGRESS_STATUS.IN_PROGRESS}</option>
                    <option value={TASK_PROGRESS_ID.WAITING}>{TASK_PROGRESS_STATUS.WAITING}</option>
                    <option value={TASK_PROGRESS_ID.COMPLETED}>{TASK_PROGRESS_STATUS.COMPLETED}</option>
                </select>
            </div>
            <button
                type='button'
                style={styles.button}
                onClick={(): void => {
                    handleSubmit(); // Ditambahkan
                }}
            >
                Submit
            </button>
        </form>
    );
};

const styles: CSSProperties = {
    form: {
        fontSize: '24px',
    },
    formItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    formInput: {
        height: '40px',
        fontSize: '20px',
    },
    formTextArea: {
        height: '80px',
        fontSize: '20px',
    },
    button: {
        backgroundColor: '#55C89F',
        color: '#fff',
        fontSize: '20px',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '4px',
    },
};

export default TaskForm;
