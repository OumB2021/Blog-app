import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

interface LogoutProps {
  className?: string;
  children: React.ReactNode;
}
export const LogOut = ({ className, children }: LogoutProps) => {
  return <LogoutLink className={className}>{children}</LogoutLink>;
};
