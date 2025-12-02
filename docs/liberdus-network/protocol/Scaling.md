---
sidebar_position: 3
---

# Scaling

## Introduction

Liberdus inherits its **scaling architecture** from **Shardus**, which was built to overcome the limitations of traditional blockchain scaling. While most networks can only scale vertically or through limited forms of sharding, **Liberdus combines multiple scaling mechanisms**: horizontal scaling, linear scaling, and autoscaling, to ensure that it can **grow efficiently, maintain low fees, and stay fully decentralized** no matter how large the network becomes.

Each scaling layer serves a different purpose:

- **Horizontal Scaling** increases raw capacity by adding more nodes.  
- **Linear Scaling** ensures that every new node proportionally increases throughput.  
- **Autoscaling** allows the network to grow or shrink dynamically based on real-time demand.  

Together, these mechanisms make Liberdus one of the few decentralized systems capable of maintaining **global scalability and affordability**, even at massive transaction volumes.

## Horizontal Scaling

From a hardware perspective, **Liberdus** is designed to scale **horizontally**. [Horizontal scaling](/docs/Glossary#-dynamic-state-sharding) is a method of increasing a network's capacity by **adding more nodes**. In contrast, **[vertical scalability](/docs/Glossary#-vertical-scalability)** increases capacity by upgrading existing nodes; adding extra **RAM, CPU, or storage** to the same machines. Liberdus uses **horizontal scaling** to increase **Throughput (TPS)**, **Storage** and **Bandwidth**.

Each additional node added to the network directly increases the **overall capacity**.

### Benefits of Horizontal Scaling

- Preserves **decentralization**, since new participants can join without needing expensive hardware.  
- Avoids **hardware centralization**, where only wealthy participants can afford to operate high-end nodes.  
- Enhances **redundancy and reliability**, improving fault tolerance.  
- Allows the network to **handle sudden TPS surges** by seamlessly incorporating additional nodes.  

By scaling horizontally, Liberdus ensures sustainable growth while keeping node operation **accessible, equitable, and censorship-resistant**.

## Linear Scaling

Traditional Web3 networks that use **[network sharding](/docs/Glossary#-network-sharding)**, **transaction sharding**, or **static state sharding** have a fixed threshold where each shard becomes “full”. This threshold is determined by the maximum number of nodes permitted within a shard. Once the shard reaches that limit, a new shard must be created; a process known as **[stepwise scaling](/docs/Glossary#-stepwise-scaling)**.

### Limitations of Stepwise Scaling

- Requires **manual intervention and planning**.  
- May cause **network disruptions or downtime**.  
- Can introduce **efficiency bottlenecks** between shards.

In contrast, **Liberdus employs linear scaling**. With **[linear scaling](/docs/Glossary#-linear-scaling)**, the network’s capacity increases **proportionally** with each new **active node**.

For example: If each active Liberdus node provides **2 TPS**, and there are **1,000 active nodes**, the total network capacity is **2,000 TPS**. Adding two new nodes increases total throughput to **2,004 TPS**, demonstrating perfectly **predictable, linear growth**.

Linear scaling allows Liberdus to maintain consistent performance, **adapt dynamically**, and expand **without friction**.

## Autoscaling

In major Web2 platforms, backend systems can **dynamically scale up or down** based on traffic. During high-demand periods (e.g., holiday sales), server capacity might increase fivefold; then automatically shrink when demand drops. This ensures performance remains stable while minimizing unnecessary operating costs.

However, most Web3 networks **lack a decentralized version of autoscaling**, leaving them inefficient and unable to adapt resource usage in real time.

Liberdus, however, **inherits autoscaling** directly from **Shardus**.

### How Autoscaling Works in Liberdus

- The network automatically scales **up (adding nodes)** or **down (removing nodes)** to meet real-time resource needs.  
- A **desired network size parameter** determines optimal capacity.  
- Nodes independently and autonomously **vote** and **reach consensus** on whether the network should grow, shrink, or remain stable.  
- Adjustments are made according to **current transaction load** and **storage requirements**.

This means Liberdus can efficiently adapt to changing workloads, scaling globally during spikes in message volume and conserving energy during quieter times, **without central coordination**.
