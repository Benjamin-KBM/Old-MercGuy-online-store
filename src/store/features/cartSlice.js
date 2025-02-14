import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cardInfo: [
    {
      id: nanoid(),
      image:
        "https://www.truck1.sg/img/Spare_parts_Mercedes_Benz_OM441LA-xxl-16739/16739_4704806896197.jpg",
      title: "Mercedes-Benz OM441LA",
      text: "Power output: 230 hp",
      price: 13000,
    },
    {
      id: nanoid(),
      image:
        "https://www.truck1.sg/img/Truck_MERCEDES_BENZ_OM605-xxl-9914/9914_7982955084.jpg",
      title: "Mercedes-Benz OM605 ",
      text: "Power output: 148 hp",
      price: 23000,
    },
    {
      id: nanoid(),
      image:
        "https://www.truck1.sg/img/Spare_parts_Mercedes_Benz_OM441LA-xxl-51/51_7269355823091.jpg",
      title: "Mercedes-Benz OM641LA",
      text: "Power output: 340 hp",
      price: 25000,
    },
    {
      id: nanoid(),
      image:
        "https://www.truck1.sg/img/Spare_parts_Mercedes_Benz_OM441LA_Mercedes_Benz-xxl-39516/39516_2973737957227.jpg",
      title: "Mercedes-Benz OM451LA",
      text: "Power output: 355 hp",
      price: 27000,
    },
    {
      id: nanoid(),
      image:
        "https://www.enginefinder.co.za/wp-content/uploads/2021/04/b6d247bf7e4446a4b1a5e206059996b8.jpg",
      title: "Mercedes-Benz Om662",
      text: "Power output: 300 hp",
      price: 10000,
    },
    {
      id: nanoid(),
      image:
        "https://www.enginefinder.co.za/wp-content/uploads/2020/10/274px-OM611Motor.jpg",
      title: "Mercedes 202 Compressor Engine",
      text: "Power output: 250 hp",
      price: 19000,
    },
  ],
  cart: [],
  balance: 0,
};

export const addToCartSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    updateBalance: (state, action) => {
      state.balance = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload.id);
      state.balance = state.balance - action.payload.price;
    },
  },
});

export const { updateBalance, addToCart, removeFromCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
