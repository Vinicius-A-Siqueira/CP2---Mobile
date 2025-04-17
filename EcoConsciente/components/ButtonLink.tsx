import React from 'react';
import { Button, Linking } from 'react-native';

interface ButtonLinkProps {
  title: string;
  url: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ title, url }) => {
  return <Button title={title} onPress={() => Linking.openURL(url)} />;
};

export default ButtonLink;
