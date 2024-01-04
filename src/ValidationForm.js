import React from "react";
import {Form, Button} from 'semantic-ui-react'
import { useForm } from "react-hook-form";



export default function ValidationForm() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit=(data)=>{
        console.log(data)

    }

    
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
               
                    <label>First Name</label>
                    <input placeholder='First Name' type="text" 
                    {...register("firstName", {required : true})}/>
                    
                <Form.Field>
                {errors.firstName && <p>Please check your first name</p>}
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text" 
                    {...register("lastName", {required: true})}/>
                   
                </Form.Field>
                {errors.lastName && <p>Please enter your last name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password" {...register("password", {required: true})}/>
                    
                </Form.Field>
                {errors.password && <p>Please check your password</p>}
                <Button color="black" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}