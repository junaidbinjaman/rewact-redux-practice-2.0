import { BUY_PHONE } from './phoneType'

export const buyPhone = (number = 1) => {
  return {
    type: BUY_PHONE,
    payload: number
  }
}