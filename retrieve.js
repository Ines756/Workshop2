import { PinataSDK } from "pinata-web3";
import dotenv from "dotenv";
dotenv.config();


const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "peach-electric-tapir-368.mypinata.cloud",
});

async function main() {
  try {
    const data = await pinata.gateways.get("bafkreigpmwsutgwzkvgyyipho7qqltygslpkctvtsj5zrelmp5e5nqnnyu");
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

main();
