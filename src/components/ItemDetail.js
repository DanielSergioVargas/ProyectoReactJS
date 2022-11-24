


export const ItemDetail = ({data}) => {
    return <div className="container">
        <div className="details">
            <img className="detail-img" src={data.img} alt="Imagen Libro"/>
            <div className="description">
                <h1>{data.titulo}</h1>
            </div>
        </div>
    </div> 

}

export default ItemDetail;