import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


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

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
               resolve(productos); 
            }, 2000);
        });
        getData.then( res => setData(res));
    }, [])

    return <ItemDetail data = {data}/>
}

export default ItemDetailContainer;