// class User {
//   private name: string;
//   public email: string;
//   public readonly city: string = "Jalandhar";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

class User {
  constructor(
    public name: string,
    public email: string,
    private readonly id: string = ""
  ) {}
}

const userA = new User("Anuj", "anuj@anuj.com");

export default {};
