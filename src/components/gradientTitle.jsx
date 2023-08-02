export const GradientTitle = ({ withColor, withoutColor }) => (
  <h1 className="ml-2 mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      {withColor}
    </span>{' '}
    {withoutColor}
  </h1>
)
