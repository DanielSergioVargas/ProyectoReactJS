import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import {data as itemMock} from "../mocks/item.mocks";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise( resolve => {
      setTimeout(() => {
        resolve(itemMock[0]); 
      }, 2000);
      });
    getData.then( res => setData(res));
  }, [])

  if (!data) {
    return <p>Loading. . .</p>
  }

  return <ItemDetail data = {data}/>
  
}

export default ItemDetailContainer;