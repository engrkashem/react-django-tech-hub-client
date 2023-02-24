import React from 'react';
import { useForm } from "react-hook-form";

const WriteBlog = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />

            <input type="submit" />
        </form>
    );
};

export default WriteBlog;