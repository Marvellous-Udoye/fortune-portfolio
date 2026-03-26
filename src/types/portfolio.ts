export type SocialLink = {
  label: string
  href: string
}

export type AboutSection = {
  title: string
  body: string
}

export type ImageMedia = {
  type: 'image'
  id: string
  src: string
  alt: string
  caption?: string
  aspect?: 'portrait' | 'square' | 'landscape' | 'cinema' | 'ultrawide'
}

export type VideoMedia = {
  type: 'video'
  id: string
  embedUrl: string
  title: string
  caption?: string
  aspect?: 'cinema' | 'landscape'
}

export type Embed3DMedia = {
  type: 'embed3d'
  id: string
  embedUrl: string
  title: string
  poster: string
  description: string
  aspect?: 'cinema' | 'square'
}

export type MediaBlock = ImageMedia | VideoMedia | Embed3DMedia

export type ProjectSummary = {
  slug: string
  title: string
  client: string
  year: string
  disciplines: string[]
  accent: string
  thumbnail: ImageMedia
}

export type ProjectDetail = ProjectSummary & {
  overview: string
  challenge: string
  outcome: string
  roles: string[]
  tools: string[]
  credits: string[]
  featured: boolean
  heroMedia: ImageMedia | VideoMedia
  gallery: MediaBlock[]
}

export type GalleryFeature = {
  id: string
  title: string
  eyebrow: string
  href: string
  media: ImageMedia
}

export type SiteProfile = {
  name: string
  heading: string
  specialties: string[]
  location: string
  email: string
  availability: string
  intro: string
  bio: string[]
  socialLinks: SocialLink[]
  clients: string[]
  services: string[]
  tools: string[]
  aboutSections: AboutSection[]
}
