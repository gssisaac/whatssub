import React, { useState } from 'react';
import { SwitchToggle } from 'dooboo-native-widgets';

interface Props {
  onPress: (switchOn: boolean) => void,
  [prop: string]: any,
};

function StyledSwitchToggle({ onPress, ...props }: Props) {
  const [switchOn, setSwitchOn] = useState<boolean>(true);

  const handlePress = () => {
    const currentSwitchOn = !switchOn;

    setSwitchOn(currentSwitchOn);

    onPress(currentSwitchOn);

    return true;
  };

  return (
    <SwitchToggle
      containerStyle={{
        width: 40,
        height: 21.7,
        borderRadius: 10.9,
        padding: 1.1,
        marginRight: 21,
      }}
      circleStyle={{
        width: 19.6,
        height: 19.6,
        borderRadius: 100,
      }}
      backgroundColorOn='rgb(62, 126, 255)'
      circleColorOff='rgba(255, 255, 255, 99.9)'
      circleColorOn='rgba(255, 255, 255, 99.9)'
      switchOn={switchOn}
      onPress={handlePress}
      {...props}
    />
  );
};

export default StyledSwitchToggle;
