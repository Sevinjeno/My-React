  function UserData(cb){
      setTimeout(()=>{
       cb({user:"Sevin"}) 
      },1000)
  }

  function TurfData(user,cb){
    console.log("User = ",user)

      setTimeout(()=>{
      cb({Turf:"Ambernath"})
      },1000)

  }


  function Location(location){
    console.log(location?.Turf)
  }

    UserData((user)=>{
      TurfData(user,(turf)=>{
           Location(turf)
      })
    })

  function UserData(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({user:"Sevin"}) 
        },1000)
  })
}
  function TurfData(user){
    console.log("User",user)
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({Turf:"Ambernath"})
        },1000)
  })
}



  function Location(location){
    console.log(location?.Turf)
  }

    UserData().then(e=>TurfData(e)).then(e=>Location(e))