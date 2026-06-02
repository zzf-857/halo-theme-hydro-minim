# ADR 0002: Moment Poster Share Is Route-Free

## Status

Accepted

## Context

The moment detail page exposed a share-poster action that navigated to `/posterShare/moment/{name}`. In a Halo theme, adding a template named `posterShare.html` does not automatically register an arbitrary dynamic route for `/posterShare/{type}/{name}`. Without an explicit route provider from the platform or a plugin, that URL can return 404 even though a similarly named template exists in the theme source.

Registering a custom route only for a poster view would add coupling and deployment assumptions for a lightweight share interaction. The user also confirmed that the solution can avoid route registration.

## Decision

Keep moment poster sharing inside the canonical moment detail route `/moments/{name}` as a modal dialog.

The moment detail template renders an embedded poster dialog. The "分享海报" action becomes a button that opens or closes that dialog instead of linking to `/posterShare/moment/{name}`. The dialog is marked as a poster scope so shared frontend behavior can initialize the poster download without a standalone page.

The modal presents only the finished poster card plus minimal icon controls: download and close. It does not show copy-link, print, textual close, or share-operation panels. Download is implemented client-side by exporting the rendered poster card to PNG through SVG `foreignObject` and canvas, with an SVG fallback when PNG rendering fails.

## Consequences

- Moment poster sharing no longer depends on an unregistered `/posterShare/moment/{name}` dynamic route.
- The poster still references `/moments/{name}`, which is already the stable canonical moment route.
- The moment detail page carries a little more template markup, but the share action behaves like a temporary task instead of a page transition.
- The source theme should not keep a standalone `posterShare.html` template for this behavior unless a new ADR reintroduces a real route owner.
- Any future poster scope should initialize through shared frontend behavior rather than duplicating export logic.
