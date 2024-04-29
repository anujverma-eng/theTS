type User = {
  readonly _id: string;
  name: string;
  email: string;
  isPaid?: boolean
}

const obj: User= {
  _id:"",
  name:"",
  email:""
}

obj.email="Anuj@anuj.com"
// obj._id="" 

export {}