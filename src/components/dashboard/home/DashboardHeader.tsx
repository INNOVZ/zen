import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import { DashboardHeaderProps } from "@/types/dashboard";
import { getUserFirstName } from "@/utils/userUtils";

export const DashboardHeader = memo<DashboardHeaderProps>(
  ({ user, onTrainClick, onCustomizeClick }) => (
    <header className="flex justify-between items-center bg-white p-8 rounded-t-2xl">
      <div>
        <h1 className="text-3xl text-[#0a0a60] font-bold">
          Welcome back, {getUserFirstName(user)}!
        </h1>
        <p className="text-gray-700 mt-1">
          Manage your AI chatbots and training data
        </p>
      </div>
      <div className="flex gap-2" role="group" aria-label="Primary actions">
        <Button
          onClick={onTrainClick}
          variant="outline"
          className="pointer flex items-center gap-2"
          aria-label="Add training data"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Add Training Data
        </Button>
        <Button
          onClick={onCustomizeClick}
          className="pointer flex items-center gap-2"
          aria-label="Create new chatbot"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Create Chatbot
        </Button>
      </div>
    </header>
  )
);

DashboardHeader.displayName = "DashboardHeader";
