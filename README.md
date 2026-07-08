# 🚀 Shopify Free Shipping Progress Bar 

A high-performance, dynamic progress bar for Shopify stores designed to increase **Average Order Value (AOV)**. This project is built as a **Shopify Theme App Extension** (Online Store 2.0).

---

## ✨ Features
- **Real-time AJAX Updates:** The bar updates instantly when customers add or remove items from their cart without a page refresh.
- **Fully Customizable:** Merchants can edit the goal amount, colors, and success messages directly within the Shopify Theme Editor.
- **Zero Theme Footprint:** Since it uses a Theme App Extension, it does not inject messy code into the merchant's theme files. It is safe to install and uninstall.

---

## 🛠 Project Structure
The repository follows the official Shopify extension requirements:
- `/blocks`: Contains `shipping-bar.liquid` (The UI and configuration schema).
- `/assets`: Contains `shipping-bar.js` (Dynamic logic) and `shipping-bar.css` (Styling).

---

## 🚀 How to Use (For Developers)

### 1. Prerequisites
- You need a [Shopify Partner Account](https://partners.shopify.com/).
- Install the [Shopify CLI](https://shopify.dev/docs/apps/tools/cli).

### 2. Implementation
1. Initialize a new Shopify App project:
   ```bash
   shopify app init
