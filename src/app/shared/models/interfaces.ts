export interface Course {
    id: number;
    name: string;
    description: string;
    img: string;
    alumnosInscriptos: string[];
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    isActive: boolean;
    curso: string;
    role: string;
    token: string
}

export interface Inscripcion {
    id: string;
    userId: string;
    courseId: string;
    user?: User;
    course?: Course
}

export interface LoginData {
    email: string;
    password: string
}

export interface Pagination<T> {
    first: number;
    prev: null | number;
    next: null | number;
    last: number;
    pages: number;
    items: number;
    data: T[]
}