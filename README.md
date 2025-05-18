# SasMrts Repository

This repository contains the `SasMrts` application, a monorepo managing a React-based online store with Stripe integration for payments.

## Live Deployment - Github Pages
- https://garyhuaang.github.io/sas-mrts/
- Stripe express server is not active and not permitted with my current Github pages plan
- AWS BE deployment for Stripe WIP

## Project Structure

The project is an Nx monorepo with the following key components:

- **`apps/store`**: The main frontend React application.
  - `src/app/app.tsx`: The root component of the store application.
  - `vite.config.ts`: Vite configuration, including pointing to the environment variable directory.
- **`apps/store/stripe-server`**: A Node.js/Express backend server dedicated to handling Stripe operations.
  - `server.ts`: The main server file that processes Stripe payment intents and checkout sessions.
  - `.env`: (To be created by user) Contains Stripe API keys and other sensitive information.
  - `tsconfig.json`: TypeScript configuration specific to the server, using CommonJS modules.
- **`libs/pages`**: Contains shared page components, including:
  - `src/lib/Checkout.tsx`: The component responsible for rendering the Stripe payment element and handling the checkout process.
- **`tsconfig.base.json`**: The base TypeScript configuration for the monorepo, generally configured for ESNext modules.

## Technologies Used

- **Nx**: Monorepo management tool.
- **React**: Frontend JavaScript library for building user interfaces.
- **Vite**: Frontend build tool and development server.
- **Node.js & Express**: Backend framework for the Stripe server.
- **Stripe**: Payment processing platform.
  - `@stripe/stripe-js`: Stripe.js for client-side operations.
  - `@stripe/react-stripe-js`: React components for Stripe.js.
  - `stripe` (Node.js library): For server-side Stripe API interactions.
- **TypeScript**: Superset of JavaScript adding static typing.
- **dotenv**: For loading environment variables from a `.env` file.

## Setup and Running the Application

Follow these steps to get the application running locally:

### 1. Prerequisites

- Node.js (which includes npm)
- Stripe account with API keys (publishable key, secret key) and a tax rate configured if you wish to use the manual tax example.

### 2. Clone the Repository

```bash
git clone <repository-url>
cd sas-mrts
```

### 3. Install Dependencies

Install the necessary dependencies from the root of the monorepo:

```bash
npm install
# or
yarn install
```

### 4. Configure Environment Variables

The Stripe server and the frontend application require environment variables to function correctly.

Create a file named `.env` in the `apps/store/stripe-server/` directory with the following content:

```env
# For the frontend (Vite requires the VITE_ prefix)
VITE_STRIPE_PUBLISH_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY

# For the backend server
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY

# Optional: Stripe Tax Rate ID for an 8% tax (if you followed the manual tax setup)
# Replace with your actual Tax Rate ID from your Stripe Dashboard
STRIPE_8_PERCENT_TAX_RATE_ID=txr_YOUR_STRIPE_TAX_RATE_ID
```

**Important Notes:**

- Replace `pk_test_YOUR_STRIPE_PUBLISHABLE_KEY`, `sk_test_YOUR_STRIPE_SECRET_KEY`, and `txr_YOUR_STRIPE_TAX_RATE_ID` with your actual Stripe keys and Tax Rate ID.
- The `envDir` option in `apps/store/vite.config.ts` is configured to look for `.env` files in `apps/store/stripe-server/`. This is why the frontend variable `VITE_STRIPE_PUBLISH_KEY` is also placed here.

### 5. Run the Stripe Backend Server

The Node.js server for Stripe operations needs to be running independently. Open a terminal and run:

```bash
npx ts-node apps/store/stripe-server/server.ts
```

This server will typically run on `http://localhost:3000` (or the port specified in `apps/store/stripe-server/server.ts`).

### 6. Run the Frontend Application

In a separate terminal, serve the React store application using Nx:

```bash
nx serve store
```

This will usually start the development server on `http://localhost:4200`.

### 7. Access the Application

Open your web browser and navigate to the address provided by the `nx serve store` command (e.g., `http://localhost:4200`). You should be able to interact with the store, add items to the cart, and proceed to a Stripe-powered checkout.

## Troubleshooting Common Issues

- **Environment Variables Not Loaded:**
  - Ensure your `.env` file is correctly named and located at `apps/store/stripe-server/.env`.
  - Make sure `VITE_STRIPE_PUBLISH_KEY` is prefixed with `VITE_` for client-side access.
  - Restart the Vite development server (`nx serve store`) and the Node.js server (`ts-node ...`) after making changes to `.env` files.
- **Stripe Server Errors:**
  - Check the terminal running `server.ts` for any error messages.
  - Ensure `STRIPE_SECRET_KEY` is correctly set in the `.env` file.
- **TypeScript Errors:**
  - Ensure all dependencies are installed (`@types/express`, etc.).
  - The `apps/store/stripe-server/tsconfig.json` is set up for CommonJS, while the rest of the monorepo might use ESNext. This is intentional for the server.
