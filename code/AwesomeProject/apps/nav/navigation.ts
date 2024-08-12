import {createRef} from 'react';

export const navigationRef = createRef<any>();

export const navigate = (...args) => {
  navigationRef.current && navigationRef.current.navigate(...args);
};
