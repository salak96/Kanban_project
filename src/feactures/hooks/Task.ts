import { useRecoilState } from "recoil";
import { tasksState } from "../TaskAtoms";
import { TASK_PROGRESS_ID } from "../../constants/app";
import { Task } from "../../types";

interface useTaskActionType {
    completedTask: (taskid: number) => void;
}

export const useTasksAction = (): useTaskActionType => {
    const [tasks, setTasks] = useRecoilState(tasksState);

    const completedTask = (taskid: number) :void => {
        const updatedTasks: Task[] = tasks.map((task) =>
        task.id === taskid
          ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED }
          : task,
      )
      setTasks(updatedTasks)
    }
  
    return {
      completedTask,
    }
  }