# Dusk

A dark theme for the Claude desktop and mobile apps. Indigo night surfaces, soft lavender text, one gold accent, and a plum glow at the foot of the page.

It is dark only, and deliberately softer than a maximum-contrast theme: main text sits near 13:1 on the page instead of 17:1, which is easier on eyes that find bright white on black glaring.

## Install

In the Claude desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `HoLeeChuck/dusk-theme`, then **Add plugin**.

At the prompt of a terminal session:

```
/plugin install dusk-theme --marketplace HoLeeChuck/dusk-theme
```

From a shell:

```
claude plugin install dusk-theme --marketplace HoLeeChuck/dusk-theme
```

Answer `y` to add the marketplace, then press Enter to pick the user scope. The theme applies to sessions started after that.

## Colors

Contrast is against page / card / panel / menu.

| Use | Hex | Contrast |
|---|---|---|
| Page | `#17162e` | |
| Card | `#1c1b36` | |
| Panel | `#21203e` | |
| Menu | `#262546` | |
| Main text | `#e2def2` | 13.4 / 12.7 / 11.9 / 11.1 |
| Secondary text | `#c6c1dc` | 10.1 / 9.6 / 9.0 / 8.4 |
| Muted text | `#aaa5c6` | 7.5 / 7.1 / 6.6 / 6.2 |
| Accent (gold) | `#ffc857` | 11.5 / 10.8 / 10.2 / 9.5 |
| Warning (orange) | `#ff9a4d` | 8.4 / 7.9 / 7.4 / 7.0 |
| Success (green) | `#7fcf6b` | 9.3 / 8.8 / 8.2 / 7.7 |
| Danger (red) | `#ff7b6e` | 7.0 / 6.6 / 6.2 / 5.8 |
| Pro (violet) | `#b9a3ff` | 8.2 / 7.7 / 7.3 / 6.8 |

The page background stays flat for its top half, then warms to `#2e2046` at the foot.

## Remove

Uninstall the plugin from the app's Plugins screen, or run `claude plugin uninstall dusk-theme`. The app's own look returns in the next session.
