type ClipPathTitleProps = {
  title: string
  color: string
  bg: string
  className: string
  borderColor: string
}

export function ClipPathTitle({
  title,
  color,
  bg,
  className,
  borderColor,
}: ClipPathTitleProps) {
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          borderColor,
        }}
        className={`${className} text-nowrap border-[.5vw] opacity-0`}
      >
        <div className="px-3 pb-5 pt-3 md:px-14 md:pt-0" style={{ background: bg }}>
          <h2 style={{ color }}>{title}</h2>
        </div>
      </div>
    </div>
  )
}
