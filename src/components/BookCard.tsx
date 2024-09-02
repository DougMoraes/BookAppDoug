import { View, Text, Image, StyleSheet } from 'react-native';
import { BookType } from '../types';
import Button from './Button';

export type BookCardType = {
  book: BookType;
};

const BookCard = ({book} : BookCardType) => {
  const coverImageURL = `https://covers.openlibrary.org/b/olid/${book.lending_edition_s}.jpg`;

  return (
    <View style={styles.container}>
      <View style={styles.imageInnerContainer}>
        <Image src={coverImageURL} style={styles.image} testID="book-cover"/>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{book.title}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.price}>{`${book.author_name}`}</Text>
          <Text style={styles.title}>{`${book.first_publish_year}`}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Button text="Favorite" onPress={() => {}}/>
          <Button text="Reading" onPress={() => {}}/>
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },
  imageInnerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginRight: 10,
    maxWidth: 80,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  quantity: {
    fontWeight: '500',
  },
});
