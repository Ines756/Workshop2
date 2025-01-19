import { PinataSDK } from "pinata-web3";
import dotenv from "dotenv";
dotenv.config();


const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "peach-electric-tapir-368.mypinata.cloud",
});

async function main() {
  try {
    const file = new File(["BONJOUR !"], "Testing.txt", { type: "text/plain" });
    const upload = await pinata.upload.file(file);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

await main();
