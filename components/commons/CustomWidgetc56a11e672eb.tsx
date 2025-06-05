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
  onClickLogo?: MouseEventHandler<HTMLElement> | undefined;
  onClickSearch?: MouseEventHandler<HTMLElement> | undefined;
  onClickIcons?: MouseEventHandler<HTMLElement> | undefined;
  onClickExample?: MouseEventHandler<HTMLElement> | undefined;
  onClickPricing?: MouseEventHandler<HTMLElement> | undefined;
  onClickPackage?: MouseEventHandler<HTMLElement> | undefined;
  onClickDocs?: MouseEventHandler<HTMLElement> | undefined;
}

const Navigation: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  data,
  items,
  onClickLogo,
  onClickSearch,
  onClickIcons,
  onClickExample,
  onClickPricing,
  onClickPackage,
  onClickDocs,
  ...props
}) => {
  const safeData = data ?? {};
  const safeItems = _.isArray(items) ? items : [];

  return (
    <nav 
      id={id}
      style={style}
      className={`bg-white border-b border-gray-200 px-6 py-4 ${className ?? ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={onClickLogo}
        >
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-gray-900">Hugeicons</span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {/* Search Icon */}
          <button 
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClickSearch}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          {/* Navigation Links */}
          <button 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            onClick={onClickIcons}
          >
            Icons
          </button>
          
          <button 
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            onClick={onClickExample}
          >
            Example
          </button>
          
          <button 
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            onClick={onClickPricing}
          >
            Pricing
          </button>
          
          <button 
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            onClick={onClickPackage}
          >
            Package
          </button>
          
          <button 
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            onClick={onClickDocs}
          >
            Docs
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;