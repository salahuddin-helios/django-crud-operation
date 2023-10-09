const Information=({user,handleDelete})=>{
    console.log(user);
 return <li>{user.name}
 <button onClick={()=> handleDelete(user.id)}>X</button>
 </li>
}


export default Information