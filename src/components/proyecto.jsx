import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'

export const Proyecto = ({ image, title, tools, link, esp = '', por = '' }) => {
  const $languageAtom = useStore(languageAtom)
  
  return (
    <>
      <div className="flex sm:flex-row flex-col ">
        <div className="justify-start items-center flex flex-col">          
        <h3 className="mt-0 max-w-full sm:max-w-[8rem] text-center">
              <span className="font-bold mt-0 max-w-full sm:max-w-[8rem]">{title}</span>
            </h3>
            <figure className="max-w-full sm:max-w-[8rem] h-auto px-4 mb-8">
              <img className="rounded" src={image?image:"/webapp/logo.png"} alt="vetcare"/>
            </figure>          
        </div>
        <div className="flex flex-column flex-1">
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
        </div>
      </div>
    </>
  )
}
