import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {node_url, accounts} from './utils/network';

const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY;
const MATICVIGIL_APP_ID = process.env.MATICVIGIL_APP_ID;

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
  networks: {
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    polygonmumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${MATICVIGIL_APP_ID}`,
      //url: `https://polygon-mumbai.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 80001,
      accounts: accounts('rinkeby'),
      gasPrice: 20000000000,
      gas: 90000000,//15000000,
      gasMultiplier: 10,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
    },
    polygonmainnet: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${MATICVIGIL_APP_ID}`,
      //url: `https://polygon-mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 137,
      accounts: [`0x${POLYGON_PRIVATE_KEY}`],
      gasPrice: 20000000000,
      gas: 90000000,//15000000,
      gasMultiplier: 10,
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: 'src',
  },
};
export default config;
