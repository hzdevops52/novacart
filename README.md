# HZ TECH

A modern, responsive business website showcasing web development and DevOps services. Built with React and Vite, featuring a clean green-and-black visual identity, service highlights, website showcases, and direct contact options.

## Features

- Responsive website layout
- Modern hero section and website showcase
- Web development and DevOps service highlights
- Contact links for email and WhatsApp
- Freelancing profiles on Fiverr and Taskpull
- Production-ready static build
- GitHub Actions CI workflow for automated build validation

## Technology Stack

- **React** — UI components
- **Vite** — development server and production build tooling
- **Lucide React** — icons
- **GitHub Actions** — continuous integration

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/hzdevops52/hz-tech.git
cd hz-tech
npm ci
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

Build the optimized static website:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## Continuous Integration

The workflow at `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`.

It performs the following steps:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies using `npm ci`.
4. Builds the website using `npm run build`.

## Contact Configuration

Contact links are configured in `src/components/Contact.jsx`.

- **Email:** hzdevops52@gmail.com
- **WhatsApp:** 03277495256
- **Fiverr:** [hassanzubair52](https://www.fiverr.com/hassanzubair52)
- **Taskpull:** [Hassan Zubair](https://taskpull.com/sellers/hassan-zubair)

## Customization

- **Contact details and profile links:** `src/components/Contact.jsx`
- **Services:** `src/data/services.js`
- **Website showcase examples:** `src/data/showcase.js`
- **Styling:** CSS files under `src/styles/`

Update these files to customize the website's content, branding, and appearance.

## Deployment

This project is a static React website and can be hosted on platforms such as GitHub Pages, Cloudflare Pages, or Netlify.

The CI workflow currently validates the production build. A separate deployment configuration is required to publish updates automatically.

## License

No license has been specified yet. All rights are reserved by default unless a license is added to the repository.