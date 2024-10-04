import axios, { AxiosResponse } from 'axios'

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}
const fetchData = async () => {
    try {
        const res: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Todo:',res.data);
    } catch (err: any) {
        if (axios.isAxiosError(err)) {
            console.log('Axios Error::' + err.message)
            if (err.response) {
                console.log('Status: ', err.response.status)
                console.log('data: ', err.response.data)
            }
        }
    }
}
fetchData();
