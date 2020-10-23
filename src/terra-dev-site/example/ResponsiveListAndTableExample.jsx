import React, {
  useState,
} from 'react';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import Table from 'terra-table';
import classNames from 'classnames/bind';
import styles from './ResponsiveListAndTableExample.scss';
import mockData from './mock-data/table-select-data'

//Replace ITEMviee.Display
const display1 = <ItemView.Display icon={<IconPerson />} text="Asif Khan" />;
const display2 = <ItemView.Display text="Care Position: Primary" />;
const display3 = <ItemView.Display text="Room 100A" />;
const display4 = <ItemView.Display text="Acuity: 5" />;
const display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;
const comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;
const startAccessory = <IconAlert />;
const endAccessory = <IconInformation />;

const cx = classNames.bind(styles);

const listDisplay = (
  <List role="listbox">
    <Item>
      <ItemView
        displays={[
          <ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
        endAccessory={endAccessory}
      />
    </Item>
    <Item>
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          <ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
        endAccessory={endAccessory}
        layout="twoColumns"
      />
    </Item>
    <Item>
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        reserveStartAccessorySpace
        comment={comment}
        endAccessory={endAccessory}
      />
    </Item>
    <Item>
      <ItemView
        displays={[
          display1,
          display2,
          <ItemView.Display text="Room 100A" textStyle="strikeThrough" />,
          display4,
          display5,
          display6,
        ]}
        reserveStartAccessorySpace
        comment={comment}
        endAccessory={endAccessory}
        layout="twoColumns"
      />
    </Item>
    <Item>
      <ItemView
        displays={[
          display1,
          display2,
          display3,
          display4,
          display5,
          display6,
        ]}
        startAccessory={startAccessory}
        comment={comment}
      />
    </Item>
  </List>
);


const createCell = cell => ({ key: cell.key, children: cell.children, attrs: cell.attrs });
const createCellsForRow = cells => cells.map(cell => createCell(cell));

const CustomItemCollection = () => {
  const [selectedKey, setSelectedKey] = useState([]);
  const handleRowDisclose = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };
  const createRow = rowData => (
    {
      key: rowData.key,
      isStriped: rowData.isStriped,
      cells: createCellsForRow(rowData.cells),
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

  return (
    <ResponsiveElement
      responsiveTo="parent"
      tiny={listDisplay}
      small={tableDisplay}
    />
  );
};

export default CustomItemCollection;
