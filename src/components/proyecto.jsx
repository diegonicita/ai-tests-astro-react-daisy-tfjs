import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'

export const Proyecto = ({ image, title, tools, link, esp = '', por = '' }) => {
  const $languageAtom = useStore(languageAtom)
  
  return (
    <>
      <article className="flex sm:flex-row flex-col max-w-2xl m-auto gap-4">
        <section>          
        <h3 className="m-auto">
              <span className="font-bold">{title}</span>
            </h3>
            <figure className="max-w-full sm:max-w-[8rem] h-auto">
              <img className="rounded sm:min-w-[8rem] m-auto min-w-full px-8 pt-4 sm:p-0" src={image?image:"/webapp/logo.png"} alt="vetcare"/>
            </figure>          
        </section>
        <section className=" flex flex-column sm:pt-5 sm:p-0 sm:pl-2">
          <div>            
            {$languageAtom == 'espaniol' && esp}
            {$languageAtom == 'portugues' && por}
            <div className="mt-2 mb-8">
              <span className="font-bold">Tech Stack: </span>
              {tools}
              {link && (
                <div className="mt-2">
                  <>
                    <span className="font-bold">Link: </span>
                    <a className="underline underline-offset-2" href={link}>
                      {title}
                    </a>
                  </>
                </div>
              )}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
