---
sidebar_position: 1
---

# 🖧 Types of Nodes

## 🌐 What are nodes and why do they matter?

**Nodes** are computers running the Liberdus software that collectively keep the network online, secure, and decentralized. Instead of relying on a central server, Liberdus operates through many **independent nodes** around the world. This design makes Liberdus **censorship-resistant**, **fault-tolerant**, and **trustless**.

> The more nodes that exist, and the more geographically distributed they are, the stronger and more scalable the network becomes.

## 🧩 Validator Nodes

Like other Layer 1 blockchains, Liberdus runs on a network of globally distributed **validator nodes**. Validation is **permissionless**, allowing anyone to participate. Liberdus is unique because it **scales linearly** with each additional validator node, increasing **TPS**, **storage**, and **bandwidth** capacity.

There are **two types of validator nodes**:

### 🟢 Active Nodes

**Active nodes** participate directly in consensus and validation. All nodes start as standby nodes before being **randomly selected** to become active. The frequency of rotation is determined by the S:A ratio (Standby: to Active ratio)

**How it works:**

- Active nodes are rotated in and out of the set using a **First In, First Out (FIFO)** system.  
- They earn rewards based on **time spent** in the active set.  
- Once cycled out, they return to standby status until selected again.  
- Active nodes must maintain an **up-to-date shard state** to validate transactions.  

Each active node **directly increases the network’s TPS, storage, and bandwidth capacity.**

### 🟣 Standby Nodes

**Standby nodes** are not currently validating but are ready to join the network when needed and then are rotated in periodically based on the S:A ratio.

**How it works:**:

- They **don’t participate** in consensus or earn rewards until becoming active nodes.  
- Each standby node must **sync state data** before becoming active.  
- Standby nodes form a **scaling buffer**, ready to handle surges in TPS or sustained throughput increases.  
- The network frequently rotates standby nodes into the active set to keep all nodes profitable and synchronized.  
- All nodes after becoming active nodes will eventually become standby nodes again and then be re-rotated into the active set.

Standby nodes ensure a **constant pool of ready validators**, enabling greater decentralization, seamless autoscaling and the maintaining of network security.

## ⚖️ Why Active and Standby Nodes Both Exist

Liberdus’s **horizontal scaling** relies on maintaining both active and standby sets. This dual-node structure allows the network to:

- ⚡ Instantly scale during traffic surges  
- 🔄 Maintain decentralization via unpredictable rotation  
- 🛡️ Prevent attacks or control by any single node or group  
- 💰 Keep validator rewards fair and evenly distributed  

> This **active/standby split** is what enables Liberdus’s unique ability to scale horizontally, a core network innovation.

## 🗄️ Archiver Nodes

**Archiver nodes** (archivers) are responsible for **retaining and maintaining the full state and historical data** of the Liberdus network.  

**Roles**

- Store **all network data**, including transactions, receipts, and history.  
- Ensure a **complete and verifiable record** of the network’s lifetime state.  
- Do **not** participate in consensus, focusing instead on data integrity.  

**Rewards**

- Archivers are expected to earn **higher rewards** than validators due to:
  - Their essential data preservation role.  
  - Higher **hardware requirements**.  

At **mainnet launch**, there will be around **5 team-operated archivers**, gradually transitioning toward decentralization. A portion will always remain team-owned to **guarantee data integrity and availability**, although this will be gradually reduced along with network maturity.

## 📋 Active vs. Standby Nodes Comparison

| Aspect | Active Nodes | Standby Nodes |
|--------|---------------|---------------|
| **Role in Network** | Actively participate in consensus and validation. | Remain idle until randomly selected to join the active set. |
| **Node Rotation** | Periodically rotated into standby to maintain decentralization. | Randomly selected to replace active nodes that rotate out. |
| **Participation in Consensus** | Validate transactions and update shard state. | Do not validate or update state until activated. |
| **State Synchronization** | Must maintain up-to-date shard state. | Must sync state before activation. |
| **Assigned Roles** | Assigned to shards to handle transaction ranges. | Not assigned until becoming active. |
| **Scalability Contribution** | Directly increases TPS and processing power. | Ensures scaling pool readiness for increased demand. |
| **Rewards** | Earn LIB rewards for validation. | No rewards until activated. |
| **Staking Requirements** | Must meet the minimum LIB staking requirement. | Same requirement applies. |
| **Hardware Requirements** | Same as standby nodes. | Same as active nodes. |

## 🔁 Node Rotation

Both **active and standby nodes** participate in a **rotation process** where:

- Standby nodes are **randomly selected** to join the active set every 24 hours.  
- The **oldest active nodes** are rotated back to standby.  

**Security Advantages**

1. **Unpredictability:** Adversaries cannot predict which nodes will become active, reducing the risk of **Sybil attacks**.  
2. **Safety Through Turnover:** Compromised nodes are automatically rotated out, limiting long-term exposure.  

**The Standby-to-Active (S:A) Ratio**

This parameter controls how long nodes spend in each role.

| S:A Ratio | Time as Standby | Time as Active |
|------------|----------------|-----------------|
| **1:1** | ~50% | ~50% |
| **2:1** | ~67% | ~33% |

Adjusting the S:A ratio allows the network to optimize:

- **Security**
- **Decentralization**
- **Resilience**
- **Node Rewards**

## 🧑‍💻 Who Runs a Node and Why?

Running a node is **optional** but encouraged; anyone can operate one with no gatekeepers or permissions.

People choose to run nodes to:

- Earn LIB rewards for securing the network  
- Support decentralization and censorship-resistance  
- Contribute to a privacy-focused global messaging network  
- Strengthen network capacity and resilience  

> **Anyone can run a node.**  
> No permission. No central authority. Just participation.
