# ADR 0005: Operator-Minded Theme Setting Domains

## Status

Accepted

## Context

The theme settings page had grown into many top-level groups. Some groups matched template routes, some matched shared components, and many fields exposed routine labels, empty states, and plugin install hints as editable settings. That made the Console experience noisy and made it harder to understand which settings actually changed the theme.

The theme is still pre-adoption, so there are no real user configurations to preserve. Keeping compatibility with the old `theme.config.*` keys would add fallback logic throughout the templates without protecting real users.

## Decision

Theme settings use seven operator-minded top-level domains: identity, presentation, navigation, home, content, plugins, and advanced. Related fields inside those domains are grouped with FormKit groups so the saved shape mirrors the domain language.

Old top-level setting keys are intentionally not supported. Templates read the new setting domains directly and rely on template defaults for removed microcopy settings.

Only effective settings should remain configurable: identity, visual presentation, layout behavior, feature availability, content quantity, and plugin integration behavior. Routine labels and low-value status text stay as template defaults.

## Consequences

- The settings page is shorter and follows the way a site owner operates the theme.
- Existing saved settings from the old model will not migrate automatically.
- Template reads are more explicit because settings live under domain objects such as `content.post` and `plugins.moments`.
- Future settings should be added to an existing domain first. A new top-level domain needs a distinct operator workflow, not just a new template file.
- Microcopy should stay out of settings unless normal site operation clearly requires editing it.
