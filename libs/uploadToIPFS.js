import { Web3Storage } from "web3.storage";
// import Compressor from "compressorjs";

export function makeStorageClient() {
  return new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVFNjNCNEU2NkFCQTljYzg5Q2IyQjliNDExMUY3NDk5Mjc3YjU0NmQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mjc5MzkxODU4MDksIm5hbWUiOiJkYmVhdHMifQ.FtSaoUWl1cimU0beIVbakmvpGaE_U6LVFDpw2Pja2po",
  });
}

export async function uploadFile(files) {
  // const compressedFile = await new Promise((resolve) => {
  //   new Compressor(files, {
  //     quality: 0.6,
  //     success: (result) => {
  //       resolve(result);
  //     },
  //   });
  // });
  const client = makeStorageClient();
  const cid = await client.put([files]);
  return cid;
}
