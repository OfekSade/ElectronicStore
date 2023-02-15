import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase-config';


export default function EditItem({id, EditPrice, EditAvailabilty , finishEdit ,collection}) {
  
  const [NewPrice, setPrice] = useState(EditPrice);
  const [NewAvailabilty, setAvailabilty] = useState(EditAvailabilty);
  console.log("ID:", id);

  const handleUpdate = async(e) =>{
    e.preventDefault();



  if ('Screens' === collection ){
        const monitor = doc(db, 'Screens', id);
        await updateDoc(monitor, {
          price: NewPrice,
          in_stock: NewAvailabilty
        })
        finishEdit()

      }

  else if  ('Equipment' === collection ){
        const equipment = doc(db, 'Gaming-Equipment', id);
        await updateDoc(equipment, {
          price: NewPrice,
          in_stock: NewAvailabilty
        })
        finishEdit()
        
      }

  else if ('Hardware' === collection ){
      const hardware = doc(db, 'Hardware', id);
        await updateDoc(hardware, {
          price: NewPrice,
          in_stock: NewAvailabilty
        })
        finishEdit()
      }
  else{
    throw new Error(`Invalid document ID: ${id}`);
  }
}
  

        
      

  
    return (
    <div>
        <form onSubmit={handleUpdate} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <label>Edit Price</label>
            <input type='number' onChange={(e)=>setPrice((e.target.value))}
            className='form-control' value={NewPrice}/>


            <label>Edit Availability</label>
            <textarea type='text' onChange={(e)=>setAvailabilty(e.target.value)}
            className='form-control' value={NewAvailabilty}></textarea>
            
            <input type='submit' className='btn btn-success mt-2'/>
        </form>
    </div>
  )
}