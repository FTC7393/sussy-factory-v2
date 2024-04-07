"use client";

import React, { createContext, useCallback, useContext, useState } from 'react';

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
  currentState: 'notLoggedInYet' | 'loggedIn' | 'generating' | 'generated' | 'submitted' | 'printed' | 'taken';
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
  currentState: 'notLoggedInYet',
};

const AppContext = createContext<AppState | any>(initialState);

export const useAppState = () => {
  const [state, setState] = useState<AppState>(initialState);

  const setValue = useCallback(
    (key: keyof AppState, value: any) => {
      console.log('setting value', key, value);
      setState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    },
    [setState]
  );

  return { state, setValue };
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, setValue } = useAppState();

  return <AppContext.Provider value={{ ...state, setValue }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
