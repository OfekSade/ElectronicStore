import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import Hardware from '../items/Hardware'
import AddItem from './AddItem';


export default function TheHardware() {

    const [hardware, setequips] = useState([]);
    const [newItem, setNewItem] = useState(false)

    useEffect(()=>{

        const getEquips = async (db) => {
            const equipCol = collection(db, 'Hardware');

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

    }, [hardware])
    

    return (
        <div className='container'>

            <div class="d-grid gap-2">
                
                <button className='btn mb-2' style={{backgroundColor:'darkcyan'}}
                onClick={()=>setNewItem(true)}>Add a new Item</button>

                {newItem && 
                <AddItem 
                id={hardware.id}
                coll ="Hardware"
                onClose={()=>setNewItem(false)}/>}

             </div>

            {hardware.length > 0 && hardware.map(hardware => (
                <div key={hardware.id}>
                    <Hardware
                    id={hardware.id}
                    name={hardware.data.name}
                    img={hardware.data.img}
                    in_stock={hardware.data.in_stock}
                    price={hardware.data.price}
                    Overview={hardware.data.Overview}
                    collection ="Hardware"
                    />
                </div>
            ))}
    
        </div>
      )

     
    }
   