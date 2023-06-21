import { useState } from 'react';
interface Task {
    id: number;
    // Properties lain dari Task
}
export const useMoveTask = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
        // Mendapatkan indeks dari task dengan ID yang sesuai
        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        // Menentukan indeks tujuan berdasarkan arah perpindahan
        const targetIndex = taskIndex + directionNumber;

        // Memastikan indeks tujuan berada dalam rentang yang valid
        if (targetIndex < 0 || targetIndex >= tasks.length) {
            return; // Keluar dari fungsi jika indeks tujuan tidak valid
        }

        // Mendapatkan task yang akan dipindahkan
        const taskToMove = tasks[taskIndex];

        // Membuat salinan array tasks
        const newTasks = [...tasks];

        // Menghapus task dari posisi asal
        newTasks.splice(taskIndex, 1);

        // Menyisipkan task ke posisi tujuan
        newTasks.splice(targetIndex, 0, taskToMove);

        // Memperbarui state tasks dengan array yang telah dimodifikasi
        setTasks(newTasks);
    };

    return {
        tasks,
        moveTaskCard,
    };
};
