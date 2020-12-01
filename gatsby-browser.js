/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import 'normalize.css'
import 'remark-admonitions/styles/classic.css'
import 'prismjs/themes/prism.css'

import './src/styles/themes/default.css'
import './src/styles/global.css'
import './src/styles/grid.css'
import './src/styles/typography.css'

export const onRouteUpdate = ({ location }, pluginOptions = {}) => {
  if (typeof gtag !== `function`) {
    return null
  }

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined
    window.gtag('config', 'UA-71865250-1', {
      'page_path': pagePath
    });
    window.gtag('config', 'G-J01VQCC9Y9', {
      'page_path': pagePath
    });
  }

  // Minimum delay for reactHelmet's requestAnimationFrame
  const delay = Math.max(32, pluginOptions.pageTransitionDelay || 0)
  setTimeout(sendPageView, delay)

  return null
}