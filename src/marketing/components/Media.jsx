export function ProductPreview({
  src,
  alt,
  width = 1440,
  height = 864,
  eager = false,
  caption = "Illustrative preview. Sample data, not a live workshop.",
}) {
  return (
    <figure className="tech-frame overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="relative z-[1] h-auto w-full bg-workbench object-contain"
      />
      <figcaption className="relative z-[1] flex items-center justify-between gap-3 border-t border-slate-800 px-4 py-2 text-xs text-slate-400">
        <span>{caption}</span>
        <span className="sample-chip shrink-0">Sample data</span>
      </figcaption>
    </figure>
  );
}

export function PhotoFrame({ src, alt, width, height, className = "", eager = false }) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-slate-800 ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <figcaption className="bg-workbench/90 px-4 py-2 text-xs text-slate-400">
        Illustrated workshop scene from one commissioned composition. Not a RodStack customer shop.
      </figcaption>
    </figure>
  );
}

export function PageIntro({ kicker, title, lede, children }) {
  return (
    <header className="mx-auto max-w-page px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <p className="section-kicker">{kicker}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{lede}</p>
      {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
    </header>
  );
}

export function StatusPill({ status }) {
  const label = status === "available" ? "Available" : status === "partial" ? "Partial" : "Planned";
  const tone =
    status === "available"
      ? "border-emerald-500/40 text-emerald-300"
      : status === "partial"
        ? "border-amber-500/40 text-amber-200"
        : "border-violet-400/40 text-violet-200";
  return <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tone}`}>{label}</span>;
}
