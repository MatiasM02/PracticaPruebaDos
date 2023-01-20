export type AuthUser={
  username: string;
  password: string;
}

export type AuthUserRespuesta={
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  token: string
}

export type addUser={
  firstName: string;
  lastName: string;
  age: string;
  username: string;
  password: string;
  birthDate: string;
  gender: 'male' | 'female';
}

export type addUserRespuesta={
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  username: string;
  password: string;
  birthDate: string;
  gender: 'male' | 'female';
}

export type ProductosRespuesta={
  products: [
    {
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }
  ],
  total: number;
  skip: number;
  limit: number
}
