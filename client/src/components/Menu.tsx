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

import SkillSwap from "../assets/logo-skillswap-full-original.webp";

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
    label: "Operações e pessoas",
    icon: Handshake,
    subItems: [
      { label: "Gestão de Pessoas", icon: BookUser , href: "/" },
      { label: "Aprovações", icon: BadgeCheck, href: "/" },
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
      { label: "Marketplace", icon: Store, href: "/" },
      { label: "Novos Pedidos", icon: HandCoins, href: "/" },
    ],
  },
  {
    label: "Governança",
    icon: FileChartColumn,
    subItems: [
      { label: "Auditoria de Logs", icon: ChartNoAxesCombined, href: "/" },
      { label: "Feedbacks", icon: MessageCircleCheck, href: "/" },
      { label: "Dados da Empresa", icon: Building2, href: "/" },
    ],
  },
];

const profileItem = {
  label: "Usuário",
  href: "/",
  icon: Users,
};

type NavItemsProps = {
  isCollapsed: boolean;
  openItem: string | null;
  onToggleItem: (label: string, hasSubItems: boolean) => void;
};

const baseItemClass =
  "flex w-full items-center rounded-xl py-1 text-primary-dark transition-colors hover:bg-white/50";

const iconSlotClass = "flex h-8 w-14 shrink-0 items-center justify-center";
const labelSlotClass =
  "min-w-0 overflow-hidden whitespace-nowrap text-link transition-[max-width,opacity] duration-300";
const labelExpandedClass = "max-w-44 opacity-100";
const labelCollapsedClass = "max-w-0 opacity-0";

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
                className={baseItemClass}
                onClick={() => onToggleItem(label, true)}
              >
                <span className="flex min-w-0 flex-1 items-center">
                  <span className={iconSlotClass}>
                    <Icon size={18} />
                  </span>

                  <span
                    className={`
                      ${labelSlotClass} ${isCollapsed ? labelCollapsedClass : labelExpandedClass}
                    `}
                    title={label}
                  >
                    <span className="block truncate">{label}</span>
                  </span>
                </span>

                {!isCollapsed && (
                  <ChevronDown
                    size={18}
                    className={`ml-1 mr-4 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {!isCollapsed && isExpanded && (
                <div className="mt-1 space-y-1 pl-8">
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
          className={baseItemClass}
        >
          <span className="flex min-w-0 flex-1 items-center">
            <span className={iconSlotClass}>
              <Icon size={20} />
            </span>

            <span
              className={`
                ${labelSlotClass} ${isCollapsed ? labelCollapsedClass : labelExpandedClass}
              `}
              title={label}
            >
              <span className="block truncate">{label}</span>
            </span>
          </span>
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
          fixed top-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-primary-dark/10
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
          ${isOpen ? "w-72" : "w-20"}
        `}
      >
        <div
          className={`flex items-center px-3 py-4 ${isOpen ? "justify-between" : "justify-center"}`}
        >
          {isOpen && <img src={SkillSwap} className="w-28 shrink-0" alt="SkillSwap" />}

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
                flex items-center rounded-xl py-3 text-primary-dark
                transition-colors hover:bg-white/50
              `}
            >
              <span className={iconSlotClass}>
                <ProfileIcon size={20} />
              </span>
              <span
                className={`${labelSlotClass} ${isOpen ? labelExpandedClass : labelCollapsedClass}`}
                title={profileItem.label}
              >
                <span className="block truncate">{profileItem.label}</span>
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
