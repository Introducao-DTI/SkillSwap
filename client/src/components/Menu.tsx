import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Cog,
  FileChartColumn,
  Handshake,
  Menu as MenuIcon,
  Users,
  Wallet,
  Zap,
  BookUser, 
  BadgeCheck,
  Globe,
  ShieldAlert,
  Store,
  HandCoins,
  ChartNoAxesCombined,
  MessageCircleCheck,
  Building2
} from "lucide-react";

import SkillSwap from "../assets/SkillSwap.png";
import { Button } from "./Button/Button";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

type MenuSubItem = {
  label: string;
  icon: React.ElementType;
  href: string;
};

type MenuItem = {
  label: string;
  href?: string;
  icon: React.ElementType;
  subItems?: MenuSubItem[];
};

const items: MenuItem[] = [
  {
    label: "Visao Geral",
    href: "/",
    icon: Zap,
  },
  {
    label: "Operaçoes e Pessoas",
    icon: Handshake,
    subItems: [
      { label: "Gestão de Pessoas", icon: BookUser , href: "/" },
      { label: "Aprovações de Habilidades", icon: BadgeCheck, href: "/" },
    ],
  },
  {
    label: "Motor de Mentorias",
    icon: Cog,
    subItems: [
      { label: "Monitoramento Global", icon: Globe, href: "/" },
      { label: "Intervenções Pendentes", icon: ShieldAlert, href: "/" },
    ],
  },
  {
    label: "Gamificação",
    icon: Wallet,
    subItems: [
      { label: "Catálogo do Marketplace", icon: Store, href: "/" },
      { label: "Pedidos de Resgate", icon: HandCoins, href: "/" },
    ],
  },
  {
    label: "Governança",
    icon: FileChartColumn,
    subItems: [
      { label: "Auditoria de Logs", icon: ChartNoAxesCombined, href: "/" },
      { label: "Moderação de Feedbacks", icon: MessageCircleCheck, href: "/" },
      { label: "Dados da Empresa", icon: Building2, href: "/" },
    ],
  },
];

const profileItem = {
  label: "Logado como Geovanna",
  href: "/",
  icon: Users,
};

type NavItemsProps = {
  isCollapsed: boolean;
  openItem: string | null;
  onToggleItem: (label: string, hasSubItems: boolean) => void;
};

const baseItemClass =
  "flex w-full items-center rounded-xl px-1 py-3 text-primary-dark transition-colors hover:bg-white/50";

const NavItems = ({ isCollapsed, openItem, onToggleItem }: NavItemsProps) => {
  return (
    <nav className="flex flex-col gap-2">
      {items.map(({ label, href, icon: Icon, subItems }) => {
        const hasSubItems = Boolean(subItems?.length);
        const isExpanded = openItem === label;

        if (hasSubItems) {
          return (
            <div key={label} className="overflow-hidden rounded-xl">
              <button
                type="button"
                className={`
                  ${baseItemClass}
                  ${isCollapsed ? "justify-center" : "justify-between gap-1"}
                `}
                onClick={() => onToggleItem(label, true)}
              >
                <span
                  className={`flex items-center ${isCollapsed ? "justify-center" : "gap-2"}`}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="text-link">{label}</span>}
                </span>

                {!isCollapsed && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {!isCollapsed && isExpanded && (
                <div className="mt-1 space-y-1 pl-5">
                  {subItems?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-center rounded-lg px-3 py-2 text-support text-primary-dark/80 transition-colors hover:bg-white/40 hover:text-primary-dark"
                    >
                      <subItem.icon size={18} className="mr-2"/>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={label}
            to={href ?? "/"}
            className={`
              ${baseItemClass}
              ${isCollapsed ? "justify-center" : "justify-start gap-3"}
            `}
          >
            <Icon size={20} />
            {!isCollapsed && <span className="text-link">{label}</span>}
          </Link>
        );
      })}
    </nav>
  );
};

export const Menu = ({ isOpen, setIsOpen }: Props) => {
  const ProfileIcon = profileItem.icon;
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggleItem = (label: string, hasSubItems: boolean) => {
    if (!hasSubItems) {
      return;
    }

    if (!isOpen) {
      setIsOpen(true);
      setOpenItem(label);
      return;
    }

    setOpenItem((current) => (current === label ? null : label));
  };

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-primary-dark/10
          bg-neutral-pink shadow-sm transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex items-center justify-between p-4">
          <img src={SkillSwap} className="w-28" alt="SkillSwap" />

          <button
            type="button"
            className="rounded-md p-2 text-primary-dark transition-colors hover:bg-white/40"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-4">
          <NavItems
            isCollapsed={false}
            openItem={openItem}
            onToggleItem={handleToggleItem}
          />

          <div className="mt-auto pt-4">
            <Link
              to={profileItem.href}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-primary-dark transition-colors hover:bg-white/50"
            >
              <ProfileIcon size={20} />
              <span className="text-link">{profileItem.label}</span>
            </Link>
          </div>
        </div>
      </aside>

      <aside
        className={`
          sticky top-0 hidden h-screen flex-col border-r border-primary-dark/10 bg-neutral-pink
          shadow-sm transition-all duration-300 md:flex
          ${isOpen ? "w-64" : "w-20"}
        `}
      >
        <div
          className={`flex items-center p-4 ${isOpen ? "justify-between" : "justify-center"}`}
        >
          {isOpen && <img src={SkillSwap} className="w-28" alt="SkillSwap" />}

          <button
            type="button"
            className="rounded-md p-2 text-primary-dark transition-colors hover:bg-white/40"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-4">
          <NavItems
            isCollapsed={!isOpen}
            openItem={openItem}
            onToggleItem={handleToggleItem}
          />

          <div className="mt-auto pt-4">
            <Link
              to={profileItem.href}
              className={`
                flex items-center rounded-xl px-3 py-3 text-primary-dark
                transition-colors hover:bg-white/50
                ${isOpen ? "justify-start gap-3" : "justify-center"}
              `}
            >
              <ProfileIcon size={20} />
              {isOpen && <span className="text-link">{profileItem.label}</span>}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
