export interface UserData {
  profile: {
    name: string;
    age: number;
    gender: string;
    weight: number; //kg,
    height: number;
  };

  foods: [
    { id: number; qty: number; measure: string },
    { id: number; qty: number; measure: string },
    { id: number; qty: number; measure: string },
    { id: number; qty: number; measure: string }
  ];

  values: any;
}
