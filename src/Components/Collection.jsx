import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Collection = (props) => {
  // console.log(props.list.asset.image)
  return (
    <div className="group relative mb-5">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={props.list.asset.image}
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0"></span>
        {props.list.asset.description}
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {props.list.asset.name}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="20"
          height="20"
        >
          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
        </svg>
        {props.list.currencyValuePerToken.displayValue}
      </p>
      <div className="flex items-center justify-end space-x-2">
        <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400" />
        <div className="text-xs text-gray-800 dark:text-gray-400">
          {props.list.asset?.stats?.favorites ?? 0}
        </div>
      </div>
    </div>
  );
};

export default Collection;
