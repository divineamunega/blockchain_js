const Blockchain = function () {
	this.chain = [];
	this.newTransactions = [];
};

Blockchain.prototype.createNewBlock = function (
	nonce,
	previousBlockHash,
	hash
) {
	const newBlock = {
		index: this.chain.length + 1,
		timeStamp: Date.now(),
		transactions: this.newTransactions,
		nonce,
		hash,
		previousBlockHash,
	};

	this.newTransactions = [];
	this.chain.push(newBlock);

	return newBlock;
};

export default Blockchain;
