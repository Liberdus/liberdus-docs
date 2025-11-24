---
sidebar_position: 3
---

import ValidatorProfitabilityCalculator from '@site/src/components/ValidatorProfitabilityCalculator';

# 💵 Rewards

Active nodes earn **LIB tokens** as rewards for validating transactions and ensuring network uptime. Rewards are distributed periodically and are proportional to each validator’s participation during active periods.

## 🤩 Reward Distribution

- Active validators participate in consensus, validate transactions, and earn LIB rewards.
- Rewards are distributed periodically while active.
- Additional stake beyond the minimum does not increase rewards.
- Rewards must be claimed via a transaction; automatic compounding is not supported.

## 🏈 Profitability Model

Validator profitability depends on uptime, performance, and operational costs.

- APY = earned rewards ÷ staked USD value.
- Only rewards while in the active set are counted; standby periods do not accrue rewards.
- Validators should account for operational costs (hosting, bandwidth, maintenance).
Net profit = rewards − costs.

**Example:**
Stake: $2,000 (~4,000 LIB)
Estimated APY: 13.14%
Net Income = Rewards − Operating Costs

<ValidatorProfitabilityCalculator />

> Important: The reward parameter is hourly and set by the LDAO. The amount of time in the active set is tracked and then also when it exits. Rewards are then dispersed once the node is rotated out of the active set after 2 to 3 cycles (2 to 3 minutes).

## ✍️ Best Practices

- Claim rewards periodically to avoid accumulation risk.  
- Monitor validator performance through the [Liberdus dashboard](https://test.liberdus.com:3030/).  
- Plan for operational expenses when estimating profitability.
