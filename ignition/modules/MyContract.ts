import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const MyContractModule = buildModule("MyContract", (m) => {
  const name = m.getParameter("name", 'ZZTEST');
  const symbol = m.getParameter("symbol", 'ZZTEST');

  const myContract = m.contract("MyContract", [name, symbol], {
  });

  return { myContract };
});

export default MyContractModule;
