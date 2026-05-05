import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("rentalert-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  const dismiss = () => {
    localStorage.setItem("rentalert-cookies", "1");
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-40 bg-primary text-primary-foreground rounded-xl shadow-card p-4 pr-10 animate-fade-up">
      <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 text-primary-foreground/70 hover:text-accent">
        <X className="h-4 w-4" />
      </button>
      <p className="text-sm">
        We use cookies to improve your experience on RentAlert PH. By continuing, you agree to our use of cookies.
      </p>
      <div className="mt-3">
        <Button variant="accent" size="sm" onClick={dismiss}>Got it</Button>
      </div>
    </div>
  );
};