import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
	
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState([''])
    
    // const handleAdd = () => {
    //     //no agregar contenidos al arreglo con push, usar setcategories
    //     // setCategories( [...categories, 'Cazador X'] )
    //     setCategories( cats => [...cats, 'Cazador X'] )
    // }

    return (
		<>
			<h2 className="animate__animated animate__infinite animate__slow animate__bounce">ViewGIFOCs</h2>
            <AddCategory setCategories={ setCategories }/>
			<hr />

            <ol>
                { categories.map( category => 
                    <GifGrid 
                        key={ category }
                        category={ category }
                    /> 
                )}
            </ol>
		</>
	)
}
