import { useStore } from '@nanostores/react'
import { languageAtom } from '../store/store'

export const Proyecto = ({ title, tools, link, esp = '', por = '' }) => {
  const $languageAtom = useStore(languageAtom)
  return (
    <>
      <div class="flex flex-row">
        <div class="avatar justify-center items-center">
          <div class="self-start mt-9 w-24 md:w-2/3 md:self-center md:mt-0">
            <figure>
              <img src="/webapp/logo.png" alt="logo" />
            </figure>
          </div>
        </div>
        <div class="flex flex-column flex-1">
          <div>
            <h3>
              <span class="font-bold">{title}:</span>
            </h3>
            {$languageAtom == 'espaniol' && esp}
            {$languageAtom == 'portugues' && por}
            <div class="mt-2 mb-8">
              <span class="font-bold">Tech Stack: </span>
              {tools}
              {link && (
                <div>
                  <>
                    <span class="font-bold">Link: </span>
                    <a class="underline underline-offset-2" href={link}>
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
