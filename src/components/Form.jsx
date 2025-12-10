import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'

const Form = () => {
    const {handleSubmit, register, formState } = useForm({
        defaultValues: {
             name: '',
             email: '',
             phone: '',
             continent: '',
             password: '',
        }
    })
    const onSubmit= (values) => {
      console.log('Nuevo socio registrado', values);
    }
  return (
    <div className='form-container'>

        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Nombre completo: </label>
        <input id="name" type="text"
          {...register('name',{
            required: { 
                value: true, 
                message: "Es necesario escribir tu nombre" }}
           )}/>
        {formState.errors.name && <p>{formState.errors.name.message}</p>}

        <label htmlFor="email">Email: </label>
        <input id="email" type="email"
          {...register("email", {
            required: { 
                value: true,
                message: "El email es obligatorio" }
          })}
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}

        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "La contraseña es obligatoria" },
            minLength: { value: 8, message: "Debe tener al menos 8 caracteres" }
          })}
        />
        {formState.errors.password && <p>{formState.errors.password.message}</p>}

        <label htmlFor="phone">Teléfono: </label>
        <input id="phone" type="tel"
          {...register("phone", {
            required: { 
                value: true,
                message: "Escribe tu teléfono" }
          })}
        />
        {formState.errors.phone && <p>{formState.errors.phone.message}</p>}

        <label htmlFor="continent">¿Qué continente prefieres para viajar?: </label>
        <select id="continent" {...register("continent")}>
            <option value="">-</option>
            <option value="Europa">Europa</option>
            <option value="Asia">Asia</option>
            <option value="África">África</option>
            <option value="América">América</option>
            <option value="Oceanía">Oceanía</option>
        </select>
          <br />

          <input 
           type='checkbox' 
           id="terms" {...register('terms',{
            required: { value: true, message: "Debes aceptar los términos"}
          }
          )} />
          <label htmlFor='terms'>Acepto los términos y condiciones</label>
          {formState.errors.terms && <p>{formState.errors.terms.message}</p>}
          <br />
        <button type='submit' disabled={!formState.isDirty}>Enviar</button>
      </form>
    </div>
  )
}

export default Form