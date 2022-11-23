
const Item = ({product}) => {
    return <div>
        <img src={product.img} alt="Imagen Libro"/>
        <li>{product.titulo}</li> 
    </div>  

}

export default Item;