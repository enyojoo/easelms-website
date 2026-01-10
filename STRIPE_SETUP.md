# Stripe Integration Setup Guide

This guide will help you set up Stripe Checkout for the pricing page.

## Prerequisites

- A Stripe account (live mode)
- Access to your Stripe Dashboard

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** (starts with `pk_live_...`)
4. Copy your **Secret key** (starts with `sk_live_...`)

⚠️ **Important**: Use test keys (`pk_test_...` and `sk_test_...`) for development, and live keys for production.

## Step 2: Create Products and Prices in Stripe

You need to create products and prices for each plan. 

**Important**: For yearly plans, you have two options:

### Option A: Use Discounted Prices Directly (Simpler)
- Create yearly prices with the discounted amount already applied ($950/year, $2,870/year)
- No promotion code needed
- Discount won't be visible on Stripe checkout page
- **Use this if you want simplicity**

### Option B: Use Full Prices with Automatic Discount (Recommended)
- Create yearly prices with the FULL price before discount ($1,188/year, $3,588/year)
- Create a promotion code (see Step 2.5) that automatically applies 20% off
- Discount will be visible on Stripe checkout page showing "Original price: $X, Discount: 20%, Final: $Y"
- **Use this if you want to show the discount value to customers**

**For this guide, we'll use Option B** (full prices with automatic discount).

### Starter Plan

1. Go to **Products** in Stripe Dashboard
2. Click **+ Add product**
3. Fill in:
   - **Name**: Starter Plan
   - **Description**: Perfect for small teams and organizations getting started
4. Add **Pricing**:
   - **Monthly**: $99/month (recurring)
   - **Yearly**: $1,188/year (recurring) - This is the FULL price ($99 × 12), discount will be applied automatically
5. Copy the **Price ID** for each (starts with `price_...`)

### Professional Plan

1. Repeat the process for Professional Plan
2. Set pricing:
   - **Monthly**: $299/month (recurring)
   - **Yearly**: $3,588/year (recurring) - This is the FULL price ($299 × 12), discount will be applied automatically
3. Copy the Price IDs

## Step 2.5: Create Yearly Discount Promotion Code

To show the 20% discount on Stripe's checkout page:

1. Go to **Products** → **Coupons** in Stripe Dashboard
2. Click **+ Create coupon**
3. Fill in:
   - **Name**: Yearly 20% Off
   - **Discount type**: Percentage
   - **Percent off**: 20%
   - **Duration**: Forever (or Once if you prefer)
   - **Redemption**: Unlimited (or set a limit)
4. Click **Create coupon**
5. Go to **Products** → **Promotion codes**
6. Click **+ Create promotion code**
7. Fill in:
   - **Coupon**: Select "Yearly 20% Off" (the coupon you just created)
   - **Code**: `YEARLY20` (or any code you prefer)
   - **Active**: Yes
8. Click **Create promotion code**
9. Copy the **Promotion code ID** (starts with `promo_...`)

### Enterprise Plan

Enterprise uses custom pricing, so no Stripe product is needed (it will redirect to contact form).

## Step 3: Set Up Environment Variables

Add these to your `.env.local` file (for development) and your production environment:

```env
# Stripe Keys
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here

# Stripe Price IDs (from Step 2)
# Note: Yearly prices should be the FULL price (before discount)
NEXT_PUBLIC_STRIPE_PRICE_STARTER_MONTHLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_STARTER_YEARLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_MONTHLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_YEARLY=price_xxxxx

# Yearly Discount Promotion Code (from Step 2.5)
# This will automatically apply 20% discount to yearly plans
STRIPE_YEARLY_DISCOUNT_CODE=promo_xxxxx

# Base URL (for redirects)
NEXT_PUBLIC_BASE_URL=https://www.easelms.org
```

## Step 4: Configure Stripe Webhooks (Optional but Recommended)

To handle subscription events (e.g., payment success, cancellation), set up webhooks:

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Click **Add endpoint**
3. Set endpoint URL: `https://www.easelms.org/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the **Signing secret** (starts with `whsec_...`)
6. Add to `.env.local`: `STRIPE_WEBHOOK_SECRET=whsec_...`

## Step 5: Test the Integration

### Test Mode

1. Use test API keys (`pk_test_...` and `sk_test_...`)
2. Create test products/prices in Stripe Dashboard
3. Use test card: `4242 4242 4242 4242`
4. Any future expiry date and any CVC
5. **Note**: During the 14-day trial, Stripe will still require a payment method, but won't charge until the trial ends

### Live Mode

1. Switch to live API keys
2. Use real products/prices
3. Test with a real card (you can refund test payments)
4. **Note**: Customers will have a 14-day free trial before billing begins

## Step 6: Verify the Setup

1. Go to `/pricing` page
2. Click "Start Free Trial" on Starter or Professional plan
3. You should be redirected to Stripe Checkout
4. Complete a test payment
5. You should be redirected to `/pricing/success`

## Troubleshooting

### "Failed to create checkout session"
- Check that `STRIPE_SECRET_KEY` is set correctly
- Verify the API key has the correct permissions
- Check server logs for detailed error messages

### "Price ID not found"
- Ensure Price IDs are correctly set in environment variables
- Verify the Price IDs exist in your Stripe Dashboard
- Make sure you're using the correct Price IDs for test/live mode

### Discount not showing on checkout
- Verify `STRIPE_YEARLY_DISCOUNT_CODE` is set correctly
- Check that the promotion code is active in Stripe Dashboard
- Ensure the promotion code is linked to a valid coupon
- Make sure you're using the Promotion Code ID (`promo_...`), not the coupon ID

### Redirect not working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Check that the success/cancel URLs are accessible
- Ensure your domain is added to Stripe Dashboard → Settings → Branding

## Next Steps

After basic setup works:

1. **Handle webhooks** to update your database when subscriptions are created/updated
2. **Add customer portal** for subscription management
3. **Add email notifications** for successful payments and trial reminders
4. **Set up subscription management** page for users
5. **Configure trial end notifications** to remind customers before billing starts

## Trial Period

The integration includes a **14-day free trial** for all plans:
- Customers enter payment details but are not charged during the trial
- Billing automatically begins after 14 days
- Customers can cancel anytime during the trial to avoid charges
- Stripe handles all trial period logic automatically

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe API Reference](https://stripe.com/docs/api)
