---
sidebar_position: 8
---

# Glossary

### Active Node

A validator node currently participating in consensus and transaction validation. Active nodes directly contribute to network throughput, storage, bandwidth, and earn staking rewards.

### Archiver Node

A specialized node that stores the full historical ledger and network state. Archivers do not participate in validation but ensure long-term data availability and integrity.

### Autoscaling

A mechanism that automatically adjusts the number of nodes based on network demand. The network expands or contracts dynamically through node voting and consensus.

### Capped Elastic Supply

A token issuance framework where the total token supply is capped, but issuance rates adjust dynamically based on network demand, validator rewards, and economic conditions.

### Collector Node

A temporarily selected active node responsible for aggregating votes within its shard during consensus. It compiles results and broadcasts a finalized receipt to all nodes.

### Cycle

A short time interval (approximately one minute) representing the smallest unit within Liberdus.

### Dynamic State Sharding

A sharding method where each node holds a changing subset of the network state. It allows linear scalability and automatic load balancing across all nodes.

### ERC-20

ERC-20 is a technical standard for fungible tokens on the Ethereum blockchain, ensuring interoperability across wallets, exchanges, and smart contracts.

### Fee Burning

The permanent removal of LIB tokens through transaction and toll fees. This creates continuous deflation and long-term token scarcity.

### Governance Vote

An on-chain voting process through which LDAO members decide on proposals.

### Horizontal Scaling

The process of increasing network capacity by adding more nodes rather than upgrading hardware. Each additional node improves TPS, storage, and bandwidth.

### LDAO (Liberdus DAO)

The decentralized governance body of Liberdus. Token holders can propose and vote on network upgrades, parameters, and other major decisions.

### LIB (Liberdus Token)

The native currency of the Liberdus network used for transactions, staking, tolls, and governance. It is deflationary over the long term due to continuous fee and penalty burns.

### Linear Scaling

A scaling model where each node contributes equally to performance growth. This ensures predictable network expansion without bottlenecks.

### Network Sharding

The division of network nodes into smaller groups, each operating independently. It improves scalability by reducing load per node.

### Node Rotation

The recurring process that rotates standby nodes into the active set and vice-versa. Rotation ensures fairness, decentralization, and mitigates risks such as Sybil and liveness attacks.

### PoQo (Proof of Quorum Optimistic)

Liberdus’s consensus protocol that achieves agreement efficiently within sharded networks. It uses collector nodes to aggregate votes, reducing communication overhead.

### PoS (Proof of Stake)

Liberdus’s Sybil deterrence mechanism requiring validators to lock LIB tokens as economic collateral. It aligns incentives and secures the network against fake identities.

### Quorum

The minimum number of validator votes required to achieve consensus within a shard. It ensures that decisions reflect a majority agreement of honest nodes.

### S/A Ratio (Standby-to-Active Ratio)

A parameter determining how many standby nodes exist relative to active nodes. It determines how long nodes spend in each state and helps balance scalability, rewards, and network resilience. 100 standby nodes with 100 active nodes would, for instance, be a 1:1 ratio, whereas 200 standby nodes and 100 active nodes would be a 2:1.

### Slashing

A penalty applied to validators that act maliciously or fail to perform duties. A portion of their staked LIB is burned to maintain honesty and reliability.

### Standby Node

A validator node that is fully synced with the network but not currently validating. Standby nodes wait for rotation into the active set and do not earn rewards until becoming active.

### Stable Price

An oracle-based system that pegs staking requirements to a stable USD value using a moving-average window. It keeps validator costs predictable even when the LIB price fluctuates.

### Staking

The act of locking LIB tokens as collateral to participate in network validation. It secures the network and allows validators to earn rewards. Staking on Liberdus is denominated in USD but staked in actual LIB.

### Shard

A subset of the Liberdus network containing a group of nodes responsible for processing a portion of total transactions and state data. Shards enable parallel execution and scalability.

### Static State Sharding

A fixed sharding model where each shard permanently handles the same portion of state data. It improves scalability but lacks flexibility compared to dynamic sharding.

### Stepwise Scaling

A limited scaling model found in static-shard systems where new shards are created only after old ones are full. It causes network jumps rather than smooth growth.

### TPS (Transactions Per Second)

A measurement of network throughput showing how many transactions the network can/is processing per second.

### Toll

A small, user-defined fee required to send unsolicited messages. It prevents spam and allows creators or influencers to monetize incoming communication.

### Transaction Fee

A small LIB payment made to process a message or transaction on the network.

### Transaction Sharding

A distribution model where each shard processes a subset of all transactions. It increases throughput but does not address overall storage limitations.

### Top-Up

An optional amount staked above the minimum requirement. It provides a buffer to prevent ejection from the network if slashed or if the minimum staking requirement is raised.

### Unstaking

The process of withdrawing a validator’s staked LIB after leaving the active set. Validators must wait a few cycles before unstaking becomes available.

### Validator

A network participant who locks LIB tokens to process transactions, produce receipts, and maintain consensus. Validators operate as either active or standby nodes depending on their position in the rotation cycle.

### Vertical Scalability

A scaling approach where performance is improved by increasing the hardware capacity of individual nodes.

*This glossary will continue to expand as new Liberdus mechanisms and governance systems are introduced.*
