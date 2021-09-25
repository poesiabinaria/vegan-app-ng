export interface Food {
  food_id: number;
  name: string;
  category: string;
  defaultMeasure: string;
  values: {
    calories: number;

    vA: number;
    iron: number;
    calcium: number;
    zinc: number;

    carbohydrates: number;

    mono: number;
    o3: number;
    o6: number;
    trans: number;

    proteins: number;
    fenilalanina: number;
    histidina: number;
    isoleucina: number;
    leucina: number;
    lisina: number;
    metionina: number;
    treonina: number;
    triptofano: number;
    valina: number;
  };
}
