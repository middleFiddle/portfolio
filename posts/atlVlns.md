---
title: Atlanta Violins Project
---

This project began as a replacement for a static landing page is currently being developed into a full-stack application.

Built with React and Tailwind in Next.js with Prisma, MySQL through Planetscale, and S3.

Features currently in development:

#### Sales Gallery

- A parent page will display a gallery of cards with instruments currently available (thumbnail, maker, vintage, price, etc.)
- Data records are brought from MySQL through Prisma for typesafety. High quality audio and images to be served with pre-signed S3 urls.

#### Admin Pages

- Implementing Next-Auth
- Enable S3 upload of audio and image files
- Create Records for New Inventory
- Create Records for Restorations
- Create Repair Records
