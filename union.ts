 let score: string | number = ""

 score = 345

 score = "anuj"

//  score = true


function getId(id: string | number): void{
  if(typeof id === 'string'){
    console.log(id.toLowerCase())
  }

  id = 2
    
}

// Arrays


const data1: string[] | number[] = [1,2,3]
const data2: string[] | number[] = ["1","2","3"]
const data3: (string | number)[] = [1,2,"3","anuj"]
const data4: (string | boolean)[] = [true,"3","anuj"]


let seatType: "aisle" | "middle" | "window"



export {}