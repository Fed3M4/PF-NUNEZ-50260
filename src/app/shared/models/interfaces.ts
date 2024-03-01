export interface Profesor{
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    curso: string;
    isActive: boolean;
}

export interface Curso {
    id: number;
    name: string;
    description: string;
    img: string;
    alumnosInscriptos: string[];
}

export interface Alumnos {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
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