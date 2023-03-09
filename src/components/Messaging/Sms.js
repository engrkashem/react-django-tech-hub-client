import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Sms = ({ message }) => {
    const { message_body, sender } = message;
    const email = sender?.email;
    const { dbUser } = useContext(AuthContext);

    return (
        <>
            {
                email === dbUser?.email ? <div class="chat chat-end px-5">
                    <div className='w-full flex flex-col items-end'>
                        <small>{email.split('@')[0]}</small>
                        <div class="chat-bubble chat-bubble-primary">{message_body}</div>
                    </div>
                </div> :
                    <div class="chat chat-start px-5 w-full">
                        <div>
                            <small>{email.split('@')[0]}</small>
                            <div class="chat-bubble chat-bubble-primary min-w-fit">{message_body}</div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Sms;