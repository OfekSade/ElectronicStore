import { useNavigate} from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase-config';

export default function Products({id , name, img, in_stock, price, Overview, collection }) {

  const navigate = useNavigate()

  const navigateToContacts = () => {

   navigate('/items/Monitor/viewItem' , {
     state: {
      id,
       name,
       img,
       in_stock,
       Overview,
       price,
       collection
     }
   });

 };

 const handleDelete = async() => {
  const equipDelete = doc(db, 'Gaming-Equipment', id);
  try{
    await deleteDoc(equipDelete)
  } 
  catch(error){ alert(error)}
}

return (
  <div className="card" style={{width: "18rem;"}}>
      <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}₪</p>
          <p className="card-text">Availability: {{in_stock}? "in stock" : "not in stock"}</p>
          
      </div>
      
      <div className="d-grid gap-2">
        <button className='btn btn-primary m-1' onClick={navigateToContacts}>View Item</button>
        <button className='btn btn-danger m-1 float-right' onClick={()=>handleDelete()}>Delete</button>
      </div>
  </div>
)
}