
function Comment({item:{id,name}}) {
  return (
    <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
          <h5 className="card-title text-center h2">Id : {id}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">Name:{name}</h6>        
        </div>
      </div>
    </div>
  )
}

export default Comment