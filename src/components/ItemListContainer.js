import { useState } from "react";
import ItemList from "./ItemList";

const productos = [
  {
    id: "1",
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
  },
  {
    id: "2",
    titulo: "Festin de Cuervos",
    autor: "George RR Martin",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442477_1.jpg?id_com=1113",
  },
];


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const productsList = new Promise((resolve) => setTimeout(() => {resolve(productos);},3000)
    );

    productsList.then((data) => setProducts(data));
    
    return <div>
        <ItemList products={products}/>
    </div>;
};

export default ItemListContainer;