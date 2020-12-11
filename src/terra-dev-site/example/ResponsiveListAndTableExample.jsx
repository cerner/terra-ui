import React, { useState } from 'react';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import Table from 'terra-table';
import classNames from 'classnames/bind';
import styles from './ResponsiveListAndTableExample.scss';
import mockData from './mock-data/table-select-data';

const cx = classNames.bind(styles);

const CustomItemCollection = () => {
  const [selectedKey, setSelectedKey] = useState([]);
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const handleRowDisclose = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };

  const createItem = rowData => {
    let itemview;
    let startAccessory;
    let comment;
    let endAccessory;

    const displays = rowData.cells.map((cell) => {
      switch (cell.key) {
        case 'startAccessory':
          startAccessory = cell.children;
          return null;
        case 'comment':
          comment = cell.children;
          return null;
        case 'endAccessory':
          endAccessory = cell.children;
          return null;
        default:
          return cell.children;
      }
    });

    if (startAccessory) {
      itemview = (
          <ItemView
            displays={displays}
            startAccessory={startAccessory}
            comment={comment}
            endAccessory={endAccessory}
            layout={rowData.layout}
          />
      );
    }
    else {
      itemview = (
        <ItemView
          displays={displays}
          reserveStartAccessorySpace
          comment={comment}
          endAccessory={endAccessory}
          layout={rowData.layout}
        />
      );
    }

    return (
      <Item
        key={rowData.key}
        metaData={{ key: rowData.key }}
        onSelect={handleRowDisclose}
        isSelectable
        isSelected={selectedKey === rowData.key}
      >
        {itemview}
      </Item>
    );
  };
  const createItems = data => data.map(childItem => createItem(childItem));
  const listDisplay = (
    <List role="listbox">
      {createItems(mockData)}
    </List>
  );

  const createRow = rowData => (
    {
      key: rowData.key,
      isStriped: rowData.isStriped,
      cells: rowData.cells,
      discloseAction: {
        metaData: { key: rowData.key },
        discloseLabel: rowData.discloseText,
        isDisclosed: selectedKey === rowData.key,
        discloseCellIndex: 0,
        onDisclose: handleRowDisclose,
      },
    }
  );
  const createRows = data => data.map(childItem => createRow(childItem));
  const tableDisplay = (
    <Table
      summaryId="standard-table"
      summary="This table has standard padding"
      numberOfColumns={mockData[0].cells.length}
      dividerStyle="horizontal"
      rowStyle="disclose"
      bodyData={[
        {
          rows: createRows(mockData),
        },
      ]}
      className={cx('table')}
    />
  );

  switch (activeBreakpoint) {
    case 'tiny':
    case 'small':
    case 'medium':
      return listDisplay;
    case 'large':
    case 'huge':
    case 'enormous':
    default:
      return tableDisplay;
  }
};

export default CustomItemCollection;
