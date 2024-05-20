import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Firr from '../pages/Fir'
import {db} from '../firebase'
import { getDocs,collection, addDoc } from 'firebase/firestore';
const Home = () => {
  const[movieList,setMovieList]=useState([]);
  const moviesCollectionRef = collection(db,"movies")
  useEffect(()=>{
    const getMovielist=async()=>{
      try{
        const data = await getDocs(moviesCollectionRef);
        const filtereddata = data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id,
        }));
        setMovieList(filtereddata);
      }
      
      catch(err){
        console.error(err);
      }
         
    };
    getMovielist();
  }
  ,[])
const navigate = useNavigate()
const[newmovie,setNewmovie]=useState("")
const[newrelease,setNewrelease]=useState(0)
const[isnewmovie,setIsnewmovie]=useState(false)
const onSubmitmov=async()=>{
  try{
    await addDoc(moviesCollectionRef,{title:newmovie,release:newrelease,recievedanoscar:isnewmovie})
  }
  catch(err){
    console.error(err);
  }
 
}
  return (
    <>
    <div className='home'>
      <h1>PEDRO'S PIZZARIA</h1>
      <h2>ORDER ANY PIZZA TO FIT ANY TASTE</h2>
      <button onClick={()=>navigate('menu')}>ORDER</button>
    </div>
     <Footer />
     <Firr />
     <input placeholder='titlename'  onChange={(e)=>setNewmovie(e.target.value)}/>
     <input placeholder='relea<se date' type='number' onChange={(e)=>setNewrelease(Number(e.target.value))} />
     <input type='checkbox' checked={isnewmovie} onChange={(e)=>setIsnewmovie(e.target.checked)}/>
     <label>receivedanoscar</label>
     <button type='submit' onClick={onSubmitmov}>submit</button>
     <div>
      {
        movieList.map((movie)=>(
          <div>
            <h1>{movie.title}</h1>
            <p>Date:{movie.release}</p>
          </div>
        ))
      }
     </div>
    </>
    
  )
}

export default Home
