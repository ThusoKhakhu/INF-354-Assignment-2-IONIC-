//Programs repositoty
export interface Workouts {
    id: number;
    name: string;
    description: string;
    exercises: string[];
    duration: string;
    equipment: string[];
    status: string
}

export interface User{
    id: number;
    username: string;
    password: string;
}