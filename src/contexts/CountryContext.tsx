import React, { createContext, useContext, useState, ReactNode } from 'react';

type Country = 'angola' | 'mozambique';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  currency: string;
  currencySymbol: string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

// New prices as specified:
// Angola: Mensal KZ 4.625, Trimestral KZ 10.696, Semestral KZ 16.054, Anual KZ 23.125
// Mozambique: Converted to MT (approximate rate KZ/MT = 15.5)

export const prices = {
  angola: {
    currency: 'KZ',
    symbol: 'KZ',
    plans: {
      mensal: { price: '4.625' },
      trimestral: { price: '10.696' },
      semestral: { price: '16.054' },
      anual: { price: '23.125' }
    },
    services: [
      { price: '10.696' },
      { price: '4.624' },
      { price: '11.232' },
      { price: '7.128' },
      { price: '3.912' },
      { price: '7.128' },
      { price: '8.030' },
      { price: '6.235' },
      { price: '5.342' },
      { price: '16.054' },
      { price: '4.624' }
    ],
    totalOthers: '85.005',
    totalBaltigoflix: '1.927',
    comparison: {
      othersTotal: 'KZ 85.005',
      baltigoflixTotal: 'KZ 23.125'
    }
  },
  mozambique: {
    currency: 'MZN',
    symbol: 'MT',
    plans: {
      mensal: { price: '334' },
      trimestral: { price: '772' },
      semestral: { price: '1.159' },
      anual: { price: '1.670' }
    },
    services: [
      { price: '690' },
      { price: '298' },
      { price: '724' },
      { price: '460' },
      { price: '252' },
      { price: '460' },
      { price: '518' },
      { price: '402' },
      { price: '345' },
      { price: '1.036' },
      { price: '298' }
    ],
    totalOthers: '5.483',
    totalBaltigoflix: '124',
    comparison: {
      othersTotal: 'MT 5.483',
      baltigoflixTotal: 'MT 3.935'
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
