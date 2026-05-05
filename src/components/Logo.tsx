import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group" aria-label="RentAlert PH home">
    <img src={logo} alt="RentAlert PH logo" className="h-9 w-9" width={36} height={36} />
    <span className={`font-bold text-lg tracking-tight ${light ? "text-white" : "text-primary"}`}>
      RentAlert <span className="text-accent">PH</span>
    </span>
  </Link>
);