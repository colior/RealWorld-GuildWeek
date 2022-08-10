import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenBase from '../screenBase';
import profileScreenStyle from './style';
import {Feeds} from '../../components/feeds/Feeds';
import {AddButton} from '../../components/addButton/AddButton';
import {navigate} from '../../navigation/navigationUtils';
import {ScreensDetails} from '../screenDetails';
import store from '../../stateManagement/store';
import {
  followAuthor,
  getUser,
  unfollowAuthor,
} from '../../services/user/userService';

export type Profile = {
  username: string;
  bio: string;
  image: ImageSourcePropType;
  following: boolean;
};

type ProfileScreenProps = {
  componentId: string;
  username: string;
};

const noPicImage = require('../../../assets/no-pic.jpeg');

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const [userToShow, setUserToShow] = useState<Profile | undefined>();

  useEffect(() => {
    if (!userToShow) {
      getUser(props.username)
        .then(res => {
          setUserToShow(res.data.profile);
        })
        .catch(e => {
          console.error(e);
        });
    }
  }, [props.username, userToShow]);

  return (
    <ScreenBase componentId={props.componentId}>
      <View style={profileScreenStyle.header}>
        <Image
          style={profileScreenStyle.image}
          source={userToShow ? {uri: userToShow.image} : noPicImage}
        />
        <Text style={profileScreenStyle.title}>
          {userToShow && userToShow.username}
        </Text>
        {!userToShow || store.currentUser?.username === userToShow.username ? (
          <TouchableOpacity
            style={profileScreenStyle.followButton}
            onPress={() => {
              navigate(ScreensDetails.SettingsScreen, props.componentId);
            }}>
            <Text style={profileScreenStyle.followButtonText}>
              Edit Profile Settings
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={profileScreenStyle.followButton}
            onPress={() => {
              if (!userToShow) {
                throw new Error('follow unknown user');
              }
              userToShow.following
                ? unfollowAuthor(userToShow.username)
                    .then(res => {
                      setUserToShow({...userToShow, following: false});
                    })
                    .catch(() => console.error('failed to unfollow'))
                : followAuthor(userToShow.username)
                    .then(res => {
                      setUserToShow({...userToShow, following: true});
                    })
                    .catch(() => console.error('failed to follow'));
            }}>
            <Text style={profileScreenStyle.followButtonText}>
              {userToShow && userToShow.following
                ? `- Unfollow ${userToShow && userToShow.username}`
                : `+ Follow ${userToShow && userToShow.username}`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Feeds componentId={props.componentId} />
      {store.currentUser && (
        <AddButton
          onPress={() => {
            navigate(ScreensDetails.AddArticleScreen, props.componentId);
          }}
        />
      )}
    </ScreenBase>
  );
};

export default ProfileScreen;
