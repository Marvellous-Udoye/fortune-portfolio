import type { GalleryFeature, ProjectDetail, SiteProfile } from '../types/portfolio'

const image = (
  id: string,
  src: string,
  alt: string,
  aspect: 'portrait' | 'square' | 'landscape' | 'cinema' | 'ultrawide' = 'landscape',
  caption?: string,
) => ({ type: 'image' as const, id, src, alt, aspect, caption })

export const siteProfile: SiteProfile = {
  name: 'Fortune Onah',
  heading: 'Graphic artist, animator, and 3D image-maker building tactile visuals for culture brands and bold campaigns.',
  specialties: ['Art Direction', 'Motion Design', '3D Visuals', 'Brand Worlds'],
  location: 'Lagos, Nigeria',
  email: 'fortune.studio@example.com',
  availability: 'Available for freelance commissions, music visuals, title cards, and campaign systems.',
  intro:
    'A multidisciplinary visual practice spanning illustration, design, motion, and 3D-driven image making.',
  bio: [
    'Fortune works across identity systems, motion loops, animated key art, and stylized 3D scenes for clients who want visuals with atmosphere.',
    'The practice sits between graphic design and cinematic motion. Projects often begin as typography or poster studies and expand into animated worlds, social rollouts, launch visuals, and immersive campaign assets.',
  ],
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
  ],
  clients: ['Nike', 'Spotify', 'Netflix', 'Adobe', 'Off-White', 'Red Bull', 'Meta', 'Boiler Room'],
  services: [
    'Visual identity systems for launches and campaigns',
    'Animated posters, title cards, and social cutdowns',
    '3D key visuals, product worlds, and motion loops',
    'Pitch decks, art direction frames, and presentation visuals',
  ],
  tools: ['Blender', 'Cinema 4D', 'After Effects', 'Photoshop', 'Illustrator', 'Figma', 'Premiere Pro'],
  aboutSections: [
    {
      title: 'Practice',
      body:
        'The work is graphic at its core: typography, silhouette, texture, and composition drive every frame before effects are added.',
    },
    {
      title: 'Motion',
      body:
        'Animation is used to create tension and rhythm. Loops are restrained, transitions are clean, and every movement should support the image.',
    },
    {
      title: '3D',
      body:
        '3D work focuses on tactile materials, high-contrast lighting, and scenes that can live equally well as still imagery or moving frames.',
    },
  ],
}

export const projects: ProjectDetail[] = [
  {
    slug: 'neon-ritual',
    title: 'Neon Ritual',
    client: 'Spotify Singles',
    year: '2026',
    disciplines: ['Art Direction', 'Motion', '3D'],
    accent: '#ff6b3d',
    thumbnail: image(
      'neon-ritual-thumb',
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=80',
      'A neon-lit tunnel with futuristic color grading.',
      'portrait',
    ),
    overview:
      'A campaign world for a music release rollout, combining type-led posters, looping visualizers, and molten 3D surfaces.',
    challenge:
      'Build a launch identity that felt loud and digital without collapsing into generic cyberpunk cues.',
    outcome:
      'The resulting system worked across motion teasers, key art, streaming canvases, and event screens while keeping one coherent atmosphere.',
    roles: ['Creative Direction', 'Motion Design', '3D Look Development'],
    tools: ['Blender', 'After Effects', 'Photoshop'],
    credits: ['Sound Design by Studio Niro', 'Photography placeholders from Unsplash'],
    featured: true,
    heroMedia: image(
      'neon-ritual-hero',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
      'Abstract red and blue light scene.',
      'cinema',
    ),
    gallery: [
      image(
        'neon-ritual-1',
        'https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1600&q=80',
        'Motion poster placeholder with glowing signage.',
        'portrait',
        'Primary campaign poster study.',
      ),
      {
        type: 'video',
        id: 'neon-ritual-video',
        embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?si=4t0bS6mRrtV6n4Df',
        title: 'Launch Reel Placeholder',
        caption: 'Embedded reel block for future motion cuts.',
        aspect: 'cinema',
      },
      image(
        'neon-ritual-2',
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=80',
        'Atmospheric gradient sky used as a mood placeholder.',
        'landscape',
        'Texture and palette frame.',
      ),
      {
        type: 'embed3d',
        id: 'neon-ritual-3d',
        embedUrl: 'https://sketchfab.com/models/bc72938e9b7b42b699cbae37e030bacb/embed',
        title: '3D Scene Placeholder',
        poster:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
        description: 'Reserved for an interactive 3D artwork or product world.',
        aspect: 'cinema',
      },
    ],
  },
  {
    slug: 'atlas-bloom',
    title: 'Atlas Bloom',
    client: 'Nike Running',
    year: '2025',
    disciplines: ['Graphic Design', 'Identity', 'Motion'],
    accent: '#75f7d3',
    thumbnail: image(
      'atlas-bloom-thumb',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'Runner silhouette in a soft green-toned landscape.',
      'landscape',
    ),
    overview:
      'A visual campaign system balancing speed, softness, and technical detail for a seasonal footwear drop.',
    challenge:
      'Translate performance language into imagery that still felt editorial and emotionally warm.',
    outcome:
      'The system delivered launch posters, social motion tiles, product loop animations, and store display moments.',
    roles: ['Design Direction', 'Motion System', 'Campaign Layout'],
    tools: ['Illustrator', 'After Effects', 'Figma'],
    credits: ['Copy placeholders by Codex', 'Media placeholders from Unsplash'],
    featured: true,
    heroMedia: image(
      'atlas-bloom-hero',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80',
      'Athletic motion study with atmospheric lighting.',
      'cinema',
    ),
    gallery: [
      image(
        'atlas-bloom-1',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80',
        'Editorial running scene.',
        'landscape',
        'Campaign hero image placeholder.',
      ),
      image(
        'atlas-bloom-2',
        'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=1600&q=80',
        'Material and product texture placeholder.',
        'square',
        'Material board.',
      ),
      {
        type: 'video',
        id: 'atlas-bloom-video',
        embedUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=ZotCbNTi_K15xnlm',
        title: 'Motion Tile Placeholder',
        caption: 'Temporary reel container for animated social edits.',
        aspect: 'landscape',
      },
    ],
  },
  {
    slug: 'signal-noir',
    title: 'Signal Noir',
    client: 'Netflix Titles',
    year: '2025',
    disciplines: ['Title Design', 'Motion', 'Key Art'],
    accent: '#f4d35e',
    thumbnail: image(
      'signal-noir-thumb',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
      'Moody cinema seating with strong shadow.',
      'portrait',
    ),
    overview:
      'A title sequence exploration built around fragmented type, vignetted lighting, and restrained camera movement.',
    challenge:
      'Keep the sequence cinematic without overcomplicating the frame language.',
    outcome:
      'Delivered a modular title toolkit that could extend into posters, teasers, and social countdown assets.',
    roles: ['Title Treatment', 'Sequence Design', 'Compositing'],
    tools: ['After Effects', 'Photoshop', 'Premiere Pro'],
    credits: ['Direction studies inspired by thriller poster systems'],
    featured: true,
    heroMedia: image(
      'signal-noir-hero',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80',
      'Dark cinema environment with strong beam lighting.',
      'cinema',
    ),
    gallery: [
      image(
        'signal-noir-1',
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80',
        'Projected light beams in a dark room.',
        'landscape',
        'Opening frame exploration.',
      ),
      image(
        'signal-noir-2',
        'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1600&q=80',
        'Cinematic seating with red highlights.',
        'portrait',
        'Poster adaptation.',
      ),
      {
        type: 'video',
        id: 'signal-noir-video',
        embedUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY?si=b5T6XRYgZ6p6F5B8',
        title: 'Sequence Placeholder',
        caption: 'Reserved for the title animation export.',
        aspect: 'cinema',
      },
    ],
  },
  {
    slug: 'copper-drift',
    title: 'Copper Drift',
    client: 'Personal R&D',
    year: '2024',
    disciplines: ['3D Art', 'Material Studies', 'Loop Animation'],
    accent: '#c084fc',
    thumbnail: image(
      'copper-drift-thumb',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
      'Glowing circuit-like surface in close-up.',
      'square',
    ),
    overview:
      'A self-initiated series of metallic and glass object studies intended for looping motion clips and still key art.',
    challenge:
      'Develop a repeatable visual language for 3D scenes that could scale from personal experiments to client-facing mood boards.',
    outcome:
      'Created a reusable archive of lighting rigs, material presets, and scene compositions for future commissions.',
    roles: ['3D Art', 'Lighting', 'Look Development'],
    tools: ['Blender', 'Cinema 4D', 'Octane'],
    credits: ['Interactive embed uses a public Sketchfab placeholder'],
    featured: false,
    heroMedia: image(
      'copper-drift-hero',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80',
      'Close-up of digital textures and hardware.',
      'cinema',
    ),
    gallery: [
      image(
        'copper-drift-1',
        'https://images.unsplash.com/photo-1526378800651-c8b27246bdfb?auto=format&fit=crop&w=1600&q=80',
        'Textured metallic placeholder image.',
        'landscape',
        'Metal and light study.',
      ),
      {
        type: 'embed3d',
        id: 'copper-drift-3d',
        embedUrl: 'https://sketchfab.com/models/bc72938e9b7b42b699cbae37e030bacb/embed',
        title: 'Interactive Model Placeholder',
        poster:
          'https://images.unsplash.com/photo-1516321310764-4d44f111f0d1?auto=format&fit=crop&w=1600&q=80',
        description: 'Reserved for a public-facing 3D model viewer.',
        aspect: 'cinema',
      },
      image(
        'copper-drift-2',
        'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=1600&q=80',
        'Macro material detail placeholder.',
        'portrait',
        'High contrast crop for social cutdowns.',
      ),
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const galleryFeatures: GalleryFeature[] = projects.flatMap((project) =>
  project.gallery
    .filter((media) => media.type === 'image')
    .slice(0, 2)
    .map((media) => ({
      id: `${project.slug}-${media.id}`,
      title: project.title,
      eyebrow: `${project.client} / ${project.year}`,
      href: `/work/${project.slug}`,
      media,
    })),
)

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)

export const getProjectNeighbors = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
