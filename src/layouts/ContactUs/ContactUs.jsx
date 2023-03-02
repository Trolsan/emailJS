import {useRef} from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {

    const refForm = useRef ()

    const handleSubmit = (event) => {
        event.preventDefault()

        const serviceId = "service_lc1dnjm"
        const templateId = "template_zbukdyi"
        // 3 parametro
        const apikey = "hIpYgnV4LIHOIjcx8"

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text) )
        .catch (error => console.error( error ))

    }


  return (
    <form ref={refForm} action='' onSubmit={handleSubmit}>

    <div className='header-contact'>

      <h2>Contact Us</h2>
      <p> Please fill this form </p>

    </div>

    <fieldset className='field-name'>
      <label className='symbol-required name'>Name</label>
      <input name='username' type='text' placeholder='Ej: Santiago S.L' required/>
    </fieldset>

    <fieldset className='field-email'>
      <label className='symbol-required' name="email">Email</label>
      <input type='email' placeholder='Ej: santiago@gmail.com' name='email' id='email' required/>
    </fieldset>

    <fieldset className='field-message'>
      <label className='symbol-required'>Message</label>
      <textarea maxLength="500" placeholder='type yout message' name='message' cols='30' rows='' required/>
    </fieldset>

    <button className='btn-send'>Send</button>

    </form>
  )
}
