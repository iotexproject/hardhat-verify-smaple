import 'dotenv/config'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    iotex: {
      chainId: 4689,
      // from?: string;
      // gas?: "auto" | number;
      // gasPrice?: "auto" | number;
      // gasMultiplier?: number;
      url: 'https://babel-api.mainnet.iotex.io',
      // timeout?: number;
      // httpHeaders?: { [name: string]: string };
      accounts: [
        process.env.PRIVATE_KEY!
      ]
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHER",
    customChains: [
      {
        network: "mainnet",
        chainId: 4689,
        urls: {
          apiURL: "https://iotexscout.io/api",
          browserURL: "https://iotexscan.io"
        }
      },
      {
        network: "testnet",
        chainId: 4690,
        urls: {
          apiURL: "https://testnet.iotexscout.io/api",
          browserURL: "https://testnet.iotexscan.io"
        }
      }
    ],
  },
};

export default config;
