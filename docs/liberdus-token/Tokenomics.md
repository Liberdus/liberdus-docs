---
sidebar_position: 1
---

# 🏷️ Tokenomics

## 🌟 Overview
Liberdus’s tokenomics are designed to align economic incentives with the network’s [**horizontally scaling**](/docs/Glossary#%EF%B8%8F-horizontal-scaling) architecture. By leveraging Shardus’s [**dynamic state sharding**](/docs/Glossary#-dynamic-state-sharding) and [**autoscaling**](/docs/Glossary#-autoscaling) the Liberdus network can dynamically expand or contract based on transaction demand, and its tokenomics model must factor this in.

Liberdus employs a **capped elastic supply model** that ensures network scalability, validator profitability, and long-term sustainability without compromising decentralization. The system utilises **issuance and burning** to reach a natural equilibrium between supply and demand over time.

For a more comprehensive breakdown of Liberdus’s tokenomics model and design, please see the [Liberdus tokenomics page](https://liberdus.com/tokenomics/).

## 🪙 LIB Fundamentals

The native token of the Liberdus network is **LIB**, which also serves as its **ticker symbol**. LIB functions both as a **coin** on the Liberdus network and a **bridged token** on smart contract platforms like **Ethereum, BNB Chain, and Polygon**.

| Attribute | Detail |
|------------|---------|
| **Maximum Supply** | 210,000,000 LIB |
| **Divisibility** | LIB can be subdivided to 18 decimal places |
| **Elastic Supply** | Can enter inflationary, disinflationary, or deflationary phases based on network conditions |
| **Governance Immutability** | The 210M cap cannot be altered, even through governance |

## ⚙️ Token Utility

LIB serves multiple roles across the Liberdus ecosystem:

| Function | Description |
|-----------|--------------|
| **Staking** | Users stake LIB to secure the network, validate transactions, and earn rewards. |
| **Governance** | Holders can participate in on-chain governance decisions. |
| **Rewards** | Distributed to validators, contributors, and community participants for network activity. |
| **Gas** | LIB is used to pay transaction fees for both messages and token transfers. |
| **Tolls** | Users can set tolls for inbound messages. 10% of each toll is burnt as an anti-spam mechanism. |
| **Tx Fees Burnt** | 100% of transaction fees are burnt, introducing continuous disinflation. |
| **Validator Penalties** | All slashed tokens from misbehaving validators are permanently burnt. |

The LIB token’s **deflationary nature** is enforced through constant burning across multiple dimensions- fees, tolls, penalties, and more- ensuring **long-term scarcity**.

## 💰 Token Distribution

| Category | Allocation | Amount (Millions) | Distribution Period | Notes |
|-----------|-------------|-------------------|---------------------|--------|
| **Direct Contributors** | 25% | 52.5 | 2 years | 2M LIB minted every 4 weeks for development, design, and R&D. |
| **Operating Expenses** | 10% | 21 | 2 years | 1M LIB minted per period; unused supply redirected to liquidity providers and users. |
| **Shardus Token (ULT) Holders** | 10% | 21 | 2 years | Distributed to ULT holders post-mainnet to reward early contributors. |
| **Other Communities** | 25% | 52.5 | 2 years | Airdrops to verified users from partner ecosystems and platforms. |
| **Network Operations & Node Rewards** | 30% | 63 | Minted as needed | Covers validator incentives, liquidity provisioning, and ongoing development. |
| **Total** | **100%** | **210M LIB** |- | Capped, never to be exceeded. |

> **Important:** The maximum supply will never be fully reached, all transaction, toll, penalty, and governance fees are **permanently burnt**.

## 🚫 Fair Launch & No Private Funding

Liberdus launched **fairly**: with **no private sales**, **no VC rounds**, and **no discounted early allocations**.  
Every LIB in circulation is **earned** through contribution, node operation, or liquidity provision.

This ensures:
- No early investors or insiders hold disproportionate control.  
- Public value creation, not private capture.  
- Long-term decentralization and community trust.

## 💠 Monetary Policy

Liberdus’s monetary policy is designed for **scarcity, adaptability, and sustainability**.

| Mechanism | Description |
|------------|-------------|
| **Capped Elastic Supply** | LIB can enter inflationary or deflationary phases depending on network demand, but total supply can never exceed 210M. |
| **Autoscaling Alignment** | Node rewards automatically adjust to scaling needs- higher network load yields proportionally higher validator incentives. |
| **Fee & Burn Coupling** | All network activity (messages, transactions, tolls, and governance) burns LIB, maintaining supply balance. |
| **Validator Sustainability** | Node operators receive consistent, predictable rewards designed to remain profitable even during low-demand periods. |

This ensures that as Liberdus adoption grows, **issuance and burning dynamically adjust** to preserve economic equilibrium.

## ⚖️ Design Considerations

Liberdus’s horizontally scaling architecture introduces unique economic requirements:

- Node profitability must remain stable even as total node count changes.  
- Standby nodes must be incentivized to ensure instant autoscaling capacity.  
- Issuance and burning must stay in equilibrium to preserve network security and token value.

Unlike vertically scaled systems, Liberdus’s throughput depends on **number of nodes**, not hardware power.  
Maintaining an optimal [**Standby-to-Active (S:A) ratio**](docs/Glossary#%EF%B8%8F-s-ratio-standby-to-active-ratio) is vital.

The adaptive tokenomics model balances this ratio dynamically:
- **High profitability** → increases standby nodes (boosts scalability).  
- **Low profitability** → reduces standby nodes (conserves resources).  

✅ This ensures **efficient scaling** without excessive inflation or waste.

## 🔄 Adaptive Issuance Model

Liberdus rejected traditional linear or halving-based issuance models (e.g., Bitcoin, Solana) because they:
- Create unpredictable APY fluctuations.  
- Undermine validator stability during bear markets.  
- Cause wasteful emissions during bull markets.  

Instead, Liberdus employs an **adaptive issuance model**, dynamically maintaining equilibrium between:
- **LIB issued and LIB burnt**, and  
- **Node profitability and network scalability**.  

This design keeps validator rewards competitive, maintains decentralization, and prevents long-term inflationary drift.

## 🧱 Long-Term Sustainability

As adoption grows:
- **Transaction and toll burns** will exceed new issuance.  
- LIB will gradually become **ultra-deflationary**.  
- Node rewards will rely increasingly on **organic network activity**, not new supply.  

This creates a self-reinforcing cycle: **Use → Burn → Scarcity → Value** ensuring Liberdus’s monetary ecosystem remains sustainable indefinitely.
