"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = "",
  autoPlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mute the video if autoplay is enabled
    if (autoPlay) {
      video.muted = true;
      setIsMuted(true);
    }
  }, [autoPlay]);
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = Number(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const seekTime = (Number(e.target.value) / 100) * video.duration;
    video.currentTime = seekTime;
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className={`video-container relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={isMuted}
        controls={false}
        className="w-full h-auto"
        onClick={togglePlayPause}
      >
        Your browser does not support the video tag.
      </video>

      <div className="video-controls hidden absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button onClick={togglePlayPause} className="text-white">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          <button onClick={toggleMute} className="text-white">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider w-24"
          />
        </div>

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="progress-bar flex-grow"
        />

        {/* Fullscreen Button */}
        <button onClick={toggleFullScreen} className="text-white">
          <Maximize2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;

// Usage Example
