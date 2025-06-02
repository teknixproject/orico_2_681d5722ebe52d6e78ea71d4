/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { MouseEventHandler } from 'react';
import _ from 'lodash';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  data?: any;
  items?: any[];
  onClickApple?: MouseEventHandler<HTMLElement> | undefined;
  onClickCuaHang?: MouseEventHandler<HTMLElement> | undefined;
  onClickMac?: MouseEventHandler<HTMLElement> | undefined;
  onClickIPad?: MouseEventHandler<HTMLElement> | undefined;
  onClickIPhone?: MouseEventHandler<HTMLElement> | undefined;
  onClickWatch?: MouseEventHandler<HTMLElement> | undefined;
  onClickAirPods?: MouseEventHandler<HTMLElement> | undefined;
  onClickTVNha?: MouseEventHandler<HTMLElement> | undefined;
  onClickGiaiTri?: MouseEventHandler<HTMLElement> | undefined;
  onClickPhuKien?: MouseEventHandler<HTMLElement> | undefined;
  onClickHoTro?: MouseEventHandler<HTMLElement> | undefined;
  onClickSearch?: MouseEventHandler<HTMLElement> | undefined;
  onClickCart?: MouseEventHandler<HTMLElement> | undefined;
}

const AppleNavigation: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  data,
  items,
  onClickApple,
  onClickCuaHang,
  onClickMac,
  onClickIPad,
  onClickIPhone,
  onClickWatch,
  onClickAirPods,
  onClickTVNha,
  onClickGiaiTri,
  onClickPhuKien,
  onClickHoTro,
  onClickSearch,
  onClickCart,
  ...props
}) => {
  const safeData = data ?? {};
  const safeItems = _.isArray(items) ? items : [];

  const navigationItems = [
    { name: 'Cửa Hàng', onClick: onClickCuaHang },
    { name: 'Mac', onClick: onClickMac },
    { name: 'iPad', onClick: onClickIPad },
    { name: 'iPhone', onClick: onClickIPhone },
    { name: 'Watch', onClick: onClickWatch },
    { name: 'AirPods', onClick: onClickAirPods },
    { name: 'TV & Nhà', onClick: onClickTVNha },
    { name: 'Giải Trí', onClick: onClickGiaiTri },
    { name: 'Phụ Kiện', onClick: onClickPhuKien },
    { name: 'Hỗ Trợ', onClick: onClickHoTro }
  ];

  return (
    <nav 
      id={id}
      style={style}
      className={`bg-gray-100 border-b border-gray-200 ${className ?? ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={onClickApple}
              className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-gray-800" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="text-gray-800 hover:text-black px-3 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={onClickSearch}
              className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            >
              <svg className="w-5 h-5 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              onClick={onClickCart}
              className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            >
              <svg className="w-5 h-5 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
              <svg className="w-5 h-5 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavigation;