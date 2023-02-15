import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import Products from '../items/equipment'
import AddItem from './AddItem';


export default function GamingEquipment() {

    const [products, setequips] = useState([]);
    const [newItem, setNewItem] = useState(false)

    useEffect(()=>{

        const getEquips = async (db) => {
            const equipCol = collection(db, 'Gaming-Equipment');

            const equipSnapshot = await getDocs(equipCol);

            const equipList = await equipSnapshot.docs.map(doc =>(
                {
                    id: doc.id, 
                    data: doc.data()
                }
            ))
            setequips(equipList)
        }

        getEquips(db);

    }, [products])
    

    return (
        <div className='container'>

                <div class="d-grid gap-2">
                
                <button className='btn mb-2' style={{backgroundColor:'darkcyan'}}
                onClick={()=>setNewItem(true)}>Add a new Item</button>

                {newItem && 
                <AddItem 
                id={products.id}
                coll ="Equipment"
                onClose={()=>setNewItem(false)}/>}

             </div>

            {products.length > 0 && products.map(products => (
                <div key={products.id}>
                    <Products
                    id={products.id}
                    name={products.data.name}
                    img={products.data.img}
                    in_stock={products.data.in_stock}
                    price={products.data.price}
                    Overview={products.data.Overview}
                    collection = "Equipment"
                    />
                </div>
            ))}
    
        </div>
      )

     
    }
   