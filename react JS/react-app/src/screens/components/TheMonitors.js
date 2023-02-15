import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import Monitors from '../items/Monitor';
import AddItem from './AddItem';




export default function TheMonitors() {

    const [screens, setequips] = useState([]);
    const [newItem, setNewItem] = useState(false)

    useEffect(()=>{

        const getEquips = async (db) => {
            const equipCol = collection(db, 'Screens');

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

    }, [screens])
    

    return (


        <div className='container'>
            <div class="d-grid gap-2">
                
                <button className='btn mb-2' style={{backgroundColor:'darkcyan'}}
                onClick={()=>setNewItem(true)}>Add a new Item</button>

                {newItem && 
                <AddItem 
                id={screens.id}
                coll ="Screens"
                onClose={()=>setNewItem(false)}/>}
             </div>



            {screens.length > 0 && screens.map(screens => (
                <div key={screens.id}>
                    <Monitors
                    id={screens.id}
                    name={screens.data.name}
                    img={screens.data.img}
                    in_stock={screens.data.in_stock}
                    price={screens.data.price}
                    Overview={screens.data.Overview}
                    collection ="Screens"
                    />
                </div>
            ))}
    
        </div>
      )

     
    }
   