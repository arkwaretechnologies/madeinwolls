"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TeamPhotoGallery.module.css";

export type TeamGalleryPhoto = { src: string; alt: string };

export default function TeamPhotoGallery({ photos }: { photos: TeamGalleryPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);

  const showPrev = useCallback(() => {
    setIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const showNext = useCallback(() => {
    setIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, showPrev, showNext]);

  useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [index]);

  const open = (i: number) => setIndex(i);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.card}
            onClick={() => open(i)}
            aria-label={`View full size: ${photo.alt}`}
          >
            <div className={styles.thumbFrame}>
              <Image
                src={photo.src}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className={styles.thumb}
                quality={100}
              />
            </div>
          </button>
        ))}
      </div>

      {index !== null && photos[index] && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged team photo"
        >
          <button
            type="button"
            className={styles.backdrop}
            onClick={close}
            aria-label="Close gallery"
          />
          <div className={styles.dialog}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={close}
              aria-label="Close"
            >
              ×
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.navPrev}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.navNext}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </>
            )}
            <div className={styles.fullWrap}>
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                className={styles.fullImage}
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
            {photos.length > 1 && (
              <p className={styles.counter} aria-live="polite">
                {index + 1} / {photos.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
