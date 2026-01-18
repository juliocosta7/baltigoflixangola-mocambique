import React, { createContext, useContext, useState, ReactNode } from 'react';

type Country = 'angola' | 'mozambique';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  currency: string;
  currencySymbol: string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Exchange rates (approximate)
// 1 BRL = ~170.6 KZ (Angola Kwanza)
// 1 BRL = ~10.7 MZN (Mozambique Metical)

export const prices = {
  angola: {
    currency: 'KZ',
    symbol: 'KZ',
    plans: {
      mensal: { price: '4.420', installments: null },
      trimestral: { price: '10.220', installments: 'Ou 3x de KZ 3.407' },
      semestral: { price: '15.340', installments: 'Ou 6x de KZ 2.557' },
      anual: { price: '22.160', installments: 'Ou 12x de KZ 1.847' }
    },
    services: [
      { price: '10.222' },
      { price: '4.419' },
      { price: '10.731' },
      { price: '6.807' },
      { price: '3.736' },
      { price: '6.807' },
      { price: '7.669' },
      { price: '5.954' },
      { price: '5.101' },
      { price: '15.337' },
      { price: '4.419' }
    ],
    totalOthers: '81.202',
    totalBaltigoflix: '1.847',
    comparison: {
      othersTotal: 'KZ 81.202',
      baltigoflixTotal: 'KZ 22.160'
    }
  },
  mozambique: {
    currency: 'MZN',
    symbol: 'MT',
    plans: {
      mensal: { price: '277', installments: null },
      trimestral: { price: '641', installments: 'Ou 3x de MT 214' },
      semestral: { price: '962', installments: 'Ou 6x de MT 160' },
      anual: { price: '1.390', installments: 'Ou 12x de MT 116' }
    },
    services: [
      { price: '641' },
      { price: '277' },
      { price: '673' },
      { price: '427' },
      { price: '234' },
      { price: '427' },
      { price: '481' },
      { price: '373' },
      { price: '320' },
      { price: '962' },
      { price: '277' }
    ],
    totalOthers: '5.092',
    totalBaltigoflix: '116',
    comparison: {
      othersTotal: 'MT 5.092',
      baltigoflixTotal: 'MT 1.390'
    }
  }
};

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<Country>('angola');

  const currency = country === 'angola' ? 'KZ' : 'MZN';
  const currencySymbol = country === 'angola' ? 'KZ' : 'MT';

  return (
    <CountryContext.Provider value={{ country, setCountry, currency, currencySymbol }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
