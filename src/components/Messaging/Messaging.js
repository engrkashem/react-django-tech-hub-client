import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Sms from './Sms';

const Messaging = () => {
    const inputRef = useRef(null)
    const { dbUser } = useContext(AuthContext);

    // const urlGet = `http://127.0.0.1:8000/message/`
    const urlGet = `https://naimur.pythonanywhere.com/message/`
    const { data: messages = [], refetch } = useQuery({
        queryKey: ['message'],
        queryFn: () => fetch(urlGet)
            .then(res => res.json())
    })
    // console.log(messages)

    const handleSendMessage = () => {
        const message = inputRef.current.value
        const message_obj = {
            sender: dbUser?.id,
            message_body: message
        }
        // const url = `http://127.0.0.1:8000/message/`
        const urlPost = `https://naimur.pythonanywhere.com/message/`
        fetch(urlPost, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message_obj)
        }).then(res => res.json()).then(data => {
            inputRef.current.value = ''
            refetch()
            console.log(data)
        })

    }

    return (
        <div className=' min-h-scree py-20'>
            <h1 className=' text-5xl font-bold my-5 '>Lets Talk</h1>
            <div className=' shadow shadow-sky-200  min-h-fit max-w-lg mx-auto rounded-3xl flex flex-col'>
                <div className=' min-h-16 bg-transparent grow rounded-t-3xl pb-4'>
                    {
                        messages?.map(message => <Sms
                            key={message.id}
                            message={message}
                        ></Sms>)
                    }
                </div>
                <div className=' min-h-8 rounded-b-3xl flex items-center'>
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="Write Your Message"
                        className="input input-ghost input-bordered grow min-h-8" />

                    <svg
                        onClick={handleSendMessage}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor"
                        className="w-10 h-10 text-primary">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>


                </div>
            </div>
        </div >
    );
};

export default Messaging;