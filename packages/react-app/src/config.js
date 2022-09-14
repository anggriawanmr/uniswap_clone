import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/wLSom8H0ho6-67-JRHFeFBx0kE0N0lFm',
  },
};
