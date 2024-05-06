type bottle = {
  brand: string;
  type: "Gym" | "Regular" | "Adventure";
};

interface Bottle {
  brand: string;
  type: "Gym" | "Regular" | "Adventure";
  _id: "";
}

function identityOne<T extends bottle>(num: T): T {
  return num;
}

console.log(identityOne({ brand: "", type: "Adventure" }));

function identityTwo<Type>(num: Type): Type {
  return num;
}

// Arrays with Generics

function getMyArray<T,>(arr: T[]): T[] {
  return [];
}

function getMyArray2<T,>(arr: T[]): T {
  console.log(arr.length);
  return arr[3];
}
