import React from 'react'
import type { Task, CSSProperties } from '../../types'

interface TaskListItemProps {
  task: Task
}
const getProgressCategory = (progressOrder: number): string => {
  switch (progressOrder) {
    case 1:
      return 'Not Started'
    case 2:
      return 'In Progress'
    case 3:
      return 'Waiting/In Review'
    case 4:
      return 'Completed'
    default:
      return 'Not Started'
  }
}
const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  return (
    <div style={styles.tableBody}>
      <div style={styles.tableBodyTaskTitle}>
        <span className="material-icons">check_circle</span>
        {task.title}
      </div>
      <div style={styles.tableBodyDetail}>{task.detail}</div>
      <div style={styles.tableBodyDueDate}>{task.dueDate}</div>
      <div style={styles.tableBodyprogress}>{task.progressOrder}</div>
      <div style={styles.tableBodyprogress}>
        {getProgressCategory(task.progressOrder)}
      </div>
      <div>
        <span className="material-icons" style={styles.menuIcon}>
          more_horiz
        </span>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  tableBody: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #D8D8D8',
    fontSize: '20px',
    position: 'relative',
  },
  tableBodyTaskTitle: {
    width: '15%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDetail: {
    width: '30%',
    padding: '16px',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDueDate: {
    width: '10%',
    padding: '16px',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyprogress: {
    width: '15%',
    padding: '16px',
  },
  menuIcon: {
    cursor: 'pointer',
  },
}

export default TaskListItem
