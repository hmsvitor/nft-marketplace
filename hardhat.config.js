require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "975ee5d6512f4c3289c139177abfd387";

module.exports = {
  solidity: "0.8.4",
  network: {
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
};
