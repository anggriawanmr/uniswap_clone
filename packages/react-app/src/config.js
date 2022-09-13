import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0x06cD5E725D2Cec701E8c1312Cb820E3dDa60646e';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/wLSom8H0ho6-67-JRHFeFBx0kE0N0lFm',
  },
};
