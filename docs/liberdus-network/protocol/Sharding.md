---
sidebar_position: 1
---

# 🪓 What is Sharding

## 🧩 Sharding

Sharding is widely regarded as a key solution to the scalability trilemma, enabling decentralized networks to process transactions more efficiently without compromising security or decentralization. This structure reduces computational load on individual nodes and increases overall network throughput. Sharding in web3 can be categorized into three main types: network sharding, transaction sharding and lastly state sharding which has two subcategories: [static state sharding](/docs/Glossary#-static-state-sharding)and dynamic state sharding. Each method has its own distinct advantages and technical nuances.

### 🌐 Network Sharding
[Network sharding](/docs/Glossary#-network-sharding) involves dividing the network’s nodes into shards. Each shard processes transactions independently reducing the load on individual nodes. By enabling multiple shards to operate in parallel, network sharding improves overall scalability and optimizes resource utilization across the network.

### 💸 Transaction Sharding
Transaction sharding determines the way in which transactions are distributed among shards. In this form of sharding each individual shard processes a subset of transactions, which in turn enables parallel transaction processing, significantly increasing the network’s throughput. However, this method does not address the storage and computational limitations of maintaining the full network state.

### 🧱 State Sharding
State sharding, referred interchangeably from this point onward as static state sharding, is the most common form of sharding in web3. In state sharding, each shard is assigned a fixed subset of the network's state data. Nodes within the shard are responsible for managing this data subset and processing the associated transactions. While this approach to sharding improves scalability in comparison to unsharded networks, it lacks flexibility. Shards remain static in terms of their assigned data, which makes it difficult to reallocate resources or adjust the network based on activity or load distribution.

### ⚡ Dynamic State Sharding
[Dynamic state sharding](/docs/Glossary#-dynamic-state-sharding) represents the most advanced and efficient method of sharding. In dynamic state sharding, each node in the network stores a unique subset of the network’s state data, while also overlapping these subsets to ensure redundancy and data availability. Unlike [static state sharding](/docs/Glossary#-static-state-sharding)which lacks flexibility, dynamic state sharding enables linear scalability by allowing the network’s capacity to grow efficiently with each new node added.

## 💬 Why It Matters for Liberdus and Decentralized Communication

Dynamic state sharding forms the backbone of Liberdus’s scalable infrastructure, allowing millions of transactions to be processed in parallel across a distributed network. Unlike centralized messengers that rely on monolithic servers, Liberdus uses sharding to distribute both storage and computation; ensuring that no single node, entity, or server controls the flow of communication.

This architecture is vital for social messaging because true privacy and censorship resistance depend on decentralization. With sharding, the system can scale to global message volumes while preserving user autonomy, fault tolerance, and data integrity. In short, dynamic state sharding transforms the decentralized messaging dream into a practical, performant reality.
