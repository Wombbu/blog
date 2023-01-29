"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
};

export const AudioPlayer = ({ src }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Copy audio ref to const to make sure it's present when cleaning up
    const current = audioRef.current;
    // Pause and clean up on unmount
    return () => {
      current.pause();
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current.play();
    } else {
      audioRef?.current.pause();
    }
  }, [isPlaying]);

  const onPlayPauseClick = (play: boolean) => {
    // Initialize audio on first play
    if (!audioRef.current.src) {
      audioRef.current.src = src;

      audioRef.current.addEventListener("ended", () => {
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      });
    }

    setIsPlaying(play);
  };

  return (
    <div
      className="flex justify-between items-center"
      onClick={(e) => e.preventDefault()}
    >
      {audioRef.current ? (
        <button
          type="button"
          className={`hover:shadow-outline rounded-full p-2 w-10 aspect-square text-gray-100 bg-gray-900 mr-2 flex items-center justify-center`}
          aria-label="Previous"
          onClick={(e) => {
            audioRef.current.duration;
            audioRef.current.currentTime = Math.max(
              0,
              audioRef.current.currentTime - 15
            );
          }}
        >
          <Image src="/skip.png" alt="Kelaa taakse" width={40} height={40} />
        </button>
      ) : null}
      {isPlaying ? (
        <button
          type="button"
          className="hover:shadow-outline rounded-full p-2 w-12 aspect-square bg-gray-900 text-gray-100 flex items-center justify-center"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          ⏸
        </button>
      ) : (
        <button
          type="button"
          className="hover:shadow-outline rounded-full p-2 w-12 aspect-square bg-gray-900 text-gray-100 flex items-center justify-center"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          ▶️
        </button>
      )}
      <button
        type="button"
        className="hover:shadow-outline rounded-full p-2 w-10 aspect-square bg-gray-900 ml-2 text-gray-100 flex items-center justify-center"
        aria-label="Next"
        onClick={(e) => {
          audioRef.current.currentTime = Math.min(
            audioRef.current.duration,
            audioRef.current.currentTime + 15
          );
        }}
      >
        <Image src="/skip.png" alt="Kelaa taakse" width={40} height={40} />
      </button>
    </div>
  );
};
