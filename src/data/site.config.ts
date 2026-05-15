// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Saveur Camomille',
    brand: 'Bonjour Drink',
    slug: 'bonjour-drink-camomille',
    image: '/images/products/69b0a99c1aaca2898684c751_camomille.jpg',
    brandLogo: '/images/logos/68d666ee3daf1b2e78ab7a9a_logo%20Bonjour%20Drink.svg',
    rating: 9.7,
    reviewCount: 132,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '39,00 €',
    discountPrice: '31,20 €',
    affiliateLink: 'https://taap.it/bonjour-drink-lmc',
    origin: '🇫🇷 Francia',
    availability: 'Venta online, entrega a verificar según país',
    productType: 'Bebida en polvo con camomila, pasiflora, reishi y L-teanina',
    pros: ['Encaje directo con la intención infusión para dormir', 'Camomila, pasiflora, reishi, L-teanina y anís verde', 'Ritual caliente de noche, sin cafeína', 'Cupón claro y producto fácil de explicar'],
    cons: ['No es una infusión clásica en bolsita', 'Entrega y condiciones a comprobar antes de comprar desde España', 'No debe presentarse como tratamiento del insomnio'],
    description: 'Bonjour Drink ocupa el primer puesto porque Saveur Camomille responde exactamente a la intención de esta página: una bebida caliente de noche, sin cafeína y pensada como ritual relajante. La fórmula reúne camomila, pasiflora, reishi, L-teanina y anís verde, lo que la hace más estructurada que una tisana básica de supermercado.\n\nSu ventaja principal es la claridad: no obliga al usuario a entender diez cápsulas diferentes ni a comparar ingredientes aislados. Es una rutina simple para el final del día. El único punto a vigilar es práctico: antes de comprar desde España, conviene comprobar condiciones de entrega, stock y precio final.'
  },
  {
    rank: 2,
    name: 'Go Relax',
    brand: 'Mushroom Cups',
    slug: 'mushroom-cups-go-relax',
    image: '/images/products/698494ba7feb7f3f4173dbe0_GoRelax-Closed_small_b70580a3-596d-45e9-b864-85e3ee8c9baa.jpg',
    brandLogo: '/images/logos/698533bb645118c6e83c67c7_mushroomcups_logo.png',
    rating: 8.5,
    reviewCount: 850,
    promoCode: 'ELIASBAHIA',
    promoPercent: 10,
    originalPrice: '15,90 €',
    discountPrice: '14,31 €',
    affiliateLink: 'https://mushroomcups.com/products/go-relax-organic-instant-coffee-with-reishi-and-chanterelle-original?ref=LMC',
    origin: '🇪🇺 Europa',
    availability: 'Disponible online',
    productType: 'Bebida funcional con reishi, L-teanina y magnesio',
    pros: ['Nombre y fórmula alineados con descanso y relax', 'Formato bebida, más cercano al ritual de noche que una cápsula', 'Precio de entrada accesible', 'Buena alternativa si se busca reishi en bebida'],
    cons: ['Más mushroom drink que infusión tradicional', 'Marca menos premium que Bonjour Drink', 'Sabor de hongos no ideal para todos'],
    description: 'Mushroom Cups Go Relax queda segundo porque cubre muy bien el ángulo funcional: reishi, L-teanina y magnesio en una bebida fácil de preparar. No es una infusión de camomila clásica, pero sí una alternativa coherente para quien busca una bebida de noche con ingredientes orientados a calma y recuperación.\n\nSu punto fuerte es el precio y la simplicidad. Su límite es que el usuario español que busca “infusión para dormir” puede esperar plantas más familiares como manzanilla, tila o valeriana. Por eso queda detrás de Bonjour Drink, pero sigue siendo una opción útil para ampliar el comparativo.'
  },
  {
    rank: 3,
    name: 'Calm & Clarity Mints',
    brand: 'Neuro Gum',
    slug: 'neuro-gum-calm-clarity',
    image: '/images/products/6994516520bc02a20bb2b3fc_neuro-calm-clarity-6pack.jpg',
    brandLogo: '/images/logos/699240e4102cfd81a3280479_Neuro_Logo_Header.png',
    rating: 8.3,
    reviewCount: 1200,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '6,80 €',
    discountPrice: '6,12 €',
    affiliateLink: 'https://getneuro.eu/r?id=619hb8',
    origin: '🇺🇸 USA / Europa',
    availability: 'Disponible online',
    productType: 'Mints funcionales con GABA y L-teanina',
    pros: ['Formato muy práctico para calma puntual', 'GABA y L-teanina, sin ritual complicado', 'Precio accesible para probar', 'Interesante como alternativa no líquida'],
    cons: ['No es una infusión ni una bebida de noche', 'Más producto funcional moderno que remedio vegetal', 'Menos alineado con usuarios que buscan manzanilla'],
    description: 'Neuro Gum entra en el Top 3 porque aporta una solución muy práctica para usuarios que buscan calma sin preparar una bebida. Calm & Clarity Mints combina GABA y L-teanina en un formato discreto, fácil de llevar y de tomar cuando se necesita bajar el ritmo.\n\nNo lo pondríamos por delante de una bebida de noche para esta intención SEO, porque la búsqueda “infusión para dormir” pide algo más ritual y más natural. Pero como alternativa moderna, rápida y comprensible, completa bien el panorama de productos relajación disponibles online.'
  },
  {
    rank: 4,
    name: 'Deep Sleep',
    brand: 'MySynapz',
    slug: 'mysynapz-deep-sleep',
    image: '/images/products/6a04979e8917adf0a3fd53de_mysynapz-deep-sleep-sommeil.jpg',
    brandLogo: '/images/logos/mysynapz-logo.svg',
    rating: 8.2,
    reviewCount: 52,
    promoCode: '',
    promoPercent: 0,
    originalPrice: '42,00 €',
    discountPrice: '42,00 €',
    affiliateLink: 'https://mysynapz.com/products/deep-sleep?ref=LMC',
    origin: '🇫🇷 Francia',
    availability: 'Disponible online, entrega internacional a verificar',
    productType: 'Cápsulas con valeriana, eschscholtzia, ashwagandha, reishi y magnesio',
    pros: ['Fórmula de sueño más completa que una simple infusión', 'Valeriana, eschscholtzia, ashwagandha KSM-66, reishi y magnesio', 'Dosajes comunicados con precisión', 'Buena opción para usuarios que prefieren cápsulas'],
    cons: ['No es una bebida ni una infusión', 'Más técnico y menos inmediato para principiantes', 'Condiciones de entrega desde España a comprobar'],
    description: 'MySynapz Deep Sleep es el producto más completo del comparativo en términos de fórmula. Valeriana, eschscholtzia, ashwagandha, reishi y magnesio hablan directamente a usuarios que no buscan solo una taza relajante, sino una rutina de sueño más estructurada.\n\nLo dejamos cuarto porque el EMD se centra en “infusión para dormir”: aquí el formato cápsula es algo menos natural para la intención. Sigue siendo útil para lectores que quieren pasar de una tisana clásica a una solución más completa, siempre verificando las condiciones de entrega.'
  },
  {
    rank: 5,
    name: 'Reishi Extracto en polvo',
    brand: 'Sporelife',
    slug: 'sporelife-reishi',
    image: '/images/products/696346675670859d958cf208_reishiextraitclame49.jpg',
    brandLogo: '/images/logos/sporelife-logo.svg',
    rating: 7.9,
    reviewCount: 80,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '34,90 €',
    discountPrice: '27,92 €',
    affiliateLink: 'https://taap.it/Sporelife-reishi',
    origin: '🇫🇷 Francia',
    availability: 'Disponible online, entrega a verificar',
    productType: 'Extracto de reishi en polvo',
    pros: ['Reishi claro y fácil de añadir a una bebida caliente', 'Buen encaje con rutina de calma', 'Formato polvo flexible', 'Cupón interesante'],
    cons: ['Más ingrediente aislado que bebida lista para dormir', 'Requiere explicar el reishi al lector', 'Menos directo que manzanilla o pasiflora'],
    description: 'Sporelife Reishi sirve como alternativa para lectores que quieren construir su propia bebida de noche. El reishi encaja bien con una rutina de relajación, especialmente si se mezcla con leche vegetal, cacao suave o una infusión sin cafeína.\n\nLa ventaja es la flexibilidad; la desventaja es la fricción. No todo el mundo que busca “infusión para dormir” quiere comprar un extracto de hongo y crear su mezcla. Por eso queda como opción complementaria, interesante pero menos evidente que las bebidas preparadas.'
  }
];

const config: SiteConfig = {
  domain: 'https://mejor-infusion-para-dormir.es',
  isIndexable: true,
  siteName: 'Infusión para Dormir',
  brand: 'Bonjour Drink',
  product: 'Saveur Camomille',
  productCategory: 'Infusiones y bebidas para dormir',
  productFormat: 'Bebida en polvo',
  tagline: 'Comparativa honesta de infusiones, bebidas y productos naturales para una rutina de noche más tranquila.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Analista editorial de complementos, bebidas funcionales y rutinas naturales desde 2024.' },
  seo: {
    title: 'Mejor infusión para dormir: comparativa 2026',
    description: 'Comparativa 2026 de infusiones y bebidas para dormir: Bonjour Drink Camomille, Go Relax, Neuro Gum, MySynapz y Reishi. Opiniones, precios y cupones.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: 'G-R2V1SC4Y5G',
  breadcrumbs: [{ label: 'Infusión para dormir', href: '/' }],
  quickSummary: {
    assets: ['Bonjour Drink Camomille es la recomendación principal para un ritual de noche sin cafeína.', 'El comparativo separa bebidas, mints, cápsulas y extractos para no mezclar falsas equivalencias.', 'Las opciones se ordenan por encaje con la intención “infusión para dormir”, fórmula, facilidad de uso y oferta real.'],
    considerations: ['Ningún producto sustituye el consejo médico en caso de insomnio persistente.', 'La entrega desde España debe verificarse antes de comprar.', 'Las bebidas funcionales no tienen el mismo perfil que una infusión tradicional de supermercado.'],
  },
  pros: ['Top 5 centrado en ritual de noche y relajación', 'Bonjour Drink colocado como producto principal', 'Alternativas útiles para perfiles bebida, cápsula, mint y reishi'],
  cons: ['Mercado español aún menos maduro que Francia o Alemania', 'Algunas marcas requieren verificación final de entrega', 'No hay que prometer efectos médicos sobre el sueño'],
  faq: [
    { question: '¿Cuál es la mejor infusión para dormir?', answer: 'Nuestra recomendación principal es Bonjour Drink Saveur Camomille, porque combina camomila, pasiflora, reishi, L-teanina y anís verde en una bebida de noche sin cafeína y fácil de repetir.' },
    { question: '¿La manzanilla ayuda a dormir?', answer: 'La manzanilla se utiliza tradicionalmente como planta de relajación y puede encajar dentro de un ritual nocturno. No debe presentarse como tratamiento médico del insomnio, pero sí como una opción suave para bajar el ritmo por la noche.' },
    { question: '¿Qué es mejor: infusión, cápsulas o mints?', answer: 'Para un ritual antes de dormir, una bebida caliente suele ser más natural. Las cápsulas pueden ser más completas, mientras que los mints son prácticos para calma puntual. La elección depende del perfil de uso.' },
    { question: '¿Bonjour Drink Camomille contiene cafeína?', answer: 'La referencia Camomille está pensada para la noche y se posiciona como bebida sin cafeína. Conviene revisar siempre la ficha oficial antes de comprar, especialmente si eres sensible a determinados ingredientes.' },
    { question: '¿Se puede comprar desde España?', answer: 'Las marcas del comparativo venden online, pero las condiciones de entrega, gastos y plazos deben verificarse en la página oficial antes de finalizar la compra.' },
  ],
  products,
  tocItems: [
    { id: 'resumen', label: 'Resumen' },
    { id: 'ranking', label: 'Top productos' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'elegir', label: 'Cómo elegir' },
    { id: 'comparativa', label: 'Tabla rápida' },
    { id: 'manzanilla', label: 'Manzanilla y sueño' },
    { id: 'veredicto', label: 'Veredicto' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparativa', slug: '/' },
    { type: 'blog', label: 'Manzanilla para dormir', slug: '/manzanilla-para-dormir/' },
    { type: 'blog', label: 'Té para dormir', slug: '/te-para-dormir/' },
  ],
};

export default config;
