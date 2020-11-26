import React from 'react';
import Action from './Action';

export default function SectionActions(props) {
  const { actions } = props;

  return actions.map((action, index) => <Action key={index} {...props} action={action} />);
}
