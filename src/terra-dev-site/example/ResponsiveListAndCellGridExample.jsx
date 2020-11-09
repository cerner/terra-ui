import React, { useState, useRef } from 'react';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ResponsiveElement from 'terra-responsive-element';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import List, { Item } from 'terra-list';
import ItemView from 'terra-clinical-item-view';
import CellGrid, { Cell } from 'terra-cell-grid';
import classNames from 'classNames/bind';
import styles from './ResponsiveListAndCellGridExample.scss';
import mockData from './mock-data/cell-grid-data';

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
    <Item key="default">
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
    <Item key="default">
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
    <Item key="default">
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
    <Item key="default">
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
    <Item key="default">
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

const createCells = cellArray => {
  const cells = [];
  const accessoryWidth = { static: { value: 40, unit: 'px' } };
  const defaultWidth = { scalar: 1 };
  for (let i = 0; i < cellArray.length; i += 1) {
    let isAccessory = (i === 0 || i === cellArray.length - 1);
    cells.push(<Cell width={isAccessory ? accessoryWidth : defaultWidth} className={cellArray[i].attrs.className} key={cellArray[i].key}>{cellArray[i].children}</Cell>);
  }
  return cells;
};
const createCellGrid = cellGridData => (
  <CellGrid className={cx('row')}>
    {createCells(cellGridData.cells)}
  </CellGrid>
);
const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

const cellGridDisplay = (
  <div className={cx('cellgrid-wrapper')}>
    {createCellGrids(mockData)}
  </div>
);

/*  <CellGrid className={cx('row')}>
    <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
    <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}><ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" /></Cell>
    <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
    <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
    <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
    <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
    <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
    <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
    <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
  </CellGrid>
  <CellGrid className={cx('row')}>
    <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
    <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
    <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
    <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
    <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}><ItemView.Display text="Acuity: 5" icon={<IconAttachment />} /></Cell>
    <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
    <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
    <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
    <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
  </CellGrid>
  <CellGrid className={cx('row')}>
    <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }} />
    <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
    <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
    <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
    <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
    <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
    <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
    <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
    <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
  </CellGrid>
  <CellGrid className={cx('row')}>
    <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
    <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
    <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
    <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}><ItemView.Display text="Room 100A" textStyle="strikeThrough" /></Cell>
    <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
    <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
    <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
    <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
    <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }}>{endAccessory}</Cell>
  </CellGrid>
  <CellGrid className={cx('row')}>
    <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
    <Cell className={cx('display')} key="cell-1" width={{ scalar: 1 }}>{display1}</Cell>
    <Cell className={cx('display')} key="cell-2" width={{ scalar: 1 }}>{display2}</Cell>
    <Cell className={cx('display')} key="cell-3" width={{ scalar: 1 }}>{display3}</Cell>
    <Cell className={cx('display')} key="cell-4" width={{ scalar: 1 }}>{display4}</Cell>
    <Cell className={cx('display')} key="cell-5" width={{ scalar: 1 }}>{display5}</Cell>
    <Cell className={cx('display')} key="cell-6" width={{ scalar: 1 }}>{display6}</Cell>
    <Cell className={cx('comment')} key="cell-7" width={{ scalar: 1 }}>{comment}</Cell>
    <Cell className={cx('end-accessory')} key="cell-8" width={{ static: { value: 40, unit: 'px' } }} />
  </CellGrid> */

const CustomItemCollection = (props) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  switch (activeBreakpoint) {
    case 'tiny':
    case 'small':
    case 'medium':
      return listDisplay;
    case 'large':
    case 'huge':
    case 'enormous':
    default:
      return cellGridDisplay;
  }
};

export default CustomItemCollection;
