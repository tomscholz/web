import React from 'react'
import cn from 'classnames'
import * as styles from './large-feature.module.css'
import { Link } from 'gatsby'

import OpenSource from '../images/icon/docs.svg'
import Standards from '../images/icon/blog.svg'
import Developer from '../images/icon/jobs.svg'
import Integration from '../images/icon/jobs.svg'


interface PropTypes {
  title: string
  description: string
  learn: string
  href: string
  visual: 'opensource' | 'standards' | 'developer' | 'integrations'
  openInNewWindow?: boolean
  alternate?: boolean
}

const LargeFeature = ({ title, description, learn, href, openInNewWindow, visual, alternate }: PropTypes) => (
  <div className={cn(styles.thin)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg', { [styles.alternate]: alternate })}>
        <div
          className={!alternate ? 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10' : 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm'}
        >
          <Link
            to={href}
            rel={openInNewWindow ? 'noopener noreferrer' : ''}
            target={openInNewWindow ? '_blank' : ''}
            className={cn(styles.cap, 'secondary')}
          >
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
          <Link to={href} className={cn(styles.cap, 'cta', 'primary')}>
            {learn}
          </Link>
        </div>
        <div
          className={!alternate ? 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm' : 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'}>
          <Link
            to={href}
            rel={openInNewWindow ? 'noopener noreferrer' : ''}
            target={openInNewWindow ? '_blank' : ''}
          >
            <img loading="lazy"
                 src={visual === 'opensource' ? OpenSource : (visual === 'standards' ? Standards : (visual === 'developer' ? Developer : (visual === 'integrations' ? Integration : '')))}
                 alt={`${title}`}/>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default LargeFeature
