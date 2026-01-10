# Stripe Live Mode Troubleshooting Guide

If Stripe checkout is not working in live mode, follow this checklist:

## 1. Verify Environment Variables Are Set

Check that ALL these environment variables are set in your production environment (Vercel, etc.):

```env
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_STARTER_MONTHLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_STARTER_YEARLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_MONTHLY=price_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_YEARLY=price_xxxxx
STRIPE_YEARLY_DISCOUNT_CODE=promo_xxxxx  # Optional, only if using Option B
NEXT_PUBLIC_BASE_URL=https://www.easelms.org
```

**Important**: 
- Use `sk_live_...` and `pk_live_...` (NOT test keys)
- Make sure there are NO spaces or quotes around the values
- Restart your deployment after adding/changing environment variables

## 2. Verify Price IDs Exist in Live Mode

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Make sure you're in **Live mode** (toggle in top right)
3. Go to **Products** → Find your products
4. Click on each product and verify:
   - Monthly price exists and is active
   - Yearly price exists and is active
   - Copy the Price IDs (starts with `price_...`)
5. Compare with your environment variables - they MUST match exactly

## 3. Check Promotion Code (Yearly Plans Only)

If yearly plans aren't working:

1. Go to **Products** → **Promotion codes** in Stripe Dashboard
2. Verify your promotion code:
   - Is **Active** (green toggle)
   - Is linked to a valid coupon (20% off)
   - Copy the Promotion Code ID (starts with `promo_...`)
3. Verify `STRIPE_YEARLY_DISCOUNT_CODE` matches the Promotion Code ID

## 4. Check Browser Console for Errors

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Click "Start Free Trial" or "Get Started"
4. Look for error messages - they will now show specific issues

Common errors you might see:
- `Missing Price ID for...` → Environment variable not set
- `Invalid Price ID: price_xxx` → Price doesn't exist in Stripe
- `Invalid promotion code` → Promotion code ID is wrong
- `Stripe secret key is not configured` → STRIPE_SECRET_KEY not set

## 5. Check Server Logs

If deploying to Vercel or similar:
1. Go to your deployment dashboard
2. Check **Function Logs** or **Server Logs**
3. Look for Stripe API errors
4. The improved error messages will tell you exactly what's wrong

## 6. Test the API Endpoint Directly

You can test the checkout API directly:

```bash
curl -X POST https://www.easelms.org/api/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "plan": "starter",
    "billingPeriod": "monthly",
    "priceId": "YOUR_PRICE_ID_HERE"
  }'
```

Replace `YOUR_PRICE_ID_HERE` with an actual Price ID from Stripe.

## 7. Common Issues and Solutions

### Issue: "Missing Price ID" error
**Solution**: 
- Check environment variables are set in production
- Verify variable names match exactly (case-sensitive)
- Make sure `NEXT_PUBLIC_` prefix is used for client-side variables

### Issue: "No such price" error
**Solution**:
- Verify Price IDs exist in Stripe Dashboard (Live mode)
- Make sure you're using Live Price IDs, not Test Price IDs
- Check for typos in environment variables

### Issue: Checkout button does nothing
**Solution**:
- Check browser console for JavaScript errors
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Check network tab to see if API call is being made

### Issue: Redirects to wrong URL
**Solution**:
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Should be your production domain (e.g., `https://www.easelms.org`)
- No trailing slash

### Issue: Yearly discount not applying
**Solution**:
- Verify `STRIPE_YEARLY_DISCOUNT_CODE` is set
- Check promotion code is active in Stripe Dashboard
- Verify you're using Promotion Code ID (`promo_...`), not Coupon ID

## 8. Quick Verification Checklist

- [ ] All environment variables set in production
- [ ] Using `sk_live_...` and `pk_live_...` (not test keys)
- [ ] Price IDs exist in Stripe Dashboard (Live mode)
- [ ] Price IDs match environment variables exactly
- [ ] Promotion code exists and is active (for yearly plans)
- [ ] `NEXT_PUBLIC_BASE_URL` is set correctly
- [ ] Deployment restarted after adding environment variables
- [ ] No typos or extra spaces in environment variables

## 9. Still Not Working?

If you've checked everything above and it's still not working:

1. **Check the exact error message** in browser console or server logs
2. **Verify Stripe account status** - make sure it's activated for live mode
3. **Check Stripe Dashboard** → **Developers** → **Logs** for API errors
4. **Test with a simple curl request** to isolate the issue

The improved error handling will now show you exactly what's wrong!
