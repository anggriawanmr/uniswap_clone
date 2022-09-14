import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0xA445E13fb02CA05C11DFE3945A1968F45549F97e';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/wLSom8H0ho6-67-JRHFeFBx0kE0N0lFm',
  },
};
