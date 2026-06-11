# ADR 0008: Perceptible Presentation Settings

## Status

Accepted

## Context

Presentation settings had drifted toward implementation toggles: some controlled only a small JS branch while related CSS hover or texture effects still remained, and some effects were technically wired but too subtle for a site owner to verify in the frontend.

## Decision

Presentation settings must be perceptible. A switch should control a whole frontend experience category, and the enabled and disabled states must be visibly different on the devices where that experience applies. Tiny micro-interactions can remain under the global motion switch instead of receiving their own setting.

## Consequences

- The settings page exposes fewer but more trustworthy controls.
- Desktop hover settings only promise visible behavior on pointer-and-hover devices.
- Future presentation settings should be rejected or folded into an existing switch when their frontend difference is not obvious to a site owner.
