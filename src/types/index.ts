export interface CSSProperties {
    [key: string]: React.CSSProperties;
}

export interface Task {
    id: number;
    title: string;
    detail: string;
    dueDate: string;
    progressOrder: number;
}
export interface UserId {
    id: number | null;
    directionNumber: number | null;
}

export interface FilterInterface {
    id: number;
    title: string;
}
