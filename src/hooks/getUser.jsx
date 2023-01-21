import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

const GetUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [fecha, setFecha] = useState(0);

  const { userId } = useParams();

  useEffect(()=>{          
    const db = getFirestore()
    const queryCollection = collection(db, 'user')
    
    const queryCollectionFilter =  query(queryCollection, where('userId', '==', userId))

    getDocs(queryCollectionFilter)
    .then(resp =>  {
      setUser( resp.docs.map(e => ({ id: e.id, ...e.data() }) ) )
      setSaldo( resp.docs.map(e => (e.data().saldo) ) )
      setFecha( resp.docs.map(e => (e.data().fecha) ) )
    } )
    .catch( err => console.log(err) )
    .finally(() => setLoading(false))  
}, [userId])

  return [user[0], saldo[0], fecha[0], loading];
};

export default GetUser;
