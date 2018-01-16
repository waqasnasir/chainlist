module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
	 rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x95730b557Ea16aBA4A6b11F814eb3A2A544d682F", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
