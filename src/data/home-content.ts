import type { Flavor, Nutrient, TestimonialCard } from '../types/home'

export const flavorLists: Flavor[] = [
  { name: 'Identity Systems', color: 'brown', rotation: 'md:rotate-[-8deg] rotate-0' },
  { name: 'Motion Posters', color: 'red', rotation: 'md:rotate-[8deg] rotate-0' },
  { name: '3D Illustrations', color: 'blue', rotation: 'md:rotate-[-8deg] rotate-0' },
  { name: 'Campaign Visuals', color: 'orange', rotation: 'md:rotate-[8deg] rotate-0' },
  { name: 'Title Frames', color: 'white', rotation: 'md:rotate-[-8deg] rotate-0' },
  { name: 'Art Direction', color: 'black', rotation: 'md:rotate-[8deg] rotate-0' },
]

export const nutrientLists: Nutrient[] = [
  { label: 'Years Building', amount: '1+' },
  { label: 'Projects Shipped', amount: '10+' },
  { label: 'Creative Fields', amount: '3' },
  { label: 'Visual Systems', amount: '5+' },
  { label: 'Client Worlds', amount: '10+' },
]

export const testimonialCards: TestimonialCard[] = [
  {
    src: '/videos/f1.mp4',
    rotation: 'rotate-z-[-10deg]',
    name: 'Madison',
    img: '/images/p1.png',
    translation: 'translate-y-[-5%]',
  },
  {
    src: '/videos/f2.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Alexander',
    img: '/images/p2.png',
  },
  {
    src: '/videos/f3.mp4',
    rotation: 'rotate-z-[-4deg]',
    name: 'Andrew',
    img: '/images/p3.png',
    translation: 'translate-y-[-5%]',
  },
  {
    src: '/videos/f4.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Bryan',
    img: '/images/p4.png',
    translation: 'translate-y-[5%]',
  },
  {
    src: '/videos/f5.mp4',
    rotation: 'rotate-z-[-10deg]',
    name: 'Chris',
    img: '/images/p5.png',
  },
  {
    src: '/videos/f6.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Devante',
    img: '/images/p6.png',
    translation: 'translate-y-[5%]',
  },
  {
    src: '/videos/f7.mp4',
    rotation: 'rotate-z-[-3deg]',
    name: 'Melisa',
    img: '/images/p7.png',
    translation: 'translate-y-[10%]',
  },
]
