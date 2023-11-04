import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'

export const Proyecto = ({ image, title, tools, link, esp = '', por = '' }) => {
  const $languageAtom = useStore(languageAtom)
  
  return (
    <>
      <div className="flex sm:flex-row flex-col max-w-2xl m-auto gap-8">
        <div>          
        <h3 className="m-auto">
              <span className="font-bold">{title}</span>
            </h3>
            <figure className="max-w-full sm:max-w-[8rem] h-auto">
              <img className="rounded min-w-[8rem]" src={image?image:"/webapp/logo.png"} alt="vetcare"/>
            </figure>          
        </div>
        <div className=" flex flex-column pl-2 pt-5">
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
