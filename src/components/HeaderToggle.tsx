"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface HeaderToggleProps {
  className?: string;
}

export default function HeaderToggle({ className = "" }: HeaderToggleProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <h3
      className={`flex items-center justify-center text-center gap-3 rounded-md text-xl sm:text-lg font-medium bg-gradient-to-r from-[#5D7DDE] to-blue-400 text-transparent bg-clip-text ${className}`}
    >
      <Switch
        checked={isChecked}
        onCheckedChange={setIsChecked}
        className="bg-blue-200 border-1 data-[state=checked]:bg-blue-200 data-[state=unchecked]:bg-blue-[#6a8fff]"
        thumbClassName="bg-blue-500"
      />
      <div className="text-gray-700 h-10 flex items-center justify-center text-center">
        {isChecked ? (
          <div className="gap-5 delay-200">
            <h1 className="bg-gradient-to-r from-[#5D7DDE] via-blue-500 to-blue-400 text-transparent bg-clip-text delay-200">
              Zentria AI <br />
            </h1>
          </div>
        ) : (
          <h1 className="my-5 bg-gradient-to-r from-[#5D7DDE] to-[#6a8fff] text-transparent bg-clip-text delay-200">
            Upgrade to AI
          </h1>
        )}
      </div>
    </h3>
  );
}
