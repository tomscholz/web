import React from 'react'
import cn from 'classnames'
import * as styles from './quicklinks.module.css'
import { Link } from 'gatsby'

import Docs from '../images/icon/docs.svg'
import Blog from '../images/icon/blog.svg'
import Jobs from '../images/icon/jobs.svg'

interface PropTypes {
  content: Content[]
  quick: Quick[]
}


interface Content {
  title: string
  description: string
  learn: string
  href: string
  openInNewWindow?: boolean
}

interface Quick {
  description: string
  learn: string
  href: string
  icon: 'docs' | 'blog' | 'jobs'
  openInNewWindow?: boolean
}


const Quicklinks = ({ content, quick}: PropTypes) => (
  <div className={cn(styles.quicklinks)}>
        <div className="container-fluid">
          <div className="row middle-lg">
            {content.map(
              ({ title, description, learn, href, openInNewWindow}, key) => (
            <div key={key}  className={cn(styles.quicklinksContent, "col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10")}>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link
                to={href}
                rel={openInNewWindow ? 'noopener noreferrer' : ''}
                target={openInNewWindow ? '_blank' : ''}
                className={cn(styles.cap, 'secondary')}>
                {learn}
              </Link>
            </div>
              ))}
            <div className="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
              {quick.map(
                ({ description, learn, href, openInNewWindow, icon }, key) => (
                     <div key={key} className={cn(styles.quicklinksBox)}>
                        <div>
                              <img
                                key={key}
                                loading="lazy"
                                src={icon === 'docs' ? Docs : (icon === 'blog' ? Blog : (icon === 'jobs' ? Jobs : ''))}
                                alt={`${icon}`}
                              />
                        </div>
                      <div className={cn(styles.quicklinksInner)}>
                        <p>{description}</p>
                        <Link
                          to={href}
                          rel={openInNewWindow ? 'noopener noreferrer' : ''}
                          target={openInNewWindow ? '_blank' : ''}>
                          {learn}
                        </Link>
                      </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
  </div>
)

export default Quicklinks
