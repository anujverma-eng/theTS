interface User {
  readonly dbId: number,
  name : string,
  email: string,
  isPaid?: number,
  getInfo: ()=> string,
  getInfo2(): string,
  setInfo?(name: string, email: string): string
}

const user: User = {
  dbId: 124,
  name: "Anuj",
  email: "anuj@anuj.live",
  getInfo: ()=> "",
  getInfo2: ()=> "",
}

export {}