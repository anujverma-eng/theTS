function addTwo(num: number): number{
  return num+2
}

let answer = addTwo(2)


function signUp(name: string, email: string, isPaid: boolean= false): string{

  return `Name is: ${name}, Email is: ${email} & IsPaid is: ${isPaid}`
  
}


let user = signUp("Anuj", "anuj@codestudio.com")

export {}
