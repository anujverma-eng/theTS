function addTwo(num: number): number{
  return num+2
}

let answer = addTwo(2)


function signUp(name: string, email: string, isPaid: boolean= false): string{

  return `Name is: ${name}, Email is: ${email} & IsPaid is: ${isPaid}`
  
}

// function getValue(val: number): string{
//   if(val>5){
//     return true
//   }

//   return "200 ok"
// }

// Arrow function in TS

const setVal = (s: string): string=> { return ""}
const setVal2 = (s:string=""): string => "" // Default arrow without curly braces 

function consoleErrors(msg: string): void{
  console.log(msg)
}

function fail(msg: string): never{
  throw new Error(msg)
}

let user = signUp("Anuj", "anuj@codestudio.com")

export {}
