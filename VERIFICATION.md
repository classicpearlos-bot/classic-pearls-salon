# Classic Pearls — Meta & Google Verification Guide

This document outlines the exact technical procedures to verify your domain with **Meta (Facebook) Business Suite** and **Google Search Console**, activate Meta Pixel tracking, and submit an appeal to restore a restricted Meta Ads account.

---

## 1. Meta Domain Verification (Step-by-Step)

Meta requires domain ownership verification to authenticate brand legitimacy and protect advertising assets.

### Step A: Obtain Your Verification Code
1. Log in to [Meta Business Suite](https://business.facebook.com/).
2. Navigate to **Business Settings** (gear icon) $\rightarrow$ **Brand Safety and Suitability** $\rightarrow$ **Domains**.
3. Click **Add** $\rightarrow$ **Request access to a domain** or **Create a new domain**.
4. Enter `classicpearls.vercel.app` (or your custom domain).
5. Select the **Add a meta-tag to your HTML source code** option.
6. Copy the alphanumeric code within `content="YOUR_CODE_HERE"`.

### Step B: Insert into the Application
1. In your project, open `.env.local` (or in Vercel Dashboard $\rightarrow$ Project Settings $\rightarrow$ Environment Variables).
2. Set the environment variable:
   ```env
   NEXT_PUBLIC_META_DOMAIN_VERIFICATION=your_meta_code_here
   ```
3. Deploy or rebuild the application. The tag will automatically be injected into `<head>`:
   ```html
   <meta name="facebook-domain-verification" content="your_meta_code_here" />
   ```
4. Return to Meta Business Suite and click **Verify Domain**.

---

## 2. Google Search Console Verification

1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Add your property (e.g. `https://classicpearls.vercel.app`).
3. Choose the **HTML tag** verification method.
4. Copy the code from `content="YOUR_GOOGLE_CODE"`.
5. Add it to `.env.local` or Vercel Environment Variables:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_code_here
   ```
6. Deploy and click **Verify** in Google Search Console.
7. Submit your sitemap by entering `sitemap.xml` in the Sitemaps tab.

---

## 3. Meta Pixel Integration

1. In Meta Business Suite, go to **Events Manager** $\rightarrow$ **Data Sources** $\rightarrow$ **Connect Data Source** $\rightarrow$ **Web**.
2. Copy your **Pixel ID** (15–16 digit number).
3. Set in environment variables:
   ```env
   NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here
   ```
4. The application will safely initialize Pixel tracking for `PageView`, `ViewContent`, `Schedule`, and `InitiateCheckout` without leaking any client personal information (PII).

---

## 4. Meta Ads Account Appeal Protocol

Once your website is live and your domain is verified:

1. Go to [Meta Account Quality / Business Support Home](https://business.facebook.com/accountquality/).
2. Select your restricted Ad Account / Business Account.
3. Click **Request Review** or contact Meta Concierge Support.
4. Submit the following professional compliance message:

> *"Dear Meta Policy & Support Team,*
> 
> *We have completed a comprehensive compliance review of our digital presence in adherence to Meta Advertising Standards and Commercial Policies. Our official business domain (`https://classicpearls.vercel.app`) is now verified in our Business Manager with full SSL security.*
> 
> *Our website provides transparent disclosures including our Privacy Policy (`/privacy-policy`), Terms of Service (`/terms`), 24-Hour Cancellation Policy (`/cancellation-policy`), physical salon address, direct concierge telephone line, and clear service pricing.*
> 
> *We respectfully request a review to restore advertising capabilities for our registered business account. Thank you."*
