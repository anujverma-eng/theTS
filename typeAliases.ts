type MyString = String


type User = {
  name: MyString;
  email: MyString;
  isPaid: boolean;
}


function createUser(user: User):User{
  return {name: "",email:"",isPaid:true}
}

createUser( {name: "",email:"",isPaid:true})

export {}
