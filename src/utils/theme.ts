export const theme = {
  background: {
    primary: 'bg-gray-50 dark:bg-[#1A1A2E]',
    secondary: 'bg-gray-100 dark:bg-[#16213E]',
    tertiary: 'bg-gray-200 dark:bg-[#0F172A]',
    card: 'bg-white/95 dark:bg-white/[0.08]',
    tag: 'bg-blue-100 dark:bg-blue-500/20',
    button: {
      active: 'bg-blue-600 dark:bg-blue-500',
      inactive: 'bg-gray-200 dark:bg-gray-200/10'
    }
  },
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-300',
    tertiary: 'text-gray-600 dark:text-gray-400',
    accent: 'text-blue-600 dark:text-blue-400',
    button: 'text-gray-600 dark:text-gray-400'
  },
  border: {
    default: 'border-gray-200/80 dark:border-white/10',
    hover: 'hover:border-blue-500/30 dark:hover:border-blue-400/30'
  },
  shadow: {
    card: 'shadow-lg shadow-gray-200/50 dark:shadow-black/30',
    button: 'shadow-lg shadow-blue-500/30'
  },
  hover: {
    text: 'hover:text-blue-600 dark:hover:text-blue-400',
    background: 'hover:bg-gray-300 dark:hover:bg-gray-200/20'
  }
} as const; 