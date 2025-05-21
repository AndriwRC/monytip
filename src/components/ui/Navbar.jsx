import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'features', label: 'Características' },
    { id: 'pricing', label: 'Precios' },
    { id: 'demo', label: 'Prototipo' },
    { id: 'team', label: 'Nuestro Equipo' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(() => {
    return window.location.hash?.replace('#', '') || 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash?.replace('#', '');
      setActive(hash);
      console.log(hash);
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <nav>
      {isOpen ? (
        <HiX
          onClick={() => setIsOpen(false)}
          className="size-8 md:hidden text-primary-800"
        />
      ) : (
        <HiMenu
          onClick={() => setIsOpen(true)}
          className="size-8 md:hidden text-primary-800"
        />
      )}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:hidden absolute top-22 right-0 flex-col gap-4 py-4 px-4  bg-neutral-50 border-b border-l rounded-bl-xl border-primary-300 backdrop-blur-sm shadow-md`}
      >
        {sections.map(section => (
          <li
            key={section.id}
            className={`${
              active === section.id
                ? 'text-primary-800  border-primary-800'
                : 'text-secondary-800 border-transparent'
            } flex capitalize border-l-2 py-1 px-2 font-medium`}
          >
            <a href={`#${section.id}`} className="w-full">
              {section.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex gap-2 py-2 px-2">
        {sections.map(section => (
          <li
            key={section.id}
            className={`${
              active === section.id
                ? 'text-primary-800 border-b-2 border-primary-800'
                : 'text-secondary-800'
            } capitalize  py-1 px-2 font-medium  `}
          >
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
