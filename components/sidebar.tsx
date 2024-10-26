"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Calendar,
  Users,
  Syringe,
  Users2,
  Receipt,
  BarChart3,
  ShoppingCart,
  CreditCard,
  Package,
  Plane,
  FileText,
  HeadphonesIcon,
  Building2,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { 
    name: 'CLINIC',
    items: [
      { name: 'Reservations', href: '/reservations', icon: Calendar },
      { name: 'Patients', href: '/patients', icon: Users },
      { name: 'Treatments', href: '/treatments', icon: Syringe },
      { name: 'Staff List', href: '/staff', icon: Users2 },
    ]
  },
  {
    name: 'FINANCE',
    items: [
      { name: 'Accounts', href: '/accounts', icon: Receipt },
      { name: 'Sales', href: '/sales', icon: BarChart3 },
      { name: 'Purchases', href: '/purchases', icon: ShoppingCart },
      { name: 'Payment Method', href: '/payment', icon: CreditCard },
    ]
  },
  {
    name: 'PHYSICAL ASSET',
    items: [
      { name: 'Stocks', href: '/stocks', icon: Package },
      { name: 'Peripherals', href: '/peripherals', icon: Plane },
    ]
  },
  { name: 'Report', href: '/report', icon: FileText },
  { name: 'Customer Support', href: '/support', icon: HeadphonesIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-xl">Zendenta</span>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium">Avicena Clinic</h3>
          <p className="text-sm text-muted-foreground">845 Euclid Avenue, CA</p>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        {navigation.map((group, idx) => (
          <div key={group.name} className={cn("mb-6", idx !== 0 && "mt-6")}>
            {group.name && !group.href && (
              <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                {group.name}
              </h3>
            )}
            {group.items ? (
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavItem
                    key={item.name}
                    {...item}
                    active={pathname === item.href}
                  />
                ))}
              </div>
            ) : (
              <NavItem
                {...group}
                active={pathname === group.href}
              />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

function NavItem({ name, href, icon: Icon, active }: {
  name: string;
  href: string;
  icon: any;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon className="h-4 w-4" />
      {name}
    </Link>
  );
}