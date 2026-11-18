# GrillMaster POS

A lightweight, browser-based point-of-sale interface for a grill and burger restaurant. GrillMaster POS lets staff browse menu items, build a customer order, calculate the total in Sri Lankan Rupees (LKR), and manage products from the built-in admin panel.

## Features

- Responsive menu layout for burgers, sides, and drinks
- Add menu items to the current order
- Remove items from the order and calculate the running total
- Capture the customer name and place an order
- Add custom menu products with a selectable image
- Delete products from the menu
- Bootstrap-based responsive UI
- No backend or database required

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3 via CDN
- Local image assets

## Getting Started

### Prerequisites

Any modern web browser is sufficient. A local development server is recommended for consistent asset loading.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Anuradha-117/GrillMaster-POS.git
   cd GrillMaster-POS
   ```

2. Start a local server. For example, with Python:

   ```bash
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser.

You can also open `index.html` directly, although a local server is preferred.

## How to Use

1. Select **Add to Order** on a menu item.
2. Enter the customer name in the order panel.
3. Review or remove items and check the total.
4. Select **PLACE ORDER** to complete the current order.
5. Use **Admin Panel (Manage Products)** to add or delete menu items during the current session.

## Project Structure

```text
GrillMaster-POS/
├── index.html
└── assets/
    ├── CSS/
    │   └── style.css
    ├── Img/
    │   └── menu and branding images
    └── JS/
        └── app.js
```

## Data Behavior

The menu and cart are stored in JavaScript memory in the browser. Products added through the admin panel and orders are not persisted to a database, so the state returns to its defaults when the page is refreshed.

## Currency

Prices and totals are displayed in **LKR (Sri Lankan Rupees)**.

## License

No license has been specified for this project yet.