interface IHouse {
  "детская комната": string
  чердак: string
  кухня: null
  подвал: number
  спальня?: string
  сад: {
    оранжерея: string[]
    бассейн: string | number
  }
  isFun:true
}
