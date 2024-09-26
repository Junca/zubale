import React from 'react';
import {IButtonProps, Image, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {Record} from '@/List';
import {Comment, Like, Liked, Save, Saved, Send} from '@/assets';
import moment from 'moment';

interface PropTypes extends IButtonProps {
  record: Record;
}

const RecordCard: React.FC<PropTypes> = ({record}) => {
  return (
    <View style={styles.card} key={record.id} >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.icon}>
          <Image alt={''} source={{uri: record.avatar}} style={styles.avatar} />
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>{record.name}</Text>
          <Text style={styles.location}>{record.location}</Text>
        </View>
      </View>
      <View style={styles.image}>
        <Image
          alt={''}
          source={{uri: record.image}}
          style={{width: '100%', height: 640}}
        />
      </View>
      <View style={styles.prevooter}>
        <View style={styles.prevooterLeft}>
          <View style={styles.item}>
            {record.liked ? <Like /> : <Liked />}
            <Text style={styles.numbers}>{record.likes}</Text>
          </View>
          <View style={styles.item}>
            <Comment />
            <Text style={styles.numbers}>{record.comments}</Text>
          </View>
          <Send />
        </View>
        <View style={styles.prevooterRight}>
          {record.saved ? <Saved /> : <Save />}
        </View>
      </View>
      <View style={styles.liked}></View>
      <View style={styles.footer}>
        <Text style={styles.name}>{record.name}</Text>
        <Text style={styles.description}>{record.description}</Text>
      </View>
      <View style={styles.created}>
        <Text style={styles.time}>Created at {moment(record.createdAt, 'YYYY-MM-DD hh:mm:ss+ZZ').format(
            'MM/DD/YYYY HH:mm:ss',
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
    marginTop: 4,
  },
  location: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
    marginBottom: 5,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  prevooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    gap: 6,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  prevooterLeft: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  prevooterRight: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  liked: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  numbers: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
  },
  footer: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  description: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
    marginTop: 4,
  },
  created: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 30,
  },
  time: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: 'gray',
    marginTop: 4,
  },
});

export default RecordCard;
