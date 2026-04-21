interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  maxWidth = "max-w-2xl",
  className = "mb-12",
  theme = "light",
}: SectionHeadingProps) => (
  <div className={`${className} ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl ${maxWidth} mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
