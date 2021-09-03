export type Context = {
  strokeStyle: string,
  lineWidth: string,
  clearRect: (x: number, y: number, width: number, height: number) => void,
  strokeRect: (x: number, y: number, width: number, height: number) => void
  stroke: () => void,
  beginPath: () => void,
  arc: (x: number, y: number, radius: number, from: number, to: number, direction: boolean) => void,
  moveTo: (x: number, y: number) => void,
  lineTo: (x: number, y: number) => void,
  drawImage: (ref: HTMLCanvasElement | null, x: number, y: number) => void
}