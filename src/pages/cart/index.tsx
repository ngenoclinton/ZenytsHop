import Cart from '@/components/cart/Cart';
import Image from 'next/image';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variation?: string;
}

const index = () => {

  return (
    <Cart/>
  );
};

export default index;
