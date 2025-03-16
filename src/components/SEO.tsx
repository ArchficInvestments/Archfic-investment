
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = 'Architecture & Construction Company',
  description = 'ArchFic Investment Ltd is a leading architecture and construction company in Luweero, Uganda, delivering innovative designs and quality construction for residential and commercial clients.',
  keywords = 'architecture, construction, Uganda, Luweero, building design, residential construction, commercial construction, renovation',
  image = '/lovable-uploads/e87808b9-e259-4e42-975b-789165a8fccb.png',
  url = '',
  type = 'website'
}: SEOProps) => {
  const baseUrl = 'https://archfic.com';
  const siteTitle = title ? `ArchFic Investment Ltd | ${title}` : 'ArchFic Investment Ltd';
  const fullUrl = `${baseUrl}${url}`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${baseUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${baseUrl}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
