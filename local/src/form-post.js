import React from 'react'

export default function FormPost(){
    let[PostedData,setPostedData] = React.useState('');
    const form = React.useRef()

    const onSubmitForm = (event =>{
        event.preventDefault()
        const formData = new FormData(form.current)
        const formEnt = new Object.fromEntries(formData.entries())
        fetch(/api/form-post,{
            method:'POST',
            body: JSON.stringify(formEnt),
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.text())
        .then(result => setPostedData(result))
        .catch(err => alert(err))
    })
    const inputStyle = {
        margin: '5px 0',
    }
    return(
        <div style={{margin:'30px'}}>
            <form ref={form} onSubmit={onSubmitForm}>
                <div>ติดต่อเรา</div>
                <input type="text" name="name" size="43" placeholder="ชื่อ"
                style={inputStyle}/><br/>
                <input type="email" name="email" size="43" placeholder="อีเมล"
                style={inputStyle}/><br/>
                <input type="text" name="name" size="43" placeholder="ชื่อ"
                style={inputStyle}/><br/>
            </form>
        </div>
    )
}