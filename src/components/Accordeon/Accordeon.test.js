import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordeon from './Accordeon';
import AccordeonItem from './AccordeonItem';

describe('<Accordeon />', () => {
  const handleOpen = jest.fn();
  const list = [
    {
      title: 'Меню 1',
    },
    {
      title: 'Меню 2',
    },
  ];

  it('Render testing', () => {
    const wrapper = shallow(
      <Accordeon activeIndex={0} onOpen={handleOpen}>
        {list.map(item => (
          <AccordeonItem title={item.title}>dimon bidon</AccordeonItem>
        ))}
      </Accordeon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('When pass index item:index is open', () => {
    const wrapper = shallow(
      <Accordeon activeIndex={0} onOpen={handleOpen}>
        {list.map(item => (
          <AccordeonItem title={item.title}>dimon bidon</AccordeonItem>
        ))}
      </Accordeon>,
    );
    const ACTIVE_LENGTH = wrapper.find('[active=true]').length;
    expect(ACTIVE_LENGTH).toEqual(1);
  });
});
