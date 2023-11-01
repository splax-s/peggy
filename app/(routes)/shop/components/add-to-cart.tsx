'use client'

import useCart from "@/hooks/use-cart"

import { Product } from "@/types"

export default function AddToCart({ item }: { item: Product }) {
    const addItem = useCart().addItem
    return (
        <a href="#" className="add-cart" onClick={() => addItem(item)}>
            + Add To Cart
        </a>
    )
}
