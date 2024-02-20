import { name } from "../config"

const POLKADOT_BLOCKS: number[] = [5921]
const KUSAMA_BLOCKS: number[] = []

export function checkSkipBlock(id: number) {
  if (name === 'sora-polkadot') return POLKADOT_BLOCKS.includes(id)

  return false
  // return KUSAMA_BLOCKS.includes(id)
}