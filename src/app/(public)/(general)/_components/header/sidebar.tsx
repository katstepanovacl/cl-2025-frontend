import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import burger from "@/assets/icons/burger.svg";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/curate-partial-black.svg";
import close from "@/assets/icons/close.svg";
import MidNavigation from "./mid-navigation";

const Sidebar = () => {
  return (
    <div className="lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Image src={burger} alt="burger" width={36} height={36} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-peach">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <DrawerTitle className="sr-only">
              Mobile Sidebar Navigation
            </DrawerTitle>
            <Link data-analytics="logo_mobile_nav" href="/">
              <Image src={logo} alt="logo" width={133} height={26.414} />
            </Link>
            <DrawerClose className="cursor-pointer">
              <Image src={close} alt="close" width={24} height={24} />
            </DrawerClose>
          </DrawerHeader>
          <MidNavigation />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Sidebar;
