import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  defaultButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 32,
  },
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  captionText: {
    fontSize: 12,
    color: 'black',
  },
});
export default commonStyles;
