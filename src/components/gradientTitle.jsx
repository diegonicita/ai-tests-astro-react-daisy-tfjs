export const GradientTitle = ({ withColor, withoutColor }) => (
  <h1 className="ml-2 mb-4 text-2xl font-extrabold gray-400 md:text-3xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-l to-neutral from-primary">
      {withColor}
    </span>{' '}
    {withoutColor}
  </h1>
)
