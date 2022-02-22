let searchsdf = {
    "apiKey": "8NvDLGX37pcZRYEQXXZgEN2uxykkTj1iYX8fGaYifUF7BrPhfJichBPxXdPqbDrY",

    searchWallet: function(walletaddress){
        fetch("https://deep-index.moralis.io/api/v2/" + walletaddress + "/nft?chain=eth&format=decimal");
    }
}

/*let rankings = {
    "apiKey": "UEF8JKBAR66JPNIYUJZX2XMA7ZYDCG4V7T",

    fetchWallet: function(){
        //mabey comment these out poop
        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress2").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount2")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress3").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount3")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress4").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount4")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress5").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount5")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress6").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount6")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress7").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount7")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress8").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount8")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress9").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount9")
        });

        fetch("https://api.etherscan.io/api?module=account&action=balance&address="
        + document.querySelector(".walletaddress10").innerText+"&tag=latest&apikey=" 
        + this.apiKey).then((response) => response.json()).then((data) => {
            this.displayaWallet(data, ".walletamount10")
        });
    },

    displayaWallet: function(data, walletamountclass){
        const { result } = data;
        document.querySelector(walletamountclass).innerText = result + ".eth";
        //".walletamount"
    },
};

rankings.fetchWallet();
*/