import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ExternalLink } from 'lucide-react';

const resourceLinks = [
  {
    label: 'Preferred Customer',
    url: 'https://www.amsoil.com/offers/pc/?zo=2011593',
  },
  {
    label: 'Commercial Account',
    url: 'https://www.amsoil.com/business-opportunities/get-a-commercial-account/?zo=2011593',
  },
  {
    label: 'Retail Account',
    url: 'https://www.amsoil.com/business-opportunities/sell-in-your-store/?zo=2011593',
  },
];

const ResourcesDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#DC143C] transition-colors duration-300 font-medium focus:outline-none data-[state=open]:text-[#DC143C]">
        Resources
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white border-gray-200 shadow-xl rounded-xl p-2 min-w-[220px]"
        align="end"
      >
        {resourceLinks.map((link, index) => (
          <DropdownMenuItem
            key={link.label}
            asChild
            className={`cursor-pointer rounded-lg hover:bg-gray-50 focus:bg-gray-50 transition-colors p-0 ${index ? 'mt-1' : ''}`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#003366] group"
            >
              <span>{link.label}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#DC143C] transition-colors" />
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResourcesDropdown;
