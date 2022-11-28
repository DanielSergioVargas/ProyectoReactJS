


const ItemDetail = ({data}) => {
    console.log({data});

    return <div className="container">
        <div className="details">
            <img className="detail-img" src={data.img} alt="Imagen Libro"/>
            <div className="description">
                <h1>{data.titulo}</h1>
                <h2>{data.autor}</h2>
            </div>
        </div>
    </div> 

}

export default ItemDetail;