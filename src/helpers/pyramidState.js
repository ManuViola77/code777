import { times } from 'lodash';

import { DONT_KNOW } from 'constants/states';

const addState = () => DONT_KNOW;

export const initialState = {
  1: [DONT_KNOW],
  2: times(2, addState),
  3: times(3, addState),
  4: times(4, addState),
  5: times(5, addState),
  6: times(6, addState),
  7: times(7, addState),
};
