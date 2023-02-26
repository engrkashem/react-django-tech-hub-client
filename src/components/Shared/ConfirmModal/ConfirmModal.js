import React from 'react';

const ConfirmModal = ({ setIsDelete, setConfirm }) => {
    const handleDeleteConfirm = () => {
        setIsDelete(true)
        setConfirm(false)
    }
    const handleDeleteCancel = () => {
        setIsDelete(false)
        setConfirm(false)
    }
    return (
        <div className=' min-h-screen w-2/3 absolute top-0 z-20 bg-transparent flex items-center justify-center backdrop-brightness-75'>
            <div className=' bg-base-100  h-64 w-96 px-10'>
                <div className=' w-full h-3/4 flex items-center justify-center'>
                    <div onClick={handleDeleteConfirm} className=' h-28 w-28 border border-1 border-red-400 rounded-full p-1 cursor-pointer hover:shadow-sm hover:shadow-red-400'>
                        <div className='border border-1 border-red-600 rounded-full h-full w-full p-1 hover:shadow-sm hover:shadow-red-600'>
                            <div className=' border border-1 border-red-900 rounded-full h-full w-full flex items-center justify-center bg-red-500 hover:shadow-sm hover:shadow-red-900 hover:bg-red-600'>
                                <p className=' text-white font-bold text-xl'>DELETE?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-start'>
                    <button onClick={handleDeleteCancel} className='btn btn-primary btn-outline'>CANCEL</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;