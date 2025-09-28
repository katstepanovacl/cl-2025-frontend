import Hero from "./_components/hero";
import placeholder from "@/assets/images/hero-placeholder.png";
import Headline from "./_components/headline";
import IntentSignup from "./_components/intent-signup";

const HomePage = () => {
  return (
    <div>
      <Hero hero={placeholder} logo />
      <Headline
        headline="BRING YOUR EVENT TO LIFE, EFFORTLESSLY"
        subheadline="Your go-to platform for seamless event planning and vendor collaboration."
      />
      <div className="flex flex-col gap-6 px-4 md:px-10 lg:px-20">
        <IntentSignup
          title="Join the waitlist"
          description="Be the first to know when we launch."
          buttonText="Join the waitlist"
          buttonLink="/waitlist"
        />
        <IntentSignup
          title="Join the waitlist"
          description="Be the first to know when we launch."
          buttonText="Join the waitlist"
          buttonLink="/waitlist"
        />
      </div>
    </div>
  );
};

export default HomePage;
