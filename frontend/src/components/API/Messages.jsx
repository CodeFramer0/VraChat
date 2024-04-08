import {useEffect } from 'react';
const Messages = (chat_id) => {
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/messages/?chat_id=${chat_id}`)
        .then(async(res) => {
        // console.log(res)
        console.log(res)
        return await res.json();
        })
        .then((data) => {
        return data
        });
    }, []);
};
export {Messages};