
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-90 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-600 hover:bg-white rounded-full p-2'],
    ['post-card', 'block p-4 bg-white dark:bg-dark-700 m-auto max-w-1000px shadow rounded transition hover:shadow-lg'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' ').concat([
    'i-ri-qq-line',
    'i-ri-wechat-pay-line',
    'i-ri-alipay-line',
  ]),
  theme: {
    animation: {
      keyframes: {
        bounce: '{0%, 100% {transform:translateY(-11%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}',
      },
    },
  },
})