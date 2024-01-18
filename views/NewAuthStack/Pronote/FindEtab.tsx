import React from 'react';

import { StatusBar, ScrollView, Platform } from 'react-native';
import { MapPin, QrCode, Link2 } from 'lucide-react-native';

import NativeList from '../../../components/NativeList';
import NativeItem from '../../../components/NativeItem';
import NativeText from '../../../components/NativeText';

import GetUIColors from '../../../utils/GetUIColors';

const FindEtab = ({ navigation }) => {
  const UIColors = GetUIColors();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={{ backgroundColor: UIColors.modalBackground }}
    >
      <StatusBar
        animated
        barStyle={
          Platform.OS === 'ios' ?
            'light-content'
            :
            UIColors.theme == 'light' ?
              'dark-content'
              :
              'light-content'
        }
      />

      <NativeList
        header="Recommandations Papillon"
        inset
      >
        <NativeItem
          leading={
            <QrCode color={UIColors.primary} />
          }
          onPress={() => navigation.navigate('NewPronoteQR')}
        >
          <NativeText heading="h4">
            Se connecter avec un QR Code
          </NativeText>
          <NativeText heading="p2">
            Connexion instantanée
          </NativeText>
        </NativeItem>
        <NativeItem
          leading={<MapPin color={UIColors.primary} />}
          onPress={() => navigation.navigate('LocateEtab')}
        >
          <NativeText heading="h4" style={{ flex: 1 }}>
            Rechercher un établissement
          </NativeText>
          <NativeText heading="p2">
            À partir d'une recherche
          </NativeText>
        </NativeItem>
      </NativeList>

      <NativeList
        header="Options avancées"
        inset
      >
        <NativeItem
          leading={
            <Link2 color={UIColors.primary} />
          }
          onPress={() => navigation.navigate('LoginURL')}
        >
          <NativeText heading="h4">
            Utiliser une URL Pronote
          </NativeText>
        </NativeItem>
        
      </NativeList>
    </ScrollView>
  );
};

export default FindEtab;