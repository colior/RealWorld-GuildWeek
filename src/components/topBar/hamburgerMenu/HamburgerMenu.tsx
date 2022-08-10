import React, {useState} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import hamburgerMenuStyle from './style';
// @ts-ignore
import MenuIcon from '../../../../assets/menu_icon.svg';
// @ts-ignore
import CloseIcon from '../../../../assets/close_icon.svg';
import {TopBarButton} from '../topBar';
import {navigate} from '../../../navigation/navigationUtils';
import store from '../../../stateManagement/store';

type HamburgerMenuProps = {
  componentId: string;
  menuButtons: TopBarButton[];
};

const getButtonTextStyle = (button: TopBarButton) => {
  const buttonStyle: StyleProp<TextStyle> = [hamburgerMenuStyle.text];
  if (store.selectedScreenId === button?.screen?.id) {
    buttonStyle.push(hamburgerMenuStyle.selectedText);
  }
  if (button.skin === 'logout') {
    buttonStyle.push(hamburgerMenuStyle.logoutText);
  }
  return buttonStyle;
};

export const HamburgerMenu: React.FC<HamburgerMenuProps> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={hamburgerMenuStyle.iconContainer}>
      {!isOpen && (
        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <MenuIcon fill={'#000000'} />
        </TouchableOpacity>
      )}
      {isOpen && (
        <View style={hamburgerMenuStyle.menuContainer}>
          <TouchableOpacity
            style={hamburgerMenuStyle.closeIconContainer}
            onPress={() => setIsOpen(false)}>
            <CloseIcon fill={'#000000'} />
          </TouchableOpacity>
          {store.currentUser && (
            <View style={hamburgerMenuStyle.profileContainer}>
              <Image
                style={hamburgerMenuStyle.profileImage}
                source={{uri: store.currentUser.image}}
              />
              <Text style={hamburgerMenuStyle.profileName}>
                {store.currentUser.username}
              </Text>
            </View>
          )}
          <View style={hamburgerMenuStyle.buttonsContainer}>
            {props.menuButtons.map((button, index) => {
              const buttonTextStyle = getButtonTextStyle(button);
              return (
                <TouchableOpacity
                  key={`menu-button-${index}`}
                  onPress={() => {
                    if (button.screen) {
                      navigate(button?.screen, props.componentId);
                    } else if (button.onClick) {
                      button.onClick(props.componentId);
                    }
                  }}
                  style={hamburgerMenuStyle.button}>
                  <Text style={buttonTextStyle}>{button.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};
