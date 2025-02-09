import React from 'react'
import Title from '../title'
import Second from '../second/Second'

const First = () => {
    const personInfo = {
        fullName: 'John Doe',
        age: 28,
        email: 'john@example.com',
        phoneNumber: '+123456789',
        hobbies: ['Reading', 'Hiking', 'Photography'],
        married: true,
    };

    return (
        <div className='parent main'>
            <Title classnames="title1" text="First Component" />
            <p>Full Name: {personInfo.fullName}</p>
            <p>Age: {personInfo.age}</p>
            <Second person={personInfo} />
        </div>
    );
};


export default First
