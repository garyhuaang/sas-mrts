import type { Request, Response } from 'express'

import type { CartItem } from '@sas-mrts/rStore'

require('dotenv').config({ path: './apps/store/stripe-server/.env' })

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
})

const express = require('express')
const app = express()

app.use(express.json())

const STORE_DOMAIN = process.env.STORE_DOMAIN || 'http://localhost:4200'
const PORT = process.env.PORT || 4242

app.post('/create-checkout-session', async (req: Request, res: Response) => {
  const items = req.body.items as CartItem[]

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).send({
      error: 'Invalid request: items array is missing, not an array, or empty.',
    })
  }

  // IMPORTANT: Replace 'txr_YOUR_8_PERCENT_TAX_RATE_ID' with your actual Tax Rate ID from the Stripe Dashboard
  const eightPercentTaxRateId = 'txr_YOUR_8_PERCENT_TAX_RATE_ID'

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'custom',
      line_items: items.map((item: CartItem) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.attributes.title,
          },
          unit_amount: Math.round(
            parseFloat(item.product.attributes.price) * 100
          ),
        },
        quantity: item.qty,
        tax_rates: [eightPercentTaxRateId], // Apply the tax rate ID
      })),
      mode: 'payment',
      return_url: `${STORE_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    })

    return res.send({ clientSecret: session.client_secret })
  } catch (error) {
    const err = error as Error

    return res.status(500).send({ error: err.message })
  }
})

app.get('/session-status', async (req: Request, res: Response) => {
  const sessionId = req.query.session_id as string

  if (!sessionId) {
    return res.status(400).send({ error: 'Session ID is required.' })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return res.send({
      status: session.status,
      customer_email: session.customer_details?.email,
    })
  } catch (error) {
    const err = error as Error

    return res.status(500).send({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Stripe server running on port ${PORT}`)
})
