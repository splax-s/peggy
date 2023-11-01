'use client'

import Image from 'next/image'
import Link from 'next/link'

import cart from '@/img/icon/cart.png';
import useCart from '@/hooks/use-cart';

export default function CartIcon() {
    const items = useCart().items
    return (
        <Link href="/cart">
            <Image src={cart} alt="cart icon" /> <span>{items.length}</span>
        </Link>
    )
}
