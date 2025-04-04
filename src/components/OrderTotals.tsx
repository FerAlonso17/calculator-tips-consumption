import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderTotalProps = {
    order : OrderItem[]
    tip:number
    saveOrder: ()=>void
}

export default function OrderTotals({order,tip,saveOrder}:OrderTotalProps) {

    const subtotal= useMemo(()=>order.reduce((total,item)=>total+(item.quantity * item.price),0),[order])
    const subTip= useMemo(()=>subtotal*tip,[tip,order])
    const total= useMemo(()=>subtotal+subTip,[tip,order])

    return (
        <>
            <div className=" space-y-3">
                <h2 className="font-black text-2xl">Totales y propina</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(subTip)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button
                className="w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-10"
                disabled={total===0}
                onClick={saveOrder}
            >
                Guardar orden
            </button>
        </>
    )
}
