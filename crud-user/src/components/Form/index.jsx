import React, { useState } from 'react'
import { isValidEmail, } from '../../utils/validRegex';
import { addUser } from '../../services/apiRequest';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

const FormData = () => {

    const initialState = {
        fullName: "",
        email: "",
        position: "",
        age: "",
    }

    const [newUser, setNewUser] = useState(initialState)

    const handleAddUser = async () => {
        try {
            const response = await addUser(newUser)
            if (response.status === 201) {
                toast.success("Istifadəçi əlavə olundu", {
                    autoClose: 1000
                })
                setNewUser(initialState)
            }
        } catch (error) {
            toast.error("Istifadəçi əlavə olunmadı", {
                autoClose: 1000
            })
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value, })

    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className='mt-4 text-center '>Add user</h1>
                <div className='area-form  '>
                    <Form.Control
                        name='fullName'
                        type='text'
                        onChange={handleChange}
                        value={newUser.fullName}
                        placeholder='enter fullName'
                        style={{
                            borderRadius: "7px"
                        }}
                        className='mt-3 w-75 '
                    />
                    <Form.Control
                        name='email'
                        type='text'
                        onChange={handleChange}
                        value={newUser.email}
                        placeholder='enter email'
                        style={{
                            borderRadius: "7px"
                        }}
                        className='mt-3 w-75 '
                    />
                    <Form.Control
                        name='position'
                        type='text'
                        onChange={handleChange}
                        value={newUser.position}
                        placeholder='enter position'
                        style={{
                            borderRadius: "7px"
                        }}
                        className='mt-3 w-75'
                    />
                    <Form.Control
                        name='age'
                        type='text'
                        onChange={handleChange}
                        value={newUser.age}
                        placeholder='enter age'
                        style={{
                            borderRadius: "7px"
                        }}
                        className='mt-3 w-75'
                    />
                    <button className='btn btn-primary w-75 mt-3' onClick={handleAddUser}>Submit</button>


                </div>
            </div>





        </>
    )
}

export default FormData
