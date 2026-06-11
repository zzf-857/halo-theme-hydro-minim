# Hydro-Minim Context

## Domain Language

- Hydro-Minim, or 氢·简, is a restrained Halo theme with grey-white surfaces, Space Mono typography, thin black line work, light grain, and low-saturation accents.
- Hydro Content Surface is the shared visual baseline for non-home content pages. It keeps pages related without forcing every route into the same card grid.
- The tags index uses a tag-sky metaphor: tags are lightweight keywords floating in an abstract sky, not generic chips on a flat board.
- Tag sky means an inline abstract SVG atmosphere with pale blue-grey gradients, sparse contour cloud lines, horizon marks, and grain-compatible opacity. It must feel unbounded, with blurred fading edges instead of a visible rectangular panel or card frame.
- Cloud tag means each tag link is shaped as a small cloud, with an inline SVG cloud glyph, thin outlines, soft paper fill, post count, and gentle transform-only floating motion.
- Cloud tags use stable pseudo-random placement derived from label text, loop index, display-name length, and post count. Their size should respond to display-name length and post count so short labels stay light while longer labels get larger cloud bodies.
- Desktop tag clouds use a percentage-based sky coordinate system (`--tag-x`, `--tag-y`) with lightweight collision scoring for scattered floating placement. Small screens fall back to readable flow layout.
- Dark mode for tag sky remains low contrast and misty. It must not turn into pure black, neon weather UI, or a decorative illustrated scene.
- Route-free moment poster means the moment detail page owns its own poster modal. The share entry opens an in-page dialog instead of navigating to a synthetic `/posterShare/{type}/{name}` route.
- Poster scope means a share-poster surface that can render a finished poster card locally and export it as a downloadable image. In Hydro-Minim, moment poster scope lives inside the moment detail modal.
- Poster image means the visible poster card itself, not a utility panel. Auxiliary controls should stay minimal: download plus an icon-only close affordance for dialog accessibility.
- Mobile reading bar means the article page's phone-only fixed bottom control surface. It keeps the core thumb actions close: TOC, comments, upvote, and share, with a thin reading-progress line on top.
- TOC drawer means the phone-only half-height article directory sheet opened from the mobile reading bar. It reuses the same generated `.hydro-post-toc` tree, progress summary, publish date, category, and visit metadata instead of cloning reader logic.
- Mobile neighbor pills means the phone-only previous/next navigation uses static thumb-sized pill buttons, not a swipe lane. Two available neighbors sit as a two-button grid; a single neighbor spans the available width.
- Compact reading flow means phone layouts for related posts use horizontal scroll lanes and snap-friendly compact cards, so article completion recommendations do not stretch the page into a long stack.
- Reader action rail means the desktop/tablet side panel containing reading progress, TOC, post actions, and top action. It remains sticky on PC and becomes the drawer source on phones.
- Mobile menu current branch means phone navigation groups stay collapsed by default, and only the branch containing the current route expands automatically.
- Mobile theme action means the phone menu theme switch shows the next available mode, including matching text and icon, instead of a static "dark/light" label.
- Theme setting domain means a top-level area of the Halo theme settings page that matches how a site owner thinks about operating the theme, such as identity, presentation, navigation, home, content, plugins, and advanced settings.
- Operator-minded setting model means settings are grouped by site-owner intent and maintenance workflow, not by implementation files or every individual template route.
- Core content page settings means settings for built-in reading and discovery surfaces: posts, single pages, archives, taxonomy pages, search, and share posters.
- Plugin page settings means settings for optional plugin-backed surfaces such as links, moments, photos, equipment, friends, bangumi, Steam, and Docsme.
- Effective setting means a theme setting that changes site identity, visual presentation, layout behavior, feature availability, content quantity, or plugin integration behavior.
- Perceptible setting means a theme setting whose enabled and disabled states create a site-owner-visible difference on the frontend. A setting that is technically wired but not meaningfully noticeable is not considered effective.
- Presentation setting means a perceptible setting in the presentation domain that controls a whole frontend experience category, not one hidden implementation detail.
- Desktop hover setting means a presentation setting whose visible effect is guaranteed on pointer-and-hover devices. It may gracefully degrade on touch-first devices.
- Microcopy default means routine labels, empty states, install hints, and button text that belong in template defaults rather than in the theme settings page.
- Hero enhanced media means optional visual media in the home Hero that enriches the first viewport after the page is usable. It must not decide whether navigation, text, or article entry points can respond.
- Hero cover frame means the lightweight visual state shown before optional Hero media is ready. It carries the Hero atmosphere while heavier media loads, fails, or is skipped.
- Progressive image shell means the theme-owned visual wrapper around image content while the real image is loading, unavailable, or failed. It protects layout stability and keeps image-heavy pages readable without making image delivery a new service boundary.
- Halo thumbnail ladder means the Halo-generated `s`, `m`, `l`, and `xl` thumbnail sizes used by theme templates for responsive image candidates. It is the preferred source of smaller image variants before introducing external CDN or proxy infrastructure.
- Gallery failure shell means a photo card remains visible when its image cannot load. The photo content still exists; only the bitmap is temporarily unavailable.

## Current Decisions

- The tags page background is implemented as an abstract minimal SVG layer in the page template so it can scale without extra static assets and inherit CSS color tokens.
- Tag data remains sourced from Halo's `tags` route variable. Visual changes must not alter Finder/API semantics, routes, or taxonomy settings.
- The tag sky must not use a visible border, rectangular card background, or rectangular focus/hover block around individual clouds.
- Tag cloud motion uses `transform` and `opacity` only. Ambient sky drift and cloud floating must respect `prefers-reduced-motion`.
- Cloud motion layers include a soft arrival, inner SVG cloud mist reveal, cloud outline drawing, delayed text/count reveal, and slow orbital drifting. Avoid bounce or elastic motion; the material is mist, not rubber.
- The `src/assets/tag-cloud.ts` module owns desktop cloud placement. Thymeleaf still outputs semantic tag links and CSS sizing variables; JavaScript refines coordinates after real styles are available.
- Cloud tag hover and focus feedback must keep the outer link hit area stable. Do not move the anchor itself on hover; emphasize the inner SVG cloud, text color, stroke, and shadow instead.
- Moment share poster must not rely on registering a custom Halo theme route for `/posterShare/moment/{name}`. Use the existing `/moments/{name}` route and reveal the embedded poster dialog there.
- Embedded moment poster content must stay poster-first: no copy-link, print, close-text, or share-operation panel in the modal.
- Moment poster download is dependency-free. It exports the rendered poster card through SVG `foreignObject` and canvas to PNG, with an SVG fallback if PNG rendering fails.
- Article details use two reading-control layouts: PC keeps the sticky reader action rail, while phones use the mobile reading bar plus TOC drawer. Do not let `.hydro-post-aside` fall through as a normal content block at the end of the article on phones.
- Mobile article controls must reuse existing post action contracts: `data-post-action`, `data-post-reading-progress`, `data-post-upvote-count`, and `data-hydro-poster-open`. Shared state such as reading percent and upvote count should broadcast to all matching elements.
- Future phone article affordances should attach to the mobile reading bar or TOC drawer semantics before adding another floating utility surface.
- Mobile menu branches must not open the first group by default. Current-route scoring should choose the deepest matching link and expand only its parent branch chain.
- Theme settings should stay operator-minded. New settings should enter the existing identity, presentation, navigation, home, content, plugins, or advanced domains before adding another top-level domain.
- Microcopy defaults should not become settings unless site owners have a clear reason to edit that wording as part of normal theme operation.
- Image-heavy surfaces should use a progressive image shell plus Halo thumbnail ladder before introducing an external image proxy or CDN requirement. The theme is responsible for graceful loading and failure states; site infrastructure remains optional.
- Gallery images should keep their card footprint when loading fails. Do not remove failed photo cards from the masonry flow; show a quiet failure state and prevent broken images from opening an empty lightbox.
