const BotonIzquierda = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group flex items-center justify-center w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]
    hover:bg-surface-tertiary active:bg-surface-secondary rounded-[4px] bg-stone-700 hover:bg-stone-400 active:bg-stone-700 cursor-pointer"
    aria-label="Anterior"
  >
    <svg
      viewBox="0 0 8 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-icon-tertiary group-hover:text-text-primary group-active:text-text-primary h-[15px] lg:h-[20px]"
    >
      <path
        d="M0 7.5L7.01754 0L8 1.05L1.96491 7.5L8 13.95L7.01754 15L0 7.5Z"
        fill="currentColor"
      />
    </svg>
  </button>
);

export default BotonIzquierda;
