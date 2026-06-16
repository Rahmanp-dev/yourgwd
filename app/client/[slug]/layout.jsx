export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (slug === 'tibarumal-sons-shaikpet') {
    return {
      title: 'Tibarumal & Sons - Royal Nizami Gold & Emerald Heritage',
      description: 'Savoir-faire in Nizam\'s royal bridal jewellery. Discover heritage 22K gold, antique temple necklaces, exquisite emerald chokers near Shaikpet Flyover, Hyderabad.',
      openGraph: {
        title: 'Tibarumal & Sons - Royal Nizami Gold & Emerald Heritage',
        description: 'Savoir-faire in Nizam\'s royal bridal jewellery. Discover heritage 22K gold, antique temple necklaces, exquisite emerald chokers near Shaikpet Flyover, Hyderabad.',
        siteName: 'Tibarumal & Sons',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Tibarumal & Sons Royal Heritage Collection',
          },
        ],
      },
    };
  } else if (slug === 'tibarumal-ramnivas-jubilee-hills') {
    return {
      title: 'Tibarumal Ramnivas Jewellers - Diamond & Platinum Masterpieces',
      description: 'Bespoke high luxury jewellery in Jubilee Hills, Hyderabad. Exquisite couture diamonds, fine platinum necklaces, custom bridal sets, and virtual consultations.',
      openGraph: {
        title: 'Tibarumal Ramnivas Jewellers - Diamond & Platinum Masterpieces',
        description: 'Bespoke high luxury jewellery in Jubilee Hills, Hyderabad. Exquisite couture diamonds, fine platinum necklaces, custom bridal sets, and virtual consultations.',
        siteName: 'Tibarumal Ramnivas Jewellers',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Tibarumal Ramnivas Couture Diamonds',
          },
        ],
      },
    };
  } else if (slug === 'manepally-jewellers-general-bazar') {
    return {
      title: 'Manepally Jewellers - Premium Nizami & Bridal Heritage',
      description: 'Step into the legacy of Secunderabad\'s historic General Bazar store. Exquisite 22K gold, antique heritage chokers, temple necklaces, and royal bridal jewellery collections.',
      openGraph: {
        title: 'Manepally Jewellers - Premium Nizami & Bridal Heritage',
        description: 'Step into the legacy of Secunderabad\'s historic General Bazar store. Exquisite 22K gold, antique heritage chokers, temple necklaces, and royal bridal jewellery collections.',
        siteName: 'Manepally Jewellers',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Manepally Jewellers Heritage Collection',
          },
        ],
      },
    };
  } else if (slug === 'sri-krishna-jewellers-banjara-hills') {
    return {
      title: 'Sri Krishna Jewellers - Couture Diamonds & Gemstones',
      description: 'Discover the pinnacle of elite craftsmanship in Banjara Hills, Hyderabad. Exquisite solitaires, couture diamonds, rare emeralds, and contemporary royal masterpieces.',
      openGraph: {
        title: 'Sri Krishna Jewellers - Couture Diamonds & Gemstones',
        description: 'Discover the pinnacle of elite craftsmanship in Banjara Hills, Hyderabad. Exquisite solitaires, couture diamonds, rare emeralds, and contemporary royal masterpieces.',
        siteName: 'Sri Krishna Jewellers',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Sri Krishna Jewellers Couture Diamonds',
          },
        ],
      },
    };
  } else if (slug === 'sri-jagdamba-pearls') {
    return {
      title: 'Sri Jagdamba Pearls - Authentic Pearl & Gold Heritage',
      description: 'Experience Hyderabad\'s ultimate legacy of pearls. Exquisite South Sea pearls, freshwater pearls, temple necklaces, and traditional bridal sets on MG Road, Secunderabad.',
      openGraph: {
        title: 'Sri Jagdamba Pearls - Authentic Pearl & Gold Heritage',
        description: 'Experience Hyderabad\'s ultimate legacy of pearls. Exquisite South Sea pearls, freshwater pearls, temple necklaces, and traditional bridal sets on MG Road, Secunderabad.',
        siteName: 'Sri Jagdamba Pearls',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Sri Jagdamba Pearls Collection',
          },
        ],
      },
    };
  } else if (slug === 'suhani-pittie-banjara-hills') {
    return {
      title: 'Suhani Pittie - Contemporary Designer Jewellery',
      description: 'Explore contemporary metal art and handcrafted designer jewellery in Banjara Hills, Hyderabad. Elegant minimalism with sleek bronze borders.',
      openGraph: {
        title: 'Suhani Pittie - Contemporary Designer Jewellery',
        description: 'Explore contemporary metal art and handcrafted designer jewellery in Banjara Hills, Hyderabad. Elegant minimalism with sleek bronze borders.',
        siteName: 'Suhani Pittie',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Suhani Pittie Designer Collection',
          },
        ],
      },
    };
  } else if (slug === 'akoya-pearls-ghanshyamdas') {
    return {
      title: 'Akoya Pearls by Ghanshyamdas | Premium Pearl Jewellery Hyderabad',
      description: 'Bespoke organic pearl strings, floral chokers, and fine jewellery inspired by biophilic forms. Experience the heritage of Ghanshyamdas at Road No. 2, Banjara Hills, Hyderabad.',
      openGraph: {
        title: 'Akoya Pearls by Ghanshyamdas',
        description: 'Bespoke organic pearl strings, floral chokers, and fine jewellery. Experience the heritage of Ghanshyamdas at Road No. 2, Banjara Hills, Hyderabad.',
        url: 'https://gwd-sales.com/client/akoya-pearls-ghanshyamdas',
        siteName: 'Akoya Pearls by Ghanshyamdas',
      }
    };
  } else if (slug === 'suraj-bhan-jewellers') {
    return {
      title: 'Suraj Bhan Jewellers | Heritage Temple Jewellery Hyderabad',
      description: 'Exquisite, handcrafted traditional gold, gemstone, and temple jewelry since 1952. Discover our signature collections at Pathergatti, Near Charminar, Hyderabad.',
      openGraph: {
        title: 'Suraj Bhan Jewellers',
        description: 'Heritage temple, gold, and gemstone jewelry. Discover our signature collections at Pathergatti, Near Charminar, Hyderabad.',
        url: 'https://gwd-sales.com/client/suraj-bhan-jewellers',
        siteName: 'Suraj Bhan Jewellers',
      }
    };
  }

  return {
    title: 'Premium Jewellery Stores Hyderabad - Contemporary Minimalist',
    description: 'Discover premium bridal and heritage jewellery, bespoke customizer utilities, and virtual design consultations.',
  };
}

export default function ClientLayout({ children }) {
  return children;
}
