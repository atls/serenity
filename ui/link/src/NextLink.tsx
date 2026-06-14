import { withRouter }  from 'next/router'
import type { ReactNode } from 'react'
import React           from 'react'

import { Link }        from './Link.js'
import { NavLink }     from './NavLink.js'
import { SidebarLink } from './SidebarLink.js'

const BaseLink: any = Link
const BaseNavLink: any = NavLink
const BaseSidebarLink: any = SidebarLink

interface NextLinkProps {
  fontWeight?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  fontSize?: string | number | string[] | number[]
  color?: string
  href: string
  children?: ReactNode
  router: any
}

interface NextSidebarLinkProps {
  href?: string
  children?: ReactNode
  router: any
}

export const NextLink = withRouter(({ router, href, children, ...props }: NextLinkProps) => (
  <BaseLink
    {...props}
    href={href}
    onClick={(event) => {
      event.preventDefault()

      if (router) {
        router.push(href)
      }
    }}
  >
    {children}
  </BaseLink>
))

export const NextNavLink = withRouter(({ router, href, children, ...props }: NextLinkProps) => (
  <BaseNavLink
    {...props}
    href={href}
    active={router && router.pathname === href}
    onClick={(event) => {
      event.preventDefault()

      if (router) {
        router.push(href)
      }
    }}
  >
    {children}
  </BaseNavLink>
))

export const NextSidebarLink = withRouter(({
  router,
  href,
  children,
  ...props
}: NextSidebarLinkProps) => (
  <BaseSidebarLink
    {...props}
    href={href}
    active={router && router.asPath === href}
    onClick={(event) => {
      event.preventDefault()

      if (router && href) {
        router.push(href)
      }
    }}
  >
    {children}
  </BaseSidebarLink>
))
