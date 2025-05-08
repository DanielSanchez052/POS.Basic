import { Transaction } from "./transaction.type"

export type Sale = {
  transactions: Transaction[]
  subtotal: number
  iva: number
  ivaTax: number
  total: number
  discount: number
}
