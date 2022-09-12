import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0x36c6b3089fAA8f2717C9c63Ca73B7784c88029BE';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/wLSom8H0ho6-67-JRHFeFBx0kE0N0lFm',
  },
};
