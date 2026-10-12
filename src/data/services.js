import {
  Globe, AppWindow, Container, Cloud, GitBranch, ShieldCheck
} from 'lucide-react';

export const services = [
  {
    icon: Globe,
    number: '01',
    title: 'Business Websites',
    description: 'Modern, responsive websites that establish your online presence and help customers discover your business.',
    tags: ['Business sites', 'Landing pages', 'Portfolio sites']
  },
  {
    icon: AppWindow,
    number: '02',
    title: 'Web Applications',
    description: 'Practical web applications tailored to your workflows, from management dashboards to customer-facing tools.',
    tags: ['React', 'Dashboards', 'Business tools']
  },
  {
    icon: Container,
    number: '03',
    title: 'Docker & Deployment',
    description: 'Containerize applications and create repeatable deployments that are easier to run and maintain.',
    tags: ['Docker', 'Compose', 'Deployment']
  },
  {
    icon: Cloud,
    number: '04',
    title: 'Cloud & Hosting',
    description: 'Deployment planning and setup for suitable cloud platforms, based on your application and budget.',
    tags: ['Cloud setup', 'Linux', 'Networking']
  },
  {
    icon: GitBranch,
    number: '05',
    title: 'CI/CD Automation',
    description: 'Automate build and validation workflows so code changes can be checked consistently.',
    tags: ['GitHub Actions', 'Jenkins', 'Pipelines']
  },
  {
    icon: ShieldCheck,
    number: '06',
    title: 'DevOps & Monitoring',
    description: 'Practical container, Kubernetes, and monitoring setup to improve application visibility and operations.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana']
  }
];
