interface UserData {
  profile: {
    name: string;
    age: number;
    gender: string;
    weight: number; //kg,
    height: number;
  };

  foods: any;

  values: any;
}

export const USERDATA: UserData = {
  profile: {
    name: 'Vanessafada',
    age: 26,
    gender: 'F',
    weight: 90, //kg,
    height: 1.5,
  },

  foods: [
    { id: 12, qty: 0, measure: 'g' },
    //{ id: 13, qty: 0, measure: 'g' },
    //{ id: 14, qty: 0, measure: 'g' },
    { id: 15, qty: 0, measure: 'g' },
  ],

  values: {},
};
