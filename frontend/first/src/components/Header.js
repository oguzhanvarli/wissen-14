const Header = (prop) => {
  console.log(prop.yazi)
  return(
    <div className="header">
        
        <h1>{prop.yazi}</h1>
        <h1>{prop.age}</h1>
        <h1>{prop.city}</h1>
      </div>
  )
}
export default Header