import 'dotenv/config'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: 'https://babel-api.mainnet.IoTeX.io',
      accounts: [ process.env.PRIVATE_KEY! ],
      chainId: 4689
    },
    testnet: {
      url: 'https://babel-api.testnet.IoTeX.io',
      accounts: [ process.env.PRIVATE_KEY! ],
      chainId: 4690,
    }
  },
  etherscan: {
    apiKey: "arbitrary value",
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
