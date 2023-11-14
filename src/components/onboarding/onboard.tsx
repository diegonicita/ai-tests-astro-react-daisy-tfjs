type Props = {
  config: {
    title: string | undefined
    subtitle: string
    skipText: string
    size: string
    image: string
    imageNav: string
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Onboard = ({ config }: Props) => {
  return (
    <div className="h-full my-auto bg-white border border-black w-fit mx-auto px-4">
      <div>
        <div>
          <figure className="bg-red-200 mx-auto w-80">
            <img src={config.image} className="mx-auto self-center" />
          </figure>
          {config.title && (
            <div>
              <div className="mx-auto text-center font-bold text-xl w-[300] mt-0">
                {config.title}
              </div>
            </div>
          )}
          {!config.title && (
            <div>
              <div className="opacity-0 mx-auto text-center font-bold text-xl w-[300] mt-10">
                Vacio
              </div>
            </div>
          )}

          <div>
            <div className="mx-auto text-center w-[300] mt-8">
              {config.subtitle}
            </div>
            <img className="mx-auto mt-4 w-12 h-4" src={config.imageNav} />
          </div>
          <div className="mx-auto mt-4">
            <button className="btn btn-accent">Siguiente</button>
            <div className="mx-auto my-4 mb-16">{config.skipText}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboard
