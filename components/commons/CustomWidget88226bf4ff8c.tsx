/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { MouseEventHandler, useState } from 'react';
import _ from 'lodash';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  data?: any;
  items?: any[];
  onClickRow?: MouseEventHandler<HTMLElement> | undefined;
  onClickPrevious?: MouseEventHandler<HTMLElement> | undefined;
  onClickNext?: MouseEventHandler<HTMLElement> | undefined;
  onClickPage?: MouseEventHandler<HTMLElement> | undefined;
}

const TailwindTableWithPagination: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  data,
  items,
  onClickRow,
  onClickPrevious,
  onClickNext,
  onClickPage,
  ...props
}) => {
  // Sample data
  const defaultItems = [
    { id: 1, category: 'Electronics', company: 'Apple', product: 'iPhone 13', description: 'The latest iPhone with advanced features', price: '$999' },
    { id: 2, category: 'Clothing', company: 'Nike', product: 'Running Shoes', description: 'High-quality running shoes for athletes', price: '$89' },
    { id: 3, category: 'Books', company: 'Penguin Books', product: 'The Great Gatsby', description: 'Classic novel by F. Scott Fitzgerald', price: '$12' },
    { id: 4, category: 'Home Appliances', company: 'Samsung', product: 'Smart Refrigerator', description: 'Refrigerator with smart features and spacious design', price: '$1499' },
    { id: 5, category: 'Electronics', company: 'Sony', product: 'PlayStation 5', description: 'Next-gen gaming console', price: '$499' },
    { id: 6, category: 'Electronics', company: 'Dell', product: 'Laptop XPS 13', description: 'High-performance laptop for professionals', price: '$1299' },
    { id: 7, category: 'Books', company: 'Harper Collins', product: 'To Kill a Mockingbird', description: 'Classic American literature', price: '$15' },
    { id: 8, category: 'Clothing', company: 'Adidas', product: 'Sports Jacket', description: 'Comfortable sports jacket for outdoor activities', price: '$75' },
    { id: 9, category: 'Home Appliances', company: 'LG', product: 'Washing Machine', description: 'Energy-efficient washing machine', price: '$899' },
    { id: 10, category: 'Electronics', company: 'Canon', product: 'DSLR Camera', description: 'Professional camera for photography', price: '$1599' }
  ];

  const safeItems = _.isArray(items) ? items : defaultItems;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(safeItems.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = safeItems.slice(startIndex, endIndex);

  const handleRowClick = (event: React.MouseEvent, item: any) => {
    event.currentTarget.setAttribute('data-item', JSON.stringify(item));
    onClickRow?.(event);
  };

  const handlePreviousClick = (event: React.MouseEvent) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onClickPrevious?.(event);
    }
  };

  const handleNextClick = (event: React.MouseEvent) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onClickNext?.(event);
    }
  };

  const handlePageClick = (event: React.MouseEvent, page: number) => {
    setCurrentPage(page);
    event.currentTarget.setAttribute('data-page', page.toString());
    onClickPage?.(event);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={(e) => handlePageClick(e, i)}
          className={`px-3 py-1 mx-1 text-sm font-medium rounded-md transition-colors duration-200 ${
            i === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div id={id} style={style} className={`p-6 bg-white ${className ?? ''}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tailwind Table With Pagination</h2>
      
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((item, index) => (
              <tr
                key={item?.id ?? index}
                onClick={(e) => handleRowClick(e, item)}
                className="hover:bg-gray-50 cursor-pointer transition-colors duration-200 even:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm text-gray-900">{item?.id ?? ''}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item?.category ?? ''}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item?.company ?? ''}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item?.product ?? ''}</td>
                <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">{item?.description ?? ''}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item?.price ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, safeItems.length)} of {safeItems.length} entries
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            &lt;
          </button>
          
          {renderPaginationButtons()}
          
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindTableWithPagination;