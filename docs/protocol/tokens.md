---
sidebar_position: 1
hide_title: false
title: Tokenomics
---
Yeti's multi-token protocol currently consists of the following four tokens, and each plays a critical role in how the protocol works to maintain peg:

### YTC Token - (yeti.ink)

The YTC token is designed to be used as a medium of exchange, and is intended to have many other use cases as the Yeti ecosystem grows. The built-in stability mechanisms within the protocol aim to maintain YTC's peg of 10,000 YTC = 1 Bitcoin (BTC) in the long run.

:::info Note: that YTC actively pegs via an algorithm, but that does not mean it will be valued at 10,000 YTC to 1 BTC at all times as it is not collateralized. YTC is not to be confused for a crypto or fiat-backed stablecoin.

:::

### xYTC - (Protocol Governance Token)

xYTC is the governance token of the Yeti DAO. It can be obtained by staking YTC. This helps to keep YTC supply limited while providing another means of earning yield for YTC holders, among other planned use cases.

### [xYTC - Yeti Protocol Governance Token](xytc-ytc-staking.md)

### YSHARE - (Yeti Shares)

YTC Shares (YSHARE) are one of the ways to measure the value of the Yeti ink. Protocol and shareholder trust in its ability to consistently maintain YTC close to peg. During epoch expansions the protocol mints YTC and distributes it proportionally to all YSHARE holders who have staked their tokens in the Boardroom.

YSHARE has a maximum total supply of 70,001 tokens distributed as follows:

1. Treasury/DAO Allocation: 5,500 YSHARE vested linearly 12 months*

2. Team Allocation: 5,000 YSHARE vested linearly over 12 months

3. Rewards: 59,500 YSHARE are allocated for incentivizing liquidity providers in two farming pools for 12 months

4. Initial mint: 1 YSHARE minted upon contract creation for the initial pool

:::tip The Yeti ink. team will use the treasury funds in any way that they feel is best for the long-term success of the protocol. 

:::

### YBOND - (YTC Bond)

The main purpose of YTC Bonds (YBOND) is to help incentivize fluctuations in the YTC supply during epoch contraction periods. When the TWAP (time-weighted average price) of YTC falls below 10,000 to 1 BTC, YBONDs are issued and can be bought with YTC at the current price. Exchanging YTC for YBOND burns YTC tokens, taking them out of circulation (deflation) and helps to get the price back up to peg. These YBOND can be redeemed for YTC when the price is above peg in the future, plus a premium based on how high above peg we currently are. This conversely creates inflation and subsequent sell pressure for YTC when it is above peg, helping to push it back toward 10,000 YTC to 1 BTC ratio.

:::note Unlike early algorithmic protocols, YBONDs do not have expiration dates.

:::

All YBOND holders will be able to redeem their YBOND for YTC tokens as long as the treasury has a positive YTC balance, which typically happens when the protocol is in epoch expansion periods.