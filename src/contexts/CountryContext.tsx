import React, { createContext, useContext, useState, ReactNode } from 'react';

type Country = 'angola' | 'mozambique';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  currency: string;
  currencySymbol: string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Updated prices:
// Angola: Mensal KZ 4.500, Trimestral KZ 10.700, Semestral KZ 16.100, Anual KZ 23.400
// Mozambique: Converted to MT (approximate rate KZ/MT = 13.89)

export const prices = {
  angola: {
    currency: 'KZ',
    symbol: 'KZ',
    plans: {
      mensal: { price: '4.500' },
      trimestral: { price: '10.700' },
      semestral: { price: '16.100' },
      anual: { price: '23.400' }
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
    totalBaltigoflix: '1.950',
    comparison: {
      othersTotal: 'KZ 85.005',
      baltigoflixTotal: 'KZ 23.400'
    }
  },
  mozambique: {
    currency: 'MZN',
    symbol: 'MT',
    plans: {
      mensal: { price: '324' },
      trimestral: { price: '770.40' },
      semestral: { price: '1.159.20' },
      anual: { price: '1.684.80' }
    },
    services: [
      { price: '770' },
      { price: '333' },
      { price: '809' },
      { price: '513' },
      { price: '282' },
      { price: '513' },
      { price: '578' },
      { price: '449' },
      { price: '385' },
      { price: '1.156' },
      { price: '333' }
    ],
    totalOthers: '6.121',
    totalBaltigoflix: '140',
    comparison: {
      othersTotal: 'MT 6.121',
      baltigoflixTotal: 'MT 1.684.80'
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
