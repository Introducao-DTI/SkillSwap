import { useState } from "react";
import { 
  Menu as MenuIcon,
  BellRing
} from "lucide-react";
import { Menu } from "./Menu";
import SkillSwap from "../assets/logo-skillswap-full-original.webp";
import { Button } from "./Button/Button";

type Props = {
  children: React.ReactNode;
  showMenu?: boolean;
  centered?: boolean;
  className?: string;
};

export const PageLayout = ({
  children,
  showMenu = true,
  centered = false,
  className = "",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-neutral-cream">
      {showMenu && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}

      {isOpen && showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main
        className={`
          min-h-screen flex-1 p-4 transition-all duration-300 sm:p-6 lg:p-8
          ${centered ? "flex items-center justify-center" : ""}
          ${className}
        `}
      >
        {showMenu && (
          <div className="mb-4 flex items-center justify-between md:hidden">
            <Button
              theme="accent-red"
              variant="primary"
              className="inline-flex rounded-xl bg-neutral-pink px-4 py-3 text-neutral-cream shadow-sm transition-colors hover:bg-primary-light"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon size={18} className="text-primary-dark"/>
            </Button>

            <p className="text-support uppercase tracking-[0.2em] text-accent-red">
              Olá, usuário!
            </p>

            <Button
              theme="accent-red"
              variant="primary"
              className="inline-flex rounded-xl bg-neutral-pink px-4 py-3 text-neutral-cream shadow-sm transition-colors hover:bg-primary-light"
            >
              <BellRing size={18} className="text-primary-dark"/>
            </Button>
          </div>
        )}

        {showMenu && (
          <div className="mb-6 hidden items-center justify-between md:flex">
            <div className="flex items-center gap-6">
              <img src={SkillSwap} className="w-30" alt="SkillSwap" />

              <p className="text-support uppercase tracking-[0.2em] text-accent-red">
                Olá, usuário!
              </p>

            </div>

            <Button
              theme="accent-red"
              variant="primary"
              className="inline-flex rounded-xl bg-neutral-pink px-4 py-3 text-neutral-cream shadow-sm transition-colors hover:bg-primary-light"
            >
              <BellRing size={18} className="text-primary-dark" />
            </Button>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};
