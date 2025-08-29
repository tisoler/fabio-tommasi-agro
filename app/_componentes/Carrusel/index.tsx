'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import BotonIzquierda from '../BotonIzquierda';
import BotonDerecha from '../BotonDerecha';

interface HorizontalScrollerProps {
  autoScrollInterval?: number;
  className?: string;
}

const Carrusel: React.FC<HorizontalScrollerProps> = ({
  autoScrollInterval = 3000, // default value of auto-scroll
  className = ''
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout>(null);
  const currentIndexRef = useRef(0);
  const currentTranslate = useRef(0);
  // StartX and isDragging are not refs because they are not needed outside the scope of the event handlers
  // They are used to track the touch/mouse position and dragging state
  // and they are not used in the render method
  let startX = 0;
  let startY = 0;
  let isDragging = false;

  const startAutoScroll = () => {
    autoScrollTimeoutRef.current = setInterval(() => {
      swipeSlide(currentIndexRef.current + 1);
    }, autoScrollInterval);
  };

  const resetAutoScroll = () => {
    if (autoScrollTimeoutRef.current) {
      clearInterval(autoScrollTimeoutRef.current);
    }
    startAutoScroll();
  };

  // Start auto-scroll when the component is mounted
  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearInterval(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  const updateBullets = (newIndex: number) => {
    const bullets = document.querySelectorAll('[id^="bullet-"]');
    bullets.forEach((bullet, i) => {
      if (i === newIndex) {
        bullet.classList.add('bg-color-marca');
        bullet.classList.remove('bg-color-sec-marca');
      } else {
        bullet.classList.remove('bg-color-marca');
        bullet.classList.add('bg-color-sec-marca');
      }
    });
  };

  function smoothScrollTo (
    element: HTMLDivElement,
    targetX: number,
    duration = 0.3,
  ) {
    resetAutoScroll();

    // Enable hardware acceleration
    element.style.willChange = 'transform';

    // Set up transition
    element.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;

    // Apply transform
    element.style.transform = `translateX(${targetX}px)`;

    // Clean up
    element.addEventListener(
      'transitionend',
      () => {
        element.style.willChange = 'auto';
        element.style.transition = 'none';
      },
      { once: true },
    );
  }

  const swipeSlide = (index: number) => {
    if (currentIndexRef.current === index || !scrollerRef.current) return;

    let newIndex = index;
    if (newIndex > 4 - 1) newIndex = 0;
    if (newIndex < 0) newIndex = 4 - 1;
    currentIndexRef.current = newIndex;

    const viewWidth = scrollerRef.current?.offsetWidth;
    currentTranslate.current = -newIndex * (viewWidth || 1);
    smoothScrollTo(scrollerRef.current, currentTranslate.current);
    updateBullets(newIndex);
  };

  const handleStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const handleMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;

    const clientX = e.touches && e.touches[0].clientX;
    if (!clientX) return;

    const diffX = clientX - startX;
    const clientY = e.touches && e.touches[0].clientY || 0;
    const diffY = clientY - startY;
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    let newTranslate = currentTranslate.current + diffX;

    // Calculate boundaries with 10px elastic limit
    const viewWidth = scrollerRef.current?.offsetWidth;
    const rightTranslateBound = -(4 - 1) * (viewWidth || 1) - 10; // 10px past last
    const leftTranslateBound = 10; // 10px past first

    // Apply elastic resistance when beyond limits
    if (newTranslate > leftTranslateBound) {
      // Calculate how far beyond limit (0-10px)
      const overshoot = newTranslate - leftTranslateBound;
      // Apply resistance (reduce movement by 5% when beyond)
      newTranslate = leftTranslateBound + overshoot * 0.05;
    } else if (newTranslate < rightTranslateBound) {
      // Calculate how far beyond limit (-10px past last)
      const overshoot = newTranslate - rightTranslateBound;
      // Apply resistance (reduce movement by 5% when beyond)
      newTranslate = rightTranslateBound + overshoot * 0.05;
    }
    // Apply the translation
    smoothScrollTo(scrollerRef.current, newTranslate, 0.2);
  };

  const handleEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) return;
    isDragging = false;

    const endX = e.changedTouches && e.changedTouches[0].clientX;
    if (!endX) return;

    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
      swipeSlide(currentIndexRef.current + (diffX > 0 ? -1 : 1));
    } else {
      // Return to current position
      smoothScrollTo(scrollerRef.current, currentTranslate.current);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      ref={containerRef}
    >
      <div className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <BotonIzquierda onClick={() => swipeSlide(currentIndexRef.current - 1)} />
      </div>
      <div
        ref={scrollerRef}
        className="flex w-full h-[540px] md:h-[430px] will-change-transform"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          key={1}
          className="relative shrink-0 w-full md:inline-flex md:justify-center md:items-center md:snap-start"
        >
          <picture className='relative flex w-full h-full'>
            <source 
              media="(min-width: 768px)" 
              srcSet="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-1-desktop.webp 100w"
              height={740}
              width={2560}
            />
            <Image
              loading='eager'
              priority
              src={'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-1.webp'}
              alt="Producto destacado 1"
              fill
              className="w-full h-auto object-cover object-center"
              quality={85} // Optimización de calidad
              placeholder="blur" // Opcional: añadir blur placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
            />
          </picture>
        </div>
        <div
          key={2}
          className="relative shrink-0 w-full md:inline-flex md:justify-center md:items-center md:snap-start"
        >
          <picture className='relative flex w-full h-full'>
            <source 
              media="(min-width: 768px)" 
              srcSet="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-2-desktop.webp 100w"
              height={740}
              width={2560}
            />
            <Image
              loading='eager'
              priority
              src={'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-2.webp'}
              alt="Producto destacado 2"
              fill
              className="w-full h-auto object-cover object-center"
              quality={85} // Optimización de calidad
              placeholder="blur" // Opcional: añadir blur placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
            />
          </picture>
        </div>
        <div
          key={3}
          className="relative shrink-0 w-full md:inline-flex md:justify-center md:items-center md:snap-start"
        >
           <picture className='relative flex w-full h-full'>
            <source 
              media="(min-width: 768px)" 
              srcSet="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-3-desktop.webp 100w"
              height={740}
              width={2560}
            />
            <Image
              loading='eager'
              priority
              src={'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-3.webp'}
              alt="Producto destacado 3"
              fill
              className="w-full h-auto object-cover object-center"
              quality={85} // Optimización de calidad
              placeholder="blur" // Opcional: añadir blur placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
            />
          </picture>
        </div>
        <div
          key={4}
          className="relative shrink-0 w-full md:inline-flex md:justify-center md:items-center md:snap-start"
        >
           <picture className='relative flex w-full h-full'>
            <source 
              media="(min-width: 768px)" 
              srcSet="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-4-desktop.webp 100w"
              height={740}
              width={2560}
            />
            <Image
              loading='eager'
              priority
              src={'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/producto-destacado-4.webp'}
              alt="Producto destacado 4"
              fill
              className="w-full h-auto object-cover object-center"
              quality={85} // Optimización de calidad
              placeholder="blur" // Opcional: añadir blur placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
            />
          </picture>
        </div>
      </div>
      <div className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <BotonDerecha onClick={() => swipeSlide(currentIndexRef.current + 1)} />
      </div>
      <div className="absolute bottom-2 w-full z-40 flex items-center justify-center h-[40px] gap-6">
        {Array(4).fill(1).map((_, index) => (
          <button
            id={`bullet-${index}`}
            key={index}
            onClick={() => swipeSlide(index)}
            className={`w-[8px] md:w-[10px] h-[8px] md:h-[10px] rounded-full cursor-pointer ${
              currentIndexRef.current === index
                ? 'bg-color-marca'
                : 'bg-color-sec-marca'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
