import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Pagination = () => {
    const [nameList , setNameList] = useState([]);
  
    const [search , setSearch] = useState("");
    const limit = 20;
    const [currentPage , setCurrentPage] = useState(0);
    const [totalCount , setTotalCount] = useState(0);
    
  
    let offset = currentPage * limit;
  
    // useEffect(() => {
    //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=500")
    //   .then((response) => {
    //     setNameList(response.data.results);
    //     console.log(response,"nameList");
    //     setUrl(response.data.results.url);
    //   })
    // },[]);
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) =>{
          setNameList(res.data.results);
          setTotalCount(res.data.count);
      });
    },[currentPage,offset]);
  
    const totalPages = Math.ceil(totalCount / limit);
  
    // useEffect(() => {
  
    //  (async _ => {
    //   const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=500");
    //   setNameList(res.data.results); 
       
    //  })();
  
    // },[])
  
  
    return (
      <>
      <div className="App">
      <h1>Fetch Api</h1>
      <input type="text" placeholder='search the pokemon' onChange={e=> setSearch(e.target.value)}/>
      
      <button onClick={e => setSearch('pikachu')}>pikachu</button>
      <button onClick={e => setSearch('bulbasaur')}>bulbasaur</button>
     
  
      {nameList.filter((item)=>{
        if(search === " "){
          return item
        }else if(item.name.toLowerCase().includes(search.toLowerCase())){
          return item
        }return item
      }).map((item ,idx)=>{
        return <h4 key={idx}>{item.name}</h4>
      })}
    </div>
    <div style={{textAlign: "center"}}>
       <button onClick={ () => setCurrentPage((prev) => Math.max(prev -1 , 0))}>prev</button>
       <span>{currentPage + 1 } of {totalPages}</span>
       <button onClick={ () => setCurrentPage((prev) => prev + 1)}>next page</button>
    </div>
      </>
      
    );

};

export default Pagination;