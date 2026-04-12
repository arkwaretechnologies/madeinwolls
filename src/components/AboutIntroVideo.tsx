"use client";

import { useEffect, useRef } from "react";

const VISIBLE_RATIO = 0.32;
/** Full scale is 1; ~60% reduction from max (linear ~0.4) */
const PLAYBACK_VOLUME = 0.4;

type AboutIntroVideoProps = {
  mediaClassName: string;
  videoClassName: string;
};

export default function AboutIntroVideo({
  mediaClassName,
  videoClassName,
}: AboutIntroVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fromObserverRef = useRef(false);
  const userHeldPauseRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const section = root.closest("section");
    if (!section) return;

    video.volume = PLAYBACK_VOLUME;

    const onPause = () => {
      if (fromObserverRef.current) return;
      userHeldPauseRef.current = true;
    };

    const onPlay = () => {
      if (fromObserverRef.current) return;
      userHeldPauseRef.current = false;
    };

    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);

    const tryPlayFromObserver = () => {
      if (userHeldPauseRef.current) return;
      fromObserverRef.current = true;
      video.volume = PLAYBACK_VOLUME;
      video.muted = false;
      void video
        .play()
        .catch(() => {
          video.muted = true;
          return video.play();
        })
        .finally(() => {
          queueMicrotask(() => {
            fromObserverRef.current = false;
          });
        });
    };

    const applyPlayback = (entry: IntersectionObserverEntry) => {
      const enough =
        entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO;

      if (enough) {
        tryPlayFromObserver();
      } else {
        fromObserverRef.current = true;
        video.pause();
        video.muted = true;
        userHeldPauseRef.current = false;
        queueMicrotask(() => {
          fromObserverRef.current = false;
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) applyPlayback(entry);
      },
      { threshold: [0, VISIBLE_RATIO, 0.55, 1] }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
    };
  }, []);

  return (
    <div ref={rootRef} className={mediaClassName}>
      <video
        ref={videoRef}
        className={videoClassName}
        controls
        loop
        playsInline
        preload="metadata"
        muted
        aria-label="Made in Wolls cleaning services in action"
      >
        <source src="/images/Madeofwollsvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
