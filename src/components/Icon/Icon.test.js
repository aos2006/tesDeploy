import Icon from './Icon';
import { snapShotRender } from '../../utils/snapShotUtil';

describe('<Icon />', () => {
  const mock = {
    width: 30,
    height: 40,
    value: 'add',
  };

  snapShotRender('Icon without Props', Icon, mock, true);
});
