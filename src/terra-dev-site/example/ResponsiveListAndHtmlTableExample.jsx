import React from 'react';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';
import classNames from 'classnames/bind';
import mockData from './mock-data/html-table-data';
import styles from './ResponsiveListAndHtmlTableExample.scss';

const cx = classNames.bind(styles);

const createItemDisplays = (cells, headerRow) => {
  const displays = [];
  displays.push(<ItemView.Display text={cells[0].children} textStyle="strong"/>);
  for (let i = 1; i < cells.length; i += 1) {
    displays.push(<ItemView.Display text={`${headerRow.cells[i].children}: ${cells[i].children}`} textStyle="secondary" />);
  }
  return displays;
};
const createItemView = (rowData, headerRow) => (
  <ItemView
    displays={createItemDisplays(rowData.cells, headerRow)}
    layout="twoColumns"
  />
);
const createItems = rows => {
  const items = [];
  for (let i = 1; i < rows.length; i += 1) {
    items.push(<Item key="default">{createItemView(rows[i], rows[0])}</Item>);
  }
  return items;
};
const listDisplay = (
  <List role="listbox" dividerStyle="standard">
    {createItems(mockData)}
  </List>
);

const createHeaderCell = cell => (<HeaderCell key={cell.key} className={cx(cell.className)}>{cell.children}</HeaderCell>);
const createCellsForHeader = cells => cells.map(cell => createHeaderCell(cell));
const createHeader = rowData => (
  <Header>
    {createCellsForHeader(rowData.cells)}
  </Header>
);

const createCell = cell => (<Cell key={cell.key} className={cx(cell.className)}>{cell.children}</Cell>);
const createCellsForRow = cells => cells.map(cell => createCell(cell));
const createRow = rowData => (
  <Row key={rowData.key}>
    {createCellsForRow(rowData.cells)}
  </Row>
);
const createBody = rows => {
  const bodyrows = [];
  for (let i = 1; i < rows.length; i += 1) {
    bodyrows.push(createRow(rows[i]));
  }
  return (
    <Body>
      {bodyrows}
    </Body>
  );
};

const tableDisplay = (
  <Table paddingStyle="compact">
    {createHeader(mockData[0])}
    {createBody(mockData)}
  </Table>
);

const CustomItemCollection = () => (
  <ResponsiveElement
    responsiveTo="parent"
    tiny={listDisplay}
    small={tableDisplay}
  />
);

export default CustomItemCollection;
