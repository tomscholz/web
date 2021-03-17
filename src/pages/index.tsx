import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Newsletter from '../components/newsletter'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import CompressedHero from '../components/compressed-hero'
import Highlights from '../components/highlights'
import Quicklinks from '../components/quicklinks'
import heroIllustration from '../images/illustrations/hero.svg'
import ThinProjectList from '../components/thin-project-list'

const HeroIllustration = () => (
  <img
    loading="lazy"
    alt="Open source identity infrastructure and services by Ory"
    className="responsive"
    src={heroIllustration}
  />
)

const IndexPage = () => (
  <Layout>
    <SEO
      description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from Ory. Works in both new and existing systems."
      title="Ory - Open Source OAuth2 and OpenID Connect Access Control & API Security"
    />
    <CompressedHero
      title="The new identity stack."
      subtitle="The only Open Source and SaaS platform for identity, auth, and connecting customers, applications and data"
      cta={[
        {
          title: 'Learn more',
          href: '/developer',
          style: 'primary'
        }
      ]}
      visual={<HeroIllustration />}
    />

    <Highlights
      highlight={[
        {
          visual: 'hydra',
          title: 'OAuth 2.0 and OpenID Connect',
          href: '/hydra',
          content:
            'Keep threats out and easily verify who is a customer, and customize sign in flows that fit you and your customers.'
        },
        {
          visual: 'keto',
          title: 'Authorization',
          href: '/keto',
          content:
            'Personalize experiences using customer specific access rules, define roles, and give customers individual access to your service.'
        },
        {
          visual: 'kratos',
          title: 'User management',
          href: '/kratos',
          content:
            'Grow your customers, easily register and manage customer identities, using custom flows in your look and feel.'
        },
        {
          visual: 'oathkeeper',
          title: 'Zero trust networking',
          href: '/oathkeeper',
          content:
            'Be in full control - secure web-facing applications and services by implementing Zero-Trust Network Architecture.'
        }
      ]}
    />

    <Adopters onlyFeatured />

    <ThinProjectList />

    <Stats />

    <Newsletter />

    <Quicklinks
      cta={[
        {
          title: 'Start building',
          href: '/docs',
          style: 'primary'
        },
        {
          title: 'Contact Us →',
          href: 'mailto:jared@ory.sh',
          style: 'secondary',
          openInNewWindow: true
        }
      ]}
      quick={[
        {
          description:
            'Start your integration. Our documentation makes integrating Ory a snap.',
          learn: 'Go to our Docs',
          href: '/docs',
          openInNewWindow: true,
          icon: 'docs'
        },
        {
          description:
            'Learn about what’s new at Ory and great stuff being worked on.',
          learn: 'Read the Developer Blog',
          href: '/blog',
          icon: 'blog'
        },
        {
          description:
            'We’re hiring. Work on the most exciting stuff in software with us!',
          learn: 'Work with us',
          href: 'https://github.com/ory/jobs',
          openInNewWindow: true,
          icon: 'jobs'
        }
      ]}
    />
  </Layout>
)

export default IndexPage
