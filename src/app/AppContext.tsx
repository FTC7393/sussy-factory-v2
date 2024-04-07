import React, { createContext, useState } from 'react';

interface AppState {
  state: string;
  team: string;
  status: string;
  stlUrl: string;
  phone: string;
  printed: boolean;
  taken: boolean;
  colorOfTheDay: string;
  colorOfTheDayHex: string;
  topText: string;
  bottomText: string;
  shoes: boolean;
  generated: boolean;
  submitted: boolean;
  expired: boolean;
  haveAlertedForPrintDone: boolean;
  queueSpotsLeft: string;
}

interface AppContextValue extends AppState {
  setValue: (key: keyof AppState, value: any) => void;
}

const initialState: AppState = {
  state: 'loading',
  team: '',
  status: '',
  stlUrl: '',
  phone: '',
  printed: false,
  taken: false,
  colorOfTheDay: '',
  colorOfTheDayHex: '',
  topText: '',
  bottomText: '',
  shoes: false,
  generated: false,
  submitted: false,
  expired: false,
  haveAlertedForPrintDone: false,
  queueSpotsLeft: 'Loading...',
};

export const AppContext = createContext<AppContextValue>({
  ...initialState,
  setValue: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  const setValue = (key: keyof AppState, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const value = {
    ...state,
    setValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};