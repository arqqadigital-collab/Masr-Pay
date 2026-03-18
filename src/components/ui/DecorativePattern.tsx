interface DecorativePatternProps {
  className?: string;
}

const DecorativePattern = ({ className }: DecorativePatternProps) => (
  <img 
    src="https://res.cloudinary.com/dcjufshrh/image/upload/v1773651426/Group_1_k8mbir.png" 
    alt=""
    aria-hidden="true"
    className={`absolute pointer-events-none opacity-[0.15] z-0 select-none ${className}`}
  />
);

export default DecorativePattern;
