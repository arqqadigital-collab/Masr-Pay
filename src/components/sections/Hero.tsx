const Hero = () => (
  <header className="relative h-screen w-full overflow-hidden bg-gray-900">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://res.cloudinary.com/dcjufshrh/video/upload/v1771507203/masr_pay_-_owu5bs.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-black/10"></div>
  </header>
);

export default Hero;
