interface BannerProps {
  title: string;
  descriptiton?: string;
  descriptiton2?: string;
}

const Banner = ({ title, descriptiton, descriptiton2 }: BannerProps) => {
  return (
    <section className="py-8">
      <div
        className="max-w-7xl mx-auto  rounded-3xl"
        style={{
          backgroundImage: `url("/bg2.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-bg-widget min-h-50.5 px-8 rounded-3xl flex pt-16  flex-col items-center justify-center text-white   ">
          <h1 className="text-center text-[32px] font-medium">{title}</h1>
          <div className="space-y-4 text-center max-w-5xl  pb-16">
            <p>{descriptiton}</p>
            <p>{descriptiton2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
