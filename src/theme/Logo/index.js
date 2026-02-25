/**
 * Custom Logo: separate link for logo (external) and title (home).
 */
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

function LogoThemedImage({logo, alt, imageClassName}) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );
  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
}

export default function Logo(props) {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();
  const {imageClassName, titleClassName, className, ...propsRest} = props;
  const homeUrl = useBaseUrl('/');
  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;

  const isExternalLogo = logo?.href && (logo.href.startsWith('http://') || logo.href.startsWith('https://'));

  return (
    <div className={className} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
      {logo && (
        isExternalLogo ? (
          <a
            href={logo.href}
            target={logo.target || '_blank'}
            rel={logo.target === '_blank' ? 'noopener noreferrer' : undefined}
            aria-label={alt || 'Logo link'}
          >
            <LogoThemedImage
              logo={logo}
              alt={alt}
              imageClassName={imageClassName}
            />
          </a>
        ) : (
          <Link to={logo.href || homeUrl} {...(logo?.target && {target: logo.target})}>
            <LogoThemedImage
              logo={logo}
              alt={alt}
              imageClassName={imageClassName}
            />
          </Link>
        )
      )}
      {navbarTitle != null && (
        <Link to={homeUrl}>
          <b className={titleClassName}>{navbarTitle}</b>
        </Link>
      )}
    </div>
  );
}
