// import Web3 from "web3";

const {Web3} = require("web3");

export * from "./layout"
export * from "./vaults-info-preview"
export * from "./header"
export * from "./main-preview"
export * from "./main-vaults"
export * from "./how-it-works"
export * from "./footer"
export * from "./vaults-info"

const httpProvider = new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/");
const web3 = new Web3(httpProvider);

export const getBalance = async (address:string) => {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceBNB = Web3.utils.fromWei(balanceWei, 'ether');
  return balanceBNB;
};
