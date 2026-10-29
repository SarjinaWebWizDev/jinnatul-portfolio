export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      ivory:'rgb(var(--c-ivory) / <alpha-value>)', champagne:'rgb(var(--c-champagne) / <alpha-value>)', sand:'rgb(var(--c-sand) / <alpha-value>)',
      espresso:'rgb(var(--c-espresso) / <alpha-value>)', charcoal:'rgb(var(--c-charcoal) / <alpha-value>)', muted:'rgb(var(--c-muted) / <alpha-value>)',
      deep:'rgb(var(--c-deep) / <alpha-value>)', warm:'rgb(var(--c-warm) / <alpha-value>)', gold:'rgb(var(--acc) / <alpha-value>)' },
    fontFamily: { serif:['"Cormorant Garamond"','Georgia','serif'], sans:['Manrope','system-ui','sans-serif'], script:['"Great Vibes"','cursive'] }
  } },
  plugins: []
}
