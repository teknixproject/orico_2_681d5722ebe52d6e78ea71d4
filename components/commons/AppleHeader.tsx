/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { MouseEventHandler } from 'react';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
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
  return (
    <nav className={`w-full bg-[#f5f5f7] bg-opacity-90 backdrop-blur-md fixed top-0 z-50 ${className || ''}`} id={id} style={style}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <button onClick={onClickCuaHang} className="p-2">
              <svg className="w-5 h-5" viewBox="0 0 14 16" fill="currentColor">
                <path d="M13.3677 5.05835C13.3023 4.46375 13.1368 3.94399 12.8712 3.4991C12.6055 3.05421 12.2562 2.67883 11.823 2.37296C11.3898 2.06708 10.8895 1.83101 10.322 1.66475C9.75449 1.49848 9.14371 1.41535 8.48963 1.41535C7.83555 1.41535 7.22477 1.49848 6.65727 1.66475C6.08977 1.83101 5.58942 2.06708 5.15623 2.37296C4.72304 2.67883 4.37379 3.05421 4.10848 3.4991C3.84317 3.94399 3.67767 4.46375 3.61196 5.05835C3.54626 5.65295 3.5134 6.30244 3.5134 7.00682C3.5134 7.7112 3.54626 8.3607 3.61196 8.9553C3.67767 9.5499 3.84317 10.0697 4.10848 10.5146C4.37379 10.9594 4.72304 11.3348 5.15623 11.6407C5.58942 11.9466 6.08977 12.1826 6.65727 12.3489C7.22477 12.5152 7.83555 12.5983 8.48963 12.5983C9.14371 12.5983 9.75449 12.5152 10.322 12.3489C10.8895 12.1826 11.3898 11.9466 11.823 11.6407C12.2562 11.3348 12.6055 10.9594 12.8712 10.5146C13.1368 10.0697 13.3023 9.5499 13.3677 8.9553C13.4334 8.3607 13.4663 7.7112 13.4663 7.00682C13.4663 6.30244 13.4334 5.65295 13.3677 5.05835Z" fill="currentColor"/>
              </svg>
            </button>
            <button onClick={onClickCuaHang} className="text-sm font-medium">Cửa Hàng</button>
            <button onClick={onClickMac} className="text-sm font-medium">Mac</button>
            <button onClick={onClickIPad} className="text-sm font-medium">iPad</button>
            <button onClick={onClickIPhone} className="text-sm font-medium">iPhone</button>
            <button onClick={onClickWatch} className="text-sm font-medium">Watch</button>
            <button onClick={onClickAirPods} className="text-sm font-medium">AirPods</button>
            <button onClick={onClickTVNha} className="text-sm font-medium">TV & Nhà</button>
            <button onClick={onClickGiaiTri} className="text-sm font-medium">Giải Trí</button>
            <button onClick={onClickPhuKien} className="text-sm font-medium">Phụ Kiện</button>
            <button onClick={onClickHoTro} className="text-sm font-medium">Hỗ Trợ</button>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={onClickSearch} className="p-2">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7 14.3L11.9 10.5C12.9 9.3 13.4 7.8 13.4 6.2C13.4 2.8 10.6 0 7.2 0C3.8 0 1 2.8 1 6.2C1 9.6 3.8 12.4 7.2 12.4C8.8 12.4 10.3 11.9 11.5 10.9L15.3 14.7C15.4 14.8 15.5 14.8 15.7 14.8C15.9 14.8 16 14.7 16 14.6C16 14.5 15.9 14.4 15.7 14.3ZM2 6.2C2 3.3 4.3 1 7.2 1C10.1 1 12.4 3.3 12.4 6.2C12.4 9.1 10.1 11.4 7.2 11.4C4.3 11.4 2 9.1 2 6.2Z" fill="currentColor"/>
              </svg>
            </button>
            <button onClick={onClickCart} className="p-2">
              <svg className="w-4 h-4" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 4H10.5V3C10.5 1.34 9.16 0 7.5 0C5.84 0 4.5 1.34 4.5 3V4H2.25C1.01 4 0 5.01 0 6.25V13.75C0 14.99 1.01 16 2.25 16H12.75C13.99 16 15 14.99 15 13.75V6.25C15 5.01 13.99 4 12.75 4ZM5.5 3C5.5 1.9 6.4 1 7.5 1C8.6 1 9.5 1.9 9.5 3V4H5.5V3ZM14 13.75C14 14.44 13.44 15 12.75 15H2.25C1.56 15 1 14.44 1 13.75V6.25C1 5.56 1.56 5 2.25 5H12.75C13.44 5 14 5.56 14 6.25V13.75Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavigation;