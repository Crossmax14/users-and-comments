import { isDevelopment } from "../App";
import { commentsMock } from "../mockups/comments";
import { usersMockup } from "../mockups/users";

export function getUsers(): Promise<any> {
    if (isDevelopment) {
        return new Promise((res, rej) => res(usersMockup));
    } else {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json());
    }
}

export function getComments(): Promise<any> {
    if (isDevelopment) {
        return new Promise((res, rej) => res(commentsMock));
    } else {
        return fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json());
    }
}