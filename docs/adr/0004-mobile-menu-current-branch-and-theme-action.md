# ADR 0004: Mobile Menu Current Branch And Theme Action

## Status

Accepted

## Context

The mobile menu used to open a top-level branch by default. That made the menu feel busy on phones and could expand a section unrelated to the current page. On routes such as `/archives`, the useful behavior is to reveal the matching navigation context only: the current item and its parent branch.

The mobile menu also exposed a static theme action label. A static label does not tell readers what will happen after tapping, especially when the current page has already switched between light and dark modes.

## Decision

Mobile menu branches stay collapsed by default. During navigation initialization, the frontend scores mobile menu links against the current `pathname + search`, chooses the deepest matching link, marks it as current, and expands only its parent branch chain. Placeholder links are penalized so container-only menu items do not beat real child routes.

The mobile theme action displays the next available mode instead of a generic label. In light mode it shows "深色模式" with the moon icon. In dark mode it shows "浅色模式" with the sun icon. The button keeps the shared `data-hydro-theme-toggle` contract and only adds mobile-specific label and icon state.

## Consequences

- The mobile menu opens quieter and only exposes the branch that helps explain the current page.
- Current-route matching remains frontend-owned and does not require new Halo Finder APIs or theme settings.
- Desktop theme toggle behavior remains unchanged.
- Future mobile menu changes should preserve the "collapsed by default, current branch only" rule unless a new navigation model replaces it.
