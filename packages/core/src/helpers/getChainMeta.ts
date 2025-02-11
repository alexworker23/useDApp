import { Chain, ChainId } from '../constants'
import * as chains from '../model/chain'

export function getChainMeta(chainId: ChainId): Chain {
  const chain = Object.values(chains).find((chain) => chain.chainId === chainId)
  if (!chain) {
    throw new Error(`Chain ${chainId} does not exist`)
  }
  return chain
}
