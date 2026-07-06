# Sweet Steps - 3D Baby Casting Jaipur

A premium 3D baby hand and foot casting service website built with Next.js. Capture precious bonds that last a lifetime with Jaipur's favorite 3D impression service for babies, siblings, couples, and elders.

**Live Site:** [sweetsteps.vercel.app](https://sweetsteps.vercel.app)

---

## Features

- **Product Showcase** - 17 unique casting frame designs with 3D previews
- **Booking System** - Real-time appointment booking with Notion integration
- **Gallery** - Masonry layout with product detail modals
- **Loyalty Program** - Rewards and referral system
- **WhatsApp Chat** - Integrated chat widget with mini FAQ
- **SEO Optimized** - Structured data, sitemap, Open Graph tags
- **Analytics** - Google Analytics integration

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | App Router, Server Components |
| TypeScript | Type safety |
| Tailwind CSS | Styling, design tokens |
| Framer Motion | Animations |
| EmailJS | Booking form emails |
| Vercel | Hosting & deployment |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/LakshayJain1/Sweet-Steps.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
sweetsteps/
├── src/
│   ├── app/          # Pages (home, about, book, faq, gallery, rewards)
│   ├── components/   # Reusable UI components
│   ├── data/         # Product data and configurations
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles and animations
├── public/           # Static assets and images
└── api/              # Vercel serverless functions
```

## Environment Variables

```env
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary. All rights reserved.

---

**Built with passion for preserving precious memories**
