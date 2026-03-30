// import { useMediaQuery } from 'react-responsive'

export function FooterSection() {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer-dip"
        className="w-full -translate-y-1 object-cover"
      />

      <div className="relative pt-[10vh] xl:h-[110vh]">
        <div className="overflow-hidden">
          <h1 className="general-title py-5 text-center text-milk">
            #FORTUNESTUDIO
          </h1>
        </div>

        {/* {isMobile ? (
          <></>
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="pointer-events-none absolute top-0 object-contain mix-blend-lighten lg:-translate-y-1/5"
          />
        )} */}

        <div className="relative z-10 mt-5 flex-center gap-5 md:mt-20">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="yt" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="insta" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="tiktok" />
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-10 px-5 text-milk font-paragraph font-medium md:flex-row md:px-10 md:text-base">
          <div className="flex items-center gap-5 md:gap-16">
            <div>
              <p>Work</p>
            </div>
            <div>
              <p>Brand Identity</p>
              <p>Motion Design</p>
              <p>3D Illustration</p>
            </div>
            <div>
              <p>Studio</p>
              <p>Contact</p>
              <p>Selected Projects</p>
            </div>
          </div>

          <div className="md:max-w-1/3">
            <p>
              Open for commissions, collaborations, and visual projects that
              need strong graphics, motion, and 3D-driven storytelling.
            </p>
            <div className="flex items-center justify-between border-b border-[#D9D9D9] py-5">
              <input
                type="email"
                placeholder="Start a conversation"
                className="w-full placeholder:font-sans placeholder:text-[#999999] focus:outline-none"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="copyright-box">
          <p>Copyright © 2026 Fortune Onah - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}
