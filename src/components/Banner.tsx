interface BannerProps {
  title: string;
  descriptiton?: string;
}

const Banner = ({ title, descriptiton }: BannerProps) => {
  return (
    <section className="py-16">
      <div
        className="max-w-7xl mx-auto  rounded-3xl"
        style={{
          backgroundImage: `url("/bg2.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-bg-widget h-50.5 rounded-3xl flex flex-col items-center justify-center text-white text-[32px] font-medium ">
          <h1 className="text-center">{title}</h1>
          <p>{descriptiton}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
