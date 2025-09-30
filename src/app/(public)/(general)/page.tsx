import Hero from "./_components/hero";
import placeholder from "@/assets/images/hero-placeholder.png";
import cardPlaceholder from "@/assets/images/card-placeholder.png";
import Headline from "./_components/headline";
import IntentSignup from "./_components/intent-signup";
import Card from "./_components/card";
import Container from "@/components/ui/container";

const HomePage = () => {
  return (
    <Container variantWidth="page" variantHeight="page">
      <Hero hero={placeholder} logo />
      <Container variantWidth="default" variantHeight="default">
        <Headline
          firstHeadline
          headline="BRING YOUR EVENT TO LIFE, EFFORTLESSLY"
          subheadline="Your go-to platform for seamless event planning and vendor collaboration."
        />
      </Container>
      <Container
        variantWidth="default"
        variantHeight="default"
        className="w-full flex flex-col gap-6 lg:flex-row lg:gap-8 lg:justify-center"
      >
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
      </Container>
      <Container variantWidth="none" variantHeight="none">
        <div className="bg-peach py-16">
          <Headline headline="WHY CURATE LOCAL?" />
        </div>
        <Container
          variantWidth="default"
          variantHeight="none"
          backgroundColor="peach"
          className="pt-5 pb-16 lg:pt-16"
        >
          <Card
            variant="alternate"
            cardImage={cardPlaceholder}
            alt="card image"
            title="SAY GOODBYE TO CHAOS"
            description="No more juggling countless spreadsheets, endless email threads and scattered documents. All your tools live in one simple spot so you can find everything you need, exactly when you need it."
            buttonText="Learn More"
            buttonLink="/welcome/planner"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default HomePage;
