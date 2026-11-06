# BifrostPad (`$BIFROST`)

> **One token. Two chains. One click. The twin-listing protocol for Robinhood Chain & Elysium.**

<div align="center">
  [![Contract Address](https://img.shields.io/badge/Contract-Robinhood%20Chain-green?style=for-the-badge)](https://explorer.robinhood.com/)
  [![Ticker](https://img.shields.io/badge/Ticker-%24BIFROST-blue?style=for-the-badge)](#)
  [![Platform](https://img.shields.io/badge/Venue-Robinhood%20Chain%20%C3%97%20Elysium-brightgreen?style=for-the-badge)](https://explorer.robinhood.com/)
</div>

---

### 🪙 Token Details

| Attribute | Details |
| :--- | :--- |
| **Protocol Name** | **BifrostPad / Bifrost** |
| **Ticker** | **$BIFROST** |
| **Primary Network** | Robinhood Chain (EVM L2) |
| **Twin Network** | Elysium |
| **Launch Venue (Leg 1)** | [ponsfamily on Robinhood Chain](https://ponsfamily.com/launchpad) |
| **Launch Venue (Leg 2)** | [Obol / Kleos / BOXA / BifrostHook on Elysium](https://obol.world/launch) |
| **Official Website** | `bifrostpad.com` |

---

## ⚡ Key Highlights

- **🌌 Twin-Listing Protocol ("Both, or None")**: Compose token parameters once (name, ticker, logo, supply, quote assets). A single submission fans out simultaneously to **ponsfamily** (Robinhood Chain) and an **Elysium pad** (Obol, Kleos, BOXA, or BifrostPad).
- **🛡️ BifrostHook (Uniswap v4 Hooks)**: Direct launch into Uniswap v4 factory hooks with dynamic swap fees, anti-snipe surcharge decay, and configurable fee routing (Creator, Holders, Burn, Split).
- **📊 Real-Time Dual-Leg Board**: Every launch carries both legs side-by-side with independent status verification, ensuring partial or failed launches are never hidden.
- **⚡ Zero Gas Friction**: Bifrost signs deployments and covers gas fees for both legs during the dual submission.

---

## 🛠 Tech Stack

- **Frontend**: React 18, TanStack Router (`@tanstack/react-router`), Tailwind CSS, Lucide Icons
- **Design System**: High-density aurora gradients, interactive orbital twin-nodes, glassmorphic tech-surfaces
- **Networks**: Robinhood Chain (ETH gas) & Elysium (HYPE gas)
- **Deployment**: Static Edge / Vercel SPA Ready

---

## 🌐 Local Development

To run BifrostPad locally:

```bash
# Using Node serve
npx serve -l 3000

# Or using Python HTTP server
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 License

Licensed under the [Apache-2.0](LICENSE) License.
