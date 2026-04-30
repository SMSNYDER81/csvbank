# CSV Bank — Free PDF Bank Statement to CSV Converter

**csvbank.com** — Convert PDF bank statements to CSV or Excel instantly. 100% free, no sign-up required, no page limits.

## Features

- 🔒 **Privacy-first** — Files are processed entirely in your browser. Nothing is uploaded to any server.
- 🆓 **Completely free** — No subscription, no usage caps, no account required.
- 🏦 **Any bank** — Works with Chase, Bank of America, Barclays, HSBC, and thousands more.
- 📊 **CSV & Excel output** — Download as `.csv` or `.xls`.
- 📄 **Multi-page & multi-file** — Process statements of any length, upload multiple files at once.
- 📱 **Any device** — Desktop, tablet, or phone.

## How it works

Uses [PDF.js](https://mozilla.github.io/pdf.js/) to extract text from digital PDF bank statements in the browser. A smart parser identifies transaction rows (dates, descriptions, amounts) and structures them into columns.

**Works with:** Digital (text-based) PDFs downloaded from online banking portals.  
**Does not work with:** Scanned image PDFs.

## Stack

- Pure HTML/CSS/JS — no build step, no dependencies to install
- PDF.js via CDN (with SRI integrity hash)
- Hosted on Cloudflare Pages
- AdSense monetisation

## Files

| File | Purpose |
|---|---|
| `index.html` | Main converter tool |
| `about.html` | About page |
| `privacy.html` | Privacy policy |
| `feedback.js` | Feedback toast + exit-intent modal |
| `sitemap.xml` | Sitemap for Search Console |
| `robots.txt` | Crawler instructions |
| `ads.txt` | AdSense authorisation |
| `favicon.svg` | Reference favicon (head uses inline base64) |
| `og-image.svg` | Open Graph image 1200×630 |
| `.well-known/security.txt` | Security contact |

## License

MIT
