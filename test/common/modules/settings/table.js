import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Table from '../../../../src/common/modules/settings/components/table';

const parameters = {
    attributeGroup: {
      id: 'fgbhfgbhgf546',
      name: 'Design',
    },
    attributes: [{
      id: 'dfgdfbhsdfh',
      name: 'fdgbfdssf',
      content: [
        {
          content: 'dfgdfgdf',
          index: 0,
        },
      ],
    }],
  };

test('render certain amount of rows and cells', (t) => {
  const element = (<Table
    closedItem={[]}
    parameters={parameters}
    tableIndex={1}
  />);
  const wrapper = shallow(element).first().shallow();
  const tableRows = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.tableRow}`);
  t.is(parameters.attributes.length, tableRows.length);
  const tableCells = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.firstCell}`);
  t.is(parameters.attributes[0].content.length, tableCells.length);
});
