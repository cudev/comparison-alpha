import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Specification from '../../../src/common/modules/specification';

const specifications = [{
  attribute: {
    attributeGroup: {
      id: '456',
      name: [
        {
          content: 'Attribute group',
          language: 'en',
        },
      ],
    },
    id: '123',
    name: [
      {
        content: 'Attribute',
        language: 'en',
      },
    ],
  },
  content: [
    {
      content: 'Specification',
      language: 'en',
    },
  ],
}];

test('render certain amount of tables', (t) => {
  const element = <Specification specifications={specifications} />;
  const wrapper = shallow(element).first().shallow();
  const renderedTables = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.table}`);
  const attributeGroups = [];
  specifications.forEach((specification) => {
    const destination = attributeGroups.find(r =>
    specification.attribute.attributeGroup.id === r.attributeGroup.id);
    if (!destination) {
      attributeGroups.push({ attributeGroup: specification.attribute.attributeGroup });
    }
  });
  t.is(attributeGroups.length, renderedTables.length);
});

test('render certain amount of rows', (t) => {
  const element = <Specification specifications={specifications} />;
  const wrapper = shallow(element).first().shallow();
  const rowsQuantity = specifications.length;
  const renderedRows = wrapper.find(`.${shallow(element).props('sheet').sheet.classes.tableRow}`);
  t.is(rowsQuantity, renderedRows.length);
});
