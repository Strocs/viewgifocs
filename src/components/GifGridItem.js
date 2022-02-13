

export const GifGridItem = ( { id, title, url } ) => {


    return (
        <div className="card animate_animated animate__fadeIn " key={ id }>
            <img src={url} alt={title}/>
            {/* <p>{title}</p> */}
        </div>
    )
}
