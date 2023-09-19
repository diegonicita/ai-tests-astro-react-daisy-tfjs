export const Teclado = () => (
  <>
  <h2 className="text-center font-bold">TORTUTETRIS</h2>  
  <h2 className="text-center"> Usa las teclas WASD para mover las piezas </h2>
  <h2 className="text-center mb-8"> Usa la tecla K para rotarlas </h2>
    <div className="flex justify-center md:gap-1 my-1 w-full">
      <kbd className="kbd kbd-lg">q</kbd>
      <kbd className="kbd kbd-lg bg-primary text-primary-content">w</kbd>
      <kbd className="kbd kbd-lg">e</kbd>
      <kbd className="kbd kbd-lg">r</kbd>
      <kbd className="kbd kbd-lg">t</kbd>
      <kbd className="kbd kbd-lg">y</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">u</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">i</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">o</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">p</kbd>
    </div>
    <div className="flex justify-center gap-1 my-1 w-full">
      <kbd className="kbd kbd-lg bg-primary text-primary-content">a</kbd>
      <kbd className="kbd kbd-lg bg-primary text-primary-content">s</kbd>
      <kbd className="kbd kbd-lg bg-primary text-primary-content">d</kbd>
      <kbd className="kbd kbd-lg">f</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">g</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">h</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">j</kbd>
      <kbd className="kbd kbd-lg  bg-primary text-primary-content">k</kbd>
      <kbd className="hidden sm:inline-flex kbd kbd-lg">l</kbd>
    </div>
    <div className="flex justify-center gap-1 my-1 w-full">
      <kbd className="kbd-lg kbd">z</kbd>
      <kbd className="kbd-lg kbd">x</kbd>
      <kbd className="kbd-lg kbd">c</kbd>
      <kbd className="kbd-lg kbd">v</kbd>
      <kbd className="kbd-lg hidden sm:inline-flex kbd">b</kbd>
      <kbd className="kbd-lg hidden sm:inline-flex kbd">n</kbd>
      <kbd className="kbd-lg hidden sm:inline-flex kbd">m</kbd>
      <kbd className="kbd-lg hidden sm:inline-flex kbd">/</kbd>
    </div>
  </>
)
