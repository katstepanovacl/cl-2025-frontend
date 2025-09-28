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
      <div className="mb-10 md:mb-25 lg:mb-17 w-full flex flex-col gap-6 px-4 md:px-5 lg:px-20 xl:px-28 lg:flex-row lg:gap-8 lg:justify-center">
        <IntentSignup
          title="I’m an Event Planner"
          description="Discover the all-in-one platform for event success."
          buttonText="Learn More"
          buttonLink="/welcome/planner"
        />
        <IntentSignup
          title="I’m a Vendor"
          description="Find, apply for and follow your events in one place."
          buttonText="Learn More"
          buttonLink="/welcome/vendor"
        />
      </div>
      <div className="bg-peach">
        <Headline headline="WHY CURATE LOCAL?" />
      </div>
    </div>
  );
};

export default HomePage;
