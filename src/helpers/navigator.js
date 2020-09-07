import * as React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

export default { navigate, goBack };
