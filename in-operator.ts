interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(acc: User | Admin): boolean {
  if ("isAdmin" in acc) {
    return acc.isAdmin;
  }

  return false;
}


