# ADR 0006: Treat Hero Video as Enhancement Media

## Status

Accepted

## Context

The home Hero can use a video, but letting that video participate in the first viewport's critical resource path makes slow networks feel like the whole theme is unresponsive. We decided the Hero cover frame, navigation, text, and article entry points must become usable first; the video is activated later as enhancement media and can be skipped or left as the cover frame when loading fails, motion is reduced, or network conditions are poor.

## Considered Options

- Keep the video `src` on initial HTML with `preload="metadata"` and autoplay. This preserves the simplest markup but still lets video metadata and poster handling compete with early page work.
- Delay video activation until after initial rendering or viewport readiness. This makes the video less immediate, but protects perceived responsiveness and gives the cover frame a graceful fallback role.
