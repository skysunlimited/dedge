import maker from "./maker";
import dedge from "./dedge";
import erc20 from "./erc20";
import dappsys from "./dappsys";
import uniswap from "./uniswap";

// note: a lego is just a Javascript object with two fields: address and abi

const legos = {
  maker,
  dedge,
  erc20,
  dappsys,
  uniswap,
};

export default legos;
