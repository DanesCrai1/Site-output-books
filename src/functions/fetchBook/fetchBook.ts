import axios from "axios";

interface Book {
    "status": string;
    "code": number;
    "locale": string;
    "seed": any;
    "total": number;
    "data": dataBook[]
}

export interface dataBook {
    "id": number;
    "title": string;
    "author": string;
    "genre": string;
    "description": string;
    "isbn": string;
    "image": string;
    "published": string;
    "publisher": string;
}

const apiUrl = "https://fakerapi.it/api/v2/books?_quantity=3";

export const fetchBook = async (): Promise<any | undefined> => {
    try {
        const data: Book = (await axios.get(apiUrl)).data.data;
        return data;
    } catch (error) {
        return undefined;
    }

}
