type NavigationType = {
    categories: {
      id: string;
      name: string;
      featured: {
        name: string;
        href: string;
        imageSrc: string;
        imageAlt: string;
      }[];
      sections: {
        id: string;
        name: string;
        items: {
          name: string;
          href: string;
        }[];
      }[];
    }[];
    pages: {
      name: string;
      href: string;
    }[];
  };

export default NavigationType;