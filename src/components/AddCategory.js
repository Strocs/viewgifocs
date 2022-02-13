import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {
	
    const [inputValue, setInputValue] = useState('')    

    const handleInputChange = e => {
        //define lo que estoy escribiendo

        setInputValue(e.target.value)
    }
    
    const handleSubmit = e => {
        //papra que no se borre 
        e.preventDefault()

        if( inputValue.trim().length > 0) {
            
            // 1. al poner el argumento en bruto como props
            //se llama props.setCategories()
            //para no hacer eso se desestructura
            // 2. al poner el callback con cats, toma el arreglo que viene del setcategories, y luego hace el spead operator agregandole el nuevo valor de inutValue
            // setCategories( cats => [...cats, inputValue])
            
            //para reemplazar la última búsqueda (personal)
            setCategories([inputValue])
            // luego borra lo que escribimos del input
            setInputValue('')
        }
    }



    return (
        //onSubmit se acciona cuando apretamos enter en el form
		<form onSubmit={ handleSubmit }>
			<input 
                type="text"
                placeholder={'Busca tus gifs favoritos!'}
                value={ inputValue }
                //para que se muestre lo que estoy escribiendo
                onChange={ handleInputChange } 
            />
		</form>
	)
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
