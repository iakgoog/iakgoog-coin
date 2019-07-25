const { Block, Blockchain } = require('./blockchain');

const iakgoogCoin = new Blockchain();
iakgoogCoin.addBlock(new Block(1, new Date().toString(), { amount: 4 }));
setTimeout(() => {
    iakgoogCoin.addBlock(new Block(2, new Date().toString(), { amount: 6 }));

    console.log(`Is blockchain valid?: ${iakgoogCoin.isChainValid()}`);

    iakgoogCoin.chain[1].data = { amount: 100 };

    console.log(`Is blockchain valid?: ${iakgoogCoin.isChainValid()}`);
}, 1000);
