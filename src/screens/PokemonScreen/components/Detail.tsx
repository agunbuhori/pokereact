import React, {FC} from 'react';
import {Typography} from '@app/components/atoms';
import {Pokemon} from '@app/types/Pokemon';
import {StyleSheet, View} from 'react-native';
import {dmToCm, hgToKg} from '@app/utils/mathHelpers';

interface DetailItemProps {
  label: string;
  value: string;
}
const DetailItem: FC<DetailItemProps> = ({label, value}) => {
  return (
    <View style={styles.detailItem}>
      <Typography weight="bold">{label}</Typography>
      <Typography>{value}</Typography>
    </View>
  );
};

const Detail: FC<Pokemon> = ({name, height, weight, types}) => {
  return (
    <View>
      <DetailItem label="Name" value={name} />
      <DetailItem label="Height" value={dmToCm(height)} />
      <DetailItem label="Weight" value={hgToKg(weight)} />
      <DetailItem
        label="Types"
        value={types.map(item => item.type.name).join(', ')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    borderTopColor: '#aaa',
    borderTopWidth: 1,
  },
});

export default Detail;
