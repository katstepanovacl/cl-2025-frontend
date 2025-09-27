import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MidNavigation = () => {
  return (
    <NavigationMenu className="items-start">
      <NavigationMenuList className="flex flex-col lg:flex-row items-start">
        <NavigationMenuItem>
          <NavigationMenuLink data-analytics="features_nav" href="/features">
            Features
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            data-analytics="for_planners_nav"
            href="/for-planners"
          >
            For Planners
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            data-analytics="for_vendors_nav"
            href="/for-vendors"
          >
            For Vendors
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink data-analytics="about_nav" href="/about">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink data-analytics="pricing_nav" href="/pricing">
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MidNavigation;
