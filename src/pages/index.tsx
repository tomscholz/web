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
          visual: 'opensource',
          title: 'Powered by Open Source',
          href: 'https://github.com/ory',
          openInNewWindow: true,
          content:
            'You can rely on open source software that is built together in a world-wide community of developers. Peer reviewed, vetted by expert developers - tried and tested.'
        },
        {
          visual: 'integration',
          title: 'Easy integration',
          href: 'https://github.com/ory/sdk',
          openInNewWindow: true,
          content:
            'Work with what you’re doing. Easy ways to make tools, software, platforms and coding languages used by your business already work with Ory.'
        },
        {
          visual: 'openstandards',
          title: 'Rely on open standards',
          href: '/docs/ecosystem/software-architecture-philosophy',
          content:
            'Give your customers secure choices for how they register and sign in with you. Rely on Oauth 2.0 and OpenID Connect and web standard best practices.'
        },
        {
          visual: 'developer',
          title: "You're a developer?",
          href: '/developer',
          content:
            'Be a hero at your company. Ory has everything you need to add authentication, authorization, and user management to your apps.'
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
