/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { MouseEventHandler, useState } from 'react';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickCuaHang?: MouseEventHandler<HTMLElement>;
  onClickMac?: MouseEventHandler<HTMLElement>;
  onClickIPad?: MouseEventHandler<HTMLElement>;
  onClickIPhone?: MouseEventHandler<HTMLElement>;
  onClickWatch?: MouseEventHandler<HTMLElement>;
  onClickAirPods?: MouseEventHandler<HTMLElement>;
  onClickTVNha?: MouseEventHandler<HTMLElement>;
  onClickGiaiTri?: MouseEventHandler<HTMLElement>;
  onClickPhuKien?: MouseEventHandler<HTMLElement>;
  onClickHoTro?: MouseEventHandler<HTMLElement>;
  onClickSearch?: MouseEventHandler<HTMLElement>;
  onClickCart?: MouseEventHandler<HTMLElement>;
}

const AppleNavbar: React.FC<OnClickProps> = ({
  id,
  style,
  className,
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
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className={`bg-[#f5f5f7]/90 backdrop-blur-md fixed top-0 w-full z-50 ${className || ''}`} id={id} style={style}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between h-12 px-4 md:px-6">
          <div className="flex items-center space-x-6 md:space-x-8 text-sm">
            <button onClick={onClickCuaHang} className="text-gray-800 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </button>
            <button onClick={onClickCuaHang} className="text-gray-800 hover:text-black">
              Cửa Hàng
            </button>
            <button onClick={onClickMac} className="hidden md:block text-gray-800 hover:text-black">
              Mac
            </button>
            <button onClick={onClickIPad} className="hidden md:block text-gray-800 hover:text-black">
              iPad
            </button>
            <button onClick={onClickIPhone} className="hidden md:block text-gray-800 hover:text-black">
              iPhone
            </button>
            <button onClick={onClickWatch} className="hidden md:block text-gray-800 hover:text-black">
              Watch
            </button>
            <button onClick={onClickAirPods} className="hidden md:block text-gray-800 hover:text-black">
              AirPods
            </button>
            <button onClick={onClickTVNha} className="hidden md:block text-gray-800 hover:text-black">
              TV & Nhà
            </button>
            <button onClick={onClickGiaiTri} className="hidden md:block text-gray-800 hover:text-black">
              Giải Trí
            </button>
            <button onClick={onClickPhuKien} className="hidden md:block text-gray-800 hover:text-black">
              Phụ Kiện
            </button>
            <button onClick={onClickHoTro} className="hidden md:block text-gray-800 hover:text-black">
              Hỗ Trợ
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={(e) => { setIsSearchOpen(!isSearchOpen); onClickSearch?.(e); }} className="text-gray-800 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button onClick={onClickCart} className="text-gray-800 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isSearchOpen && (
          <div className="absolute w-full bg-white p-4 shadow-lg">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Tìm kiếm trên apple.com" className="w-full outline-none bg-transparent" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppleNavbar;