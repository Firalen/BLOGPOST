function Menulist(props){
    return(
        <div className="menulist">
           <img src={props.image} alt="/" />
           <h2>{props.name}</h2>
           <h3>${props.price} </h3>
      </div>
    )
  
 }
 export default Menulist;