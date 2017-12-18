module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "1513533831820" // match any network
    }
  },
	rpc: {
		host: "localhost",
		gas: 4712388,
		port: 8545
	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	}
};
