import {StyleSheet} from 'react-native';
export const DEFAULT_SPACING = 16;
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
    marginVertical: DEFAULT_SPACING,
    marginHorizontal: DEFAULT_SPACING,
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
