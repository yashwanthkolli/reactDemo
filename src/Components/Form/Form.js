import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [nameE, setNameE] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const n = e.target.name.value
        const em = e.target.email.value
        const p = e.target.phone.value

        if(!(n&&em&&p)){
            alert('Enter a valid inputs')
            return
        } else{
            setName(n)
            setEmail(em)
            setPhone(p)
        }
    }
    const handleNameChange = (e) => {
        if(isNaN(e.target.value[e.target.value.length - 1])){
            setNameE(e.target.value)
        } else {
            e.target.value = nameE
            alert('Enter Valid name')
        }
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input onChange={handleNameChange} type='text' placeholder='Name' id='name' name='name' />
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Email' id='email' name='email' />
                <label htmlFor='phone'>Phone No</label>
                <input type='number' placeholder='Phone No' id='phone' name='phone' />
                <button type='submit'>Submit</button>
            </form>
            {
                name ? <div>Name: {name}</div> : null
            }
            {
                email ? <div>Email: {email}</div> : null
            }
            {
                phone ? <div>Phone: {phone}</div> : null
            }
        </div>
    )
}

export default Form