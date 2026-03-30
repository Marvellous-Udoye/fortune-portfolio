import { ProjectSlider } from '../components/project-slider'
import { ProjectSliderTitle } from '../components/project-slider-title'

export function FeaturedProjectsSection() {
  return (
    <section className="flavor-section">
      <div className="relative flex h-full flex-col items-center lg:flex-row">
        <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
          <ProjectSliderTitle />
        </div>
        <div className="h-full">
          <ProjectSlider />
        </div>
      </div>
    </section>
  )
}
