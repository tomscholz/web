import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import LargeFeature from '../components/large-feature'
import Features from '../components/features'
import kratosAnimation from '../images/kratos/kratos.svg'
import HighlightedSection from '../components/highlighted-section'

const TestingPage = () => (
  <Layout>
    <SEO
      description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
      title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
    />
    <Hero
      title="Open Source Identity Infrastructure and Services"
      subtitle="Run User Management, Permission and Role Management, and OAuth 2.0 & OpenID Connect anywhere from your cloud to a Raspberry Pi."
      cta={[
        {
          title: 'Demo',
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSc5sViXt5rR44MLbJM5QjSDoSiZxXaXtmkHvAg22KC-x3z1Dg/viewform',
          style: 'primary',
          openInNewWindow: true
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory',
          style: 'secondary'
        }
      ]}
    />
    <HighlightedSection
      highlight={[
        {
          title: 'Let customers in and keep threats out',
          href: '/hydra',
          content: 'Easily verify who is a customer, and customize sign in flows that fit you and your customers.',
        },
        {
          title: 'Custom permissions',
          href: '/keto',
          content: 'Use customer specific access rules, define roles, and give customers individual access to your service.',
        },
        {
          title: 'Modern customer registration and sign in.',
          href: '/kratos',
          content: 'Give customers choice of how they register and sign in with you. Provide social sign in, MFA and more.',
        },
      ]}
    />
    <Adopters onlyFeatured/>
    <LargeFeature
      content={[
        {
          title: 'The Power of Open Source',
          href: 'https://github.com/ory',
          description: 'Ory is an open source company. We build software together with a vibrant and active community of developer from all over the world. Ory software is peer reviewed, vetted',
          visual: kratosAnimation,
          learn: 'Explore Ory Open Source',
          openInNewWindow: true,
        },
      ]}
    />
    <Stats />
    <Newsletter />
    <Features
      headline={[
        {
          overline:'cool?',
          title:'something cool'
        }
      ]}
      features={[
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay',
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay',
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay',
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay',
        },
      ]}
    />
  </Layout>
)

export default TestingPage


