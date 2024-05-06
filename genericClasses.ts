interface Course {
  name: string;
  type?: string;
}

class MyCourses<T extends Course> {
  public cart: T[] = [];
  constructor(cart: T[]) {
    this.cart = cart;
  }

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const m = new MyCourses([{name:"anuj"}])

m.addToCart({name:""})

