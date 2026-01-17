"use client";

import { useState, useEffect, useRef } from "react";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Clock, Loader2, Save, RotateCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface CalendarSettingsData {
  appointment_durations: number[];
  default_duration: number;
  business_hours: { start_hour: number; end_hour: number };
  working_days: number[];
  buffer_minutes: number;
  max_advance_days: number;
  min_advance_hours: number;
  timezone: string | null;
}

const DAYS_OF_WEEK = [
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" },
  { value: 7, label: "Sunday" },
];

const DURATION_OPTIONS = [15, 30, 45, 60, 90, 120];

const HOUR_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  value: i,
  label: `${i.toString().padStart(2, "0")}:00`,
}));

export default function CalendarSettings() {
  const [settings, setSettings] = useState<CalendarSettingsData>({
    appointment_durations: [15, 30, 45, 60],
    default_duration: 30,
    business_hours: { start_hour: 9, end_hour: 17 },
    working_days: [1, 2, 3, 4, 5],
    buffer_minutes: 0,
    max_advance_days: 60,
    min_advance_hours: 1,
    timezone: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const originalSettings = useRef<CalendarSettingsData | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      loadSettings();
    }
  }, []);

  const loadSettings = async () => {
    try {
      setIsLoading(true);
      const data = await mcpApi.getCalendarSettings();
      setSettings(data);
      originalSettings.current = { ...data };
      setHasChanges(false);
    } catch (error) {
      console.error("Failed to load calendar settings:", error);
      toast.error("Failed to load calendar settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const result = await mcpApi.updateCalendarSettings(settings);
      if (result.success) {
        toast.success("Calendar settings saved successfully!");
        originalSettings.current = { ...settings };
        setHasChanges(false);
      } else {
        toast.error(result.message || "Failed to save settings");
      }
    } catch (error: unknown) {
      console.error("Failed to save calendar settings:", error);
      const errorObj = error as { message?: string };
      toast.error(errorObj?.message || "Failed to save calendar settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    if (originalSettings.current) {
      setSettings({ ...originalSettings.current });
      setHasChanges(false);
    }
  };

  const updateSettings = (updates: Partial<CalendarSettingsData>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
    setHasChanges(true);
  };

  const toggleDuration = (duration: number) => {
    const newDurations = settings.appointment_durations.includes(duration)
      ? settings.appointment_durations.filter((d) => d !== duration)
      : [...settings.appointment_durations, duration].sort((a, b) => a - b);

    // Ensure at least one duration is selected
    if (newDurations.length === 0) {
      toast.error("At least one duration must be selected");
      return;
    }

    // If removing the default duration, set a new default
    let newDefault = settings.default_duration;
    if (!newDurations.includes(settings.default_duration)) {
      newDefault = newDurations[0];
    }

    updateSettings({
      appointment_durations: newDurations,
      default_duration: newDefault,
    });
  };

  const toggleWorkingDay = (day: number) => {
    const newDays = settings.working_days.includes(day)
      ? settings.working_days.filter((d) => d !== day)
      : [...settings.working_days, day].sort((a, b) => a - b);

    if (newDays.length === 0) {
      toast.error("At least one working day must be selected");
      return;
    }

    updateSettings({ working_days: newDays });
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading calendar settings...
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Appointment Settings
        </CardTitle>
        <CardDescription>
          Configure appointment durations, business hours, and booking rules
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Appointment Durations */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Available Appointment Durations
          </Label>
          <div className="flex flex-wrap gap-2">
            {DURATION_OPTIONS.map((duration) => (
              <Button
                key={duration}
                variant={
                  settings.appointment_durations.includes(duration)
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => toggleDuration(duration)}
                className="min-w-[70px]"
              >
                {duration} min
              </Button>
            ))}
          </div>
        </div>

        {/* Default Duration */}
        <div className="space-y-2">
          <Label htmlFor="default-duration">Default Duration</Label>
          <Select
            value={settings.default_duration.toString()}
            onValueChange={(value) =>
              updateSettings({ default_duration: parseInt(value) })
            }
          >
            <SelectTrigger id="default-duration" className="w-[180px]">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {settings.appointment_durations.map((duration) => (
                <SelectItem key={duration} value={duration.toString()}>
                  {duration} minutes
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Business Hours */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Business Hours</Label>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="start-hour"
                className="text-sm text-muted-foreground"
              >
                From
              </Label>
              <Select
                value={settings.business_hours.start_hour.toString()}
                onValueChange={(value) =>
                  updateSettings({
                    business_hours: {
                      ...settings.business_hours,
                      start_hour: parseInt(value),
                    },
                  })
                }
              >
                <SelectTrigger id="start-hour" className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HOUR_OPTIONS.map((hour) => (
                    <SelectItem key={hour.value} value={hour.value.toString()}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="end-hour"
                className="text-sm text-muted-foreground"
              >
                To
              </Label>
              <Select
                value={settings.business_hours.end_hour.toString()}
                onValueChange={(value) =>
                  updateSettings({
                    business_hours: {
                      ...settings.business_hours,
                      end_hour: parseInt(value),
                    },
                  })
                }
              >
                <SelectTrigger id="end-hour" className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HOUR_OPTIONS.map((hour) => (
                    <SelectItem key={hour.value} value={hour.value.toString()}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Working Days */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Working Days</Label>
          <div className="flex flex-wrap gap-3">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day.value} className="flex items-center space-x-2">
                <Switch
                  id={`day-${day.value}`}
                  checked={settings.working_days.includes(day.value)}
                  onCheckedChange={() => toggleWorkingDay(day.value)}
                />
                <Label
                  htmlFor={`day-${day.value}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {day.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Buffer Time */}
        <div className="space-y-2">
          <Label htmlFor="buffer-minutes">Buffer Between Appointments</Label>
          <Select
            value={settings.buffer_minutes.toString()}
            onValueChange={(value) =>
              updateSettings({ buffer_minutes: parseInt(value) })
            }
          >
            <SelectTrigger id="buffer-minutes" className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">No buffer</SelectItem>
              <SelectItem value="5">5 minutes</SelectItem>
              <SelectItem value="10">10 minutes</SelectItem>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advance Booking Limits */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="max-advance-days">Max Advance Booking</Label>
            <div className="flex items-center gap-2">
              <Input
                id="max-advance-days"
                type="number"
                min={1}
                max={365}
                value={settings.max_advance_days}
                onChange={(e) =>
                  updateSettings({
                    max_advance_days: parseInt(e.target.value) || 60,
                  })
                }
                className="w-[100px]"
              />
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="min-advance-hours">Min Notice Required</Label>
            <div className="flex items-center gap-2">
              <Input
                id="min-advance-hours"
                type="number"
                min={0}
                max={168}
                value={settings.min_advance_hours}
                onChange={(e) =>
                  updateSettings({
                    min_advance_hours: parseInt(e.target.value) || 1,
                  })
                }
                className="w-[100px]"
              />
              <span className="text-sm text-muted-foreground">hours</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t">
          <Button
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
            className="flex items-center gap-2"
          >
            {isSaving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Settings
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={isSaving || !hasChanges}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          {hasChanges && (
            <span className="text-sm text-amber-600">
              You have unsaved changes
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
