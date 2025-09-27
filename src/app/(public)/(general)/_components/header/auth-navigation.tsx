import Link from "next/link";

const AuthNavigation = () => {
  return (
    <div className="hidden lg:flex items-center gap-6">
      <Link
        className="text-sm font-bold leading-[20px] tracking-[0.1px] text-accent"
        data-analytics="signup_nav"
        href="/signup"
      >
        Sign Up
      </Link>
      <Link
        className="text-sm font-bold leading-[20px] tracking-[0.1px] bg-accent text-white px-5 py-3 rounded-lg"
        data-analytics="login_nav"
        href="/login"
      >
        Log In
      </Link>
    </div>
  );
};

export default AuthNavigation;
