import React from 'react';

interface BreadcrumbPath {
  name: string;
  onClick: (() => void) | null;
}

interface BreadcrumbProps {
  paths: BreadcrumbPath[];
}

const Breadcrumb = ({ paths }: BreadcrumbProps) => (
  <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-4 relative z-10">
    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
      {paths.map((path, idx) => (
        <React.Fragment key={idx}>
          <button 
            onClick={path.onClick || undefined} 
            className={`hover:text-[#D62828] transition-colors ${idx === paths.length - 1 ? 'text-[#D62828]' : ''}`}
            disabled={!path.onClick}
          >
            {path.name}
          </button>
          {idx < paths.length - 1 && <span className="text-gray-400">/</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Breadcrumb;
