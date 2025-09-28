import Link from "next/link";
import { Button } from "@/components/ui/button";
const AuthNavigation = () => {
  return (
    <div className="hidden lg:flex items-center">
      <Button asChild variant="link">
        <Link
          className="text-sm font-bold leading-[20px] tracking-[0.1px] text-accent"
          data-analytics="signup_nav"
          href="/signup"
        >
          Sign Up
        </Link>
      </Button>
      <Button asChild variant="default">
        <Link
          className="text-sm font-bold leading-[20px] tracking-[0.1px]"
          data-analytics="login_nav"
          href="/login"
        >
          Log In
        </Link>
      </Button>
    </div>
  );
};

export default AuthNavigation;
