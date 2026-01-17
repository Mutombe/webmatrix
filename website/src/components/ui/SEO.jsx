import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  author = 'Web Matrix Insurance & Risk Consultants'
}) {
  const siteName = 'Web Matrix Insurance & Risk Consultants'
  const fullTitle = title ? `${title} | ${siteName}` : siteName

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || 'https://webmatrix.co.zw'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || 'https://webmatrix.co.zw'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZW" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || 'https://webmatrix.co.zw'} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}
