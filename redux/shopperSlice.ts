import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Import the StoreProduct interface
import { StoreProduct, UserInfo } from "../type"; // Adjust the path as needed

export interface ShopperState {
  cartItems: StoreProduct[];
  totalQuantity: number;
  userInfo: UserInfo | null;  
}

const initialState: ShopperState = {
  cartItems: [], // Store products in cart
  totalQuantity: 0, // Track total items in cart  
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (existingItem) {
        // existingItem.quantity += 1;
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },

    plusItem: (state, action)=>{
      const existingItem = state.cartItems.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (existingItem) {
         existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    minusItem: (state, action) =>{
      const productId = action.payload._id;
      
      const item = state.cartItems.find(
        (item:StoreProduct) => item._id === productId); 

        // if(item?.quantity === 1){
        //   item.quantity = 1;
        // }else if(item?.quantity === 0){
        //   removeFromCart(action.payload._id);
        // }else{
        //   item!.quantity--;
        // }

        if(item?.quantity === 0){
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== productId);   
            // state.totalQuantity = state.cartItems.reduce(
            //   (sum, item) => sum + item.quantity, 1);    
        }else{
            item!.quantity -= 1    
          }

          state.totalQuantity -=1;     
    },

    // removeCartItem : (state, action )=>{      
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item._id !== action.payload); 
    // }, 

    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item._id !== productId);

      state.totalQuantity = state.cartItems.reduce(
        (sum, item) => sum + item.quantity, 0);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,clearCart, removeFromCart, minusItem, plusItem  } = shopperSlice.actions;

export default shopperSlice.reducer;
