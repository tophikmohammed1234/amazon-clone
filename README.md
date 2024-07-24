# Amazon Clone

This project is an Amazon clone built using React, Firebase, Stripe, Node.js, and Vite. It replicates key features of Amazon, including user authentication, product browsing, and payment processing.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#Usage)
- [Contributing](#Contributing)

## Features

- User Authentication: Sign up and sign in using Firebase Authentication.
- Product Browsing: Browse products fetched from an API.
- Shopping Cart: Add and remove products from the shopping cart.
- Payment Processing: Make payments using Stripe.

## Technologies Used

- Frontend: React, Vite
- Backend: Firebase, Node.js
- Payments: Stripe
- Styling: CSS

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tophikmohammed1234/amazon-clone.git
   cd amazon-clone
2. Install dependencies:
 ```bash
    npm install
```
3. Setup Firebase:
   - Create a Firebase project at Firebase Console.
   - Enable Authentication and Firestore Database in the Firebase project.
   - Obtain your Firebase configuration.
4. Setup Stripe:
  - Create a Stripe account at Stripe.
  - Obtain your Stripe API keys.
5. Setup Node.js Backend:
  - Ensure Node.js is installed on your machine.
  - Set up your backend server in the server directory (or wherever your server code is located).

## Environment Variables

Create a .env file in the root of your project and add the following environment variables:
```bash
VITE_REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
VITE_REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Usage
1. Start the development server:
   ```bash
   npm run dev
2. Start the Node.js backend server:
   ```bash
   node server/index.js
3. Build for production:
   ```bash
   npm run build
4. Preview the production build:
   ```bash
   npm run serve

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

