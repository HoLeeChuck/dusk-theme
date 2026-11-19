import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Dusk: indigo night surfaces, lavender-white text, one gold accent,
// and a plum glow at the foot of the page like the last light of evening.
// Dark only. Softened on purpose: main text sits near 11-13:1, not 17:1,
// and muted text stays above 6:1.
const { theme, problems } = makeColors({
  label: 'Dusk',
  only: 'dark',
  roles: {
    accent: '#ffc857',
    danger: '#ff7b6e',
    success: { seed: '#7fcf6b', stops: { 400: '#4cbc2a' } },
    warning: '#ff9a4d',
    pro: '#b9a3ff',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#17162e',
        'surface-1': '#1c1b36',
        'surface-2': '#21203e',
        'surface-3': '#262546',
        'text-primary': '#e2def2',
        'text-secondary': '#c6c1dc',
        'text-muted': '#aaa5c6',
      },
    },
    git: {
      added: '#5fdc7a',
      removed: '#ff8494',
      modified: '#ffd24a',
      merged: '#c8b0ff',
      closed: '#ff938a',
      conflicting: '#ffa35c',
      draft: '#bccac8',
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: {
    gradient: {
      stops: [
        { at: 0, color: '#17162e' },
        { at: 0.5, color: '#17162e' },
        { at: 1, color: '#2e2046' },
      ],
    },
  },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
