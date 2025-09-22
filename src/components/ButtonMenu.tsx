type ButtonMenuProps = {
    isOpen: boolean;
    isHovered: boolean;
}


export function ButtonMenu({ isOpen, isHovered }: ButtonMenuProps) {
    const isActive = isOpen || isHovered;

    return (

        <>
        <span
        className={`block h-0.5 w-5 transform rounded-sm bg-white transition-all duration-300 ease-in-out ${
          isActive ? 'translate-y-2 rotate-45' : ''
        }`}
        ></span>

        <span
        className={`block h-0.5 w-5 rounded-sm bg-white transition-all duration-300 ease-in-out ${
          isActive ? 'opacity-0' : ''
        }`}
        ></span>

        <span
        className={`block h-0.5 w-5 transform rounded-sm bg-white transition-all duration-300 ease-in-out ${
          isActive ? '-translate-y-2 -rotate-45' : ''
        }`}
        ></span>

      </>
    )
};

