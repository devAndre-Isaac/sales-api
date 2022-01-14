export interface IRequestCreate {
  name: string;
  price: number;
  quantity: number;
}

export interface IRequestDelete {
  id: string;
}

export interface IRequestShow {
  id: string;
}

export interface IRequestUpdate {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
