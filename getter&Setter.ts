class User {
  private _id: number = 1;

  constructor(public name: string, public email: string) {}

  get getNameOfUser(): string {
    return this.name;
  }

  set setNameOfUser(newName: string) {
    this.name = newName;
  }
}

const userA = new User("Anuj", "anuj@anuj.com");

userA.setNameOfUser = "Anuj"
console.log(userA.getNameOfUser);

export default {};
