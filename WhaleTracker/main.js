/* Moralis init code */
const serverUrl = "https://ihske4nzotaz.usemoralis.com:2053/server";
const appId = "fXc5jakJEpXz7ho7PPt1QzPwBNLTtuqWKnjx2Hiu";
Moralis.start({ serverUrl, appId });

//Get all of the NFTs that are CURRENTLY in a wallet. Listed in Colleced on profile.
const GetNFTs = async function(){

  const options = { address: '0x3ba53cea97bfff5a303ffc66dc4f390383bcd62e', /*limit: '1'*/};
  const NFTsInWallet = await Moralis.Web3API.account.getNFTs(options);

  //set da tings to da tings
  const results = NFTsInWallet.result;

  const nftname = NFTsInWallet.result[0].name;
  const tiname = NFTsInWallet.result[0].token_id;

  //console.log(results);

  //put dem in da text
  document.querySelector(".colloction-name").innerText = nftname; 
  document.querySelector(".colloction-tokenid").innerText = "#" + tiname;

}



const GetTransactions = async function(){
  
  const options = { chain : 'eth', address: '0x3ba53cea97bfff5a303ffc66dc4f390383bcd62e', limit: '10'};
  await Moralis.Web3API.account.getNFTTransfers(options);

  // const nftpic = transfersNFT.result[0].name;

  console.log(await Moralis.Web3API.account.getNFTTransfers(options));

}

//Call all funcitons
GetNFTs();