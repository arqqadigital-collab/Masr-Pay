interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, maxWidth = "max-w-2xl", className = "mb-12" }: SectionHeadingProps) => (
  <div className={`${className} ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl text-gray-500 ${maxWidth} mx-auto leading-relaxed`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
