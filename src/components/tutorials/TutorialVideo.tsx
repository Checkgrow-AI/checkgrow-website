"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { TutorialVideo as Video } from "@/lib/tutorials";
import { videoDuration } from "@/lib/tutorials";
import { useLang, useT } from "@/i18n/client";
import { localeInfo } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import styles from "./Tutorials.module.css";

/* The page provides the "news" namespace. */
export function TutorialVideo({ video }: { video: Video }) {
  const t = useT("news").video;
  const lang = useLang();
  /* the title mid-sentence ("Play the short walkthrough") */
  const inSentence = video.title.charAt(0).toLocaleLowerCase(localeInfo[lang].tag) + video.title.slice(1);
  const player = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  function start() {
    const element = player.current;
    if (!element) return;
    setStarted(true);
    setError(false);
    element.focus({ preventScroll: true });
    // Only the visitor's play action attaches the source: neither video
    // consumes bandwidth just because the article is opened.
    if (!element.getAttribute("src")) element.src = video.src;
    element.play().catch(() => setError(true));
  }

  return (
    <figure className={styles.videoFigure} id={video.id}>
      <figcaption className={styles.videoHeading}>
        <div>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
        <span className={styles.duration}>{videoDuration(video.durationSeconds)}</span>
      </figcaption>
      <div className={styles.player} style={{ aspectRatio: `${video.width} / ${video.height}` }}>
        <video
          ref={player}
          width={video.width}
          height={video.height}
          controls={started}
          playsInline
          preload="none"
          tabIndex={started ? 0 : -1}
          aria-label={video.title}
          poster={video.poster}
          onError={() => setError(true)}
          onPlay={() => {
            // Avoid two tutorials speaking at the same time.
            document.querySelectorAll<HTMLVideoElement>("[data-tutorial-video]").forEach(other => {
              if (other !== player.current) other.pause();
            });
          }}
          data-tutorial-video
        >
          {video.captions && <track kind="captions" src={video.captions} srcLang="en" label={t.captionsLabel} />}
          {t.unsupported}
        </video>
        {!started && (
          <button type="button" className={styles.play} onClick={start} aria-label={fmt(t.play, { title: inSentence })}>
            <Image src={video.poster} alt="" fill sizes="(min-width: 1200px) 900px, 100vw" className={styles.poster} />
            <span className={styles.playCircle} aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m9 5 11 7-11 7V5Z" /></svg>
            </span>
            <span className={styles.playLabel}>{t.playVideo} <span>{videoDuration(video.durationSeconds)}</span></span>
          </button>
        )}
      </div>
      {error && <p className={styles.videoError} role="status">{t.error.before}<a href={video.src}>{t.error.link}</a>{t.error.after}</p>}
      <noscript><p><a href={video.src}>{fmt(t.watch, { title: inSentence })}</a></p></noscript>
    </figure>
  );
}
