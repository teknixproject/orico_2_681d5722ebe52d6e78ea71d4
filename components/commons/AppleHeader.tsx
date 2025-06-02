/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client'
import React, { MouseEventHandler, useState, useMemo } from 'react';

interface CapabilityData {
  capabillity_type: string;
  instance_name: string;
  namespace: string;
  creation_date: string;
  status: string;
}

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  data?: CapabilityData[];
  onClickRow?: MouseEventHandler<HTMLTableRowElement> | undefined;
  onClickMenu?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickPrevious?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickNext?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickPageSize?: MouseEventHandler<HTMLSelectElement> | undefined;
}

const CapabilityTable: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  data = [
    {
      capabillity_type: 'API Connect',
      instance_name: 'apic-ty',
      namespace: 'apic',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'MQ',
      instance_name: 'mq-sdg-wewe',
      namespace: 'mq',
      creation_date: 'Invalid Date',
      status: 'Not ready',
    },
    {
      capabillity_type: 'App Connect',
      instance_name: 'ace-dash',
      namespace: 'ace',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'Asset Repository',
      instance_name: 'asset-repo',
      namespace: 'integration',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'Event Streams',
      instance_name: 'yee-es',
      namespace: 'eventstreams',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'MQ',
      instance_name: 'mq-sept-2019',
      namespace: 'mq',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'MQ',
      instance_name: 'mq-tli',
      namespace: 'mq',
      creation_date: 'Invalid Date',
      status: 'Running',
    },
    {
      capabillity_type: 'MQ',
      instance_name: 'mqrob2',
      namespace: 'mq',
      creation_date: 'Invalid Date',
      status: 'Not ready',
    },
    {
      capabillity_type: 'Tracing',
      instance_name: 'od-tracing',
      namespace: 'tracing',
      creation_date: 'Invalid Date',
      status: 'Running',
    }
  ],
  onClickRow,
  onClickMenu,
  onClickPrevious,
  onClickNext,
  onClickPageSize,
}) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / pageSize);
  }, [data, pageSize]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize]);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value);
    setPageSize(newSize);
    setCurrentPage(1);
    if (onClickPageSize) {
      onClickPageSize(e as unknown as React.MouseEvent<HTMLSelectElement>);
    }
  };

  const goToPreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (onClickPrevious) {
      onClickPrevious(e);
    }
  };

  const goToNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (onClickNext) {
      onClickNext(e);
    }
  };
  
  return (
    <div className={`bg-white rounded-md shadow ${className || ''}`} id={id} style={style}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Capability type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Instance name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Namespace</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Creation date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={(e) => onClickRow && onClickRow(e)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.capabillity_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{item.instance_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.namespace}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.creation_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {item.status === 'Running' ? (
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm text-gray-900">Running</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></span>
                        <span className="text-sm text-gray-900">Not ready</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickMenu && onClickMenu(e);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">Items per page: </span>
          <select
            className="ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="ml-4 text-sm text-gray-700">
            {`${((currentPage - 1) * pageSize) + 1}–${Math.min(currentPage * pageSize, data.length)} of ${data.length} items`}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            {`of ${totalPages} pages`}
          </span>
          <div className="ml-4 flex">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityTable;