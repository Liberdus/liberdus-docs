---
sidebar_position: 5
---

# Consensus

## Proof of Quorum Optimistic (PoQo)

Liberdus utilizes **[Proof of Quorum Optimistic (PoQo)](/docs/Glossary#-poqo-proof-of-quorum-optimistic)**, an advanced consensus protocol specifically designed for **sharded networks with large execution shard sizes**. Execution shards are a group of nodes responsible for processing and validating transactions for a specific portion of the network.

PoQo has evolved from earlier **PoQ variants** to address previous inefficiencies by optimizing how nodes reach consensus, while maintaining **decentralization** and **scalability**. Unlike traditional quorum-based systems that rely on extensive message exchanges or gossip, PoQo minimizes communication overhead by introducing a **collector node model**.

> A **[collector node](/docs/Glossary#-collector-node)** is an existing active node selected from within the execution shard. Nodes in the execution shard submit their votes to a **deterministically selected collector node**, which aggregates the votes into a **transaction receipt** and distributes it back to the shard. This streamlined approach reduces the protocol's complexity from **quadratic to linear**, enabling Liberdus to maintain **high throughput** even as the network scales.

There are a multitude of benefits for Liberdus using PoQo. By leveraging **deterministic selection** and **sequential fallback mechanisms** for collector nodes, PoQo ensures that consensus is reached efficiently, even in the event of node failures or delays. This design is resilient against malicious behavior, as nodes failing to perform can be **penalized**, and evidence of misbehavior can lead to **swift corrective actions**. Furthermore, the use of a **supermajority threshold** guarantees robustness while enabling the network to handle real-time, high-volume transactions effectively.

PoQo’s innovation lies in balancing **efficiency**, **security**, and **decentralization**, making it an ideal fit for **Liberdus’s dynamic and scalable architecture**.

## Summary of PoQo Advantages

| Feature | Description |
|----------|-------------|
| **Consensus Type** | Proof of Quorum Optimistic (PoQo) |
| **Optimized For** | Sharded networks with large execution shards |
| **Consensus Complexity** | Reduced from *O(n²)* to *O(n)* via collector model |
| **Collector Node** | Selected deterministically from active nodes within each shard |
| **Fault Tolerance** | Sequential fallback ensures continued operation during node failure |
| **Security Mechanisms** | Node penalties and evidence-based corrective actions |
| **Throughput** | Scales linearly with network size |
| **Threshold** | Supermajority (2/3+) required for consensus |
| **Core Strengths** | Efficiency • Scalability • Decentralization |

## Important

- **Collector-based voting** minimizes redundant communication and boosts consensus speed.  
- **Sequential fallback** guarantees liveness- if one collector fails, another takes over.  
- **Penalization system** ensures validators remain honest and performant.  
- **Supermajority rule** maintains Byzantine fault tolerance across shards.  
- PoQo enables Liberdus to **scale horizontally without central bottlenecks**, aligning with its mission of censorship-resistant global communication.
