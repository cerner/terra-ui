import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import ItemView from 'terra-clinical-item-view';
import classNames from 'classnames/bind';
import styles from '../ResponsiveListAndTableExample.scss';

const cx = classNames.bind(styles);

const display1 = <ItemView.Display icon={<IconPerson />} text="Asif Khan" />;
const display2 = <ItemView.Display text="Care Position: Primary" />;
const display3 = <ItemView.Display text="Room 100A" />;
const display4 = <ItemView.Display text="Acuity: 5" />;
const display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;
const display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;
const comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;
const startAccessory = <IconAlert />;
const endAccessory = <IconInformation />;

const mockData = [
  {
    key: 'row-0',
    toggleText: 'Toggle Power Row 0',
    discloseText: 'Power Row 0 - Details',
    primaryIndex: 1,
    cells: [
      { key: 'startAccessory', children: startAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center') } },
      { key: 'cell-1', children: <ItemView.Display icon={<IconPerson />} text="Asif Khan" textStyle="attention" />, attrs: { className: cx('content-display') } },
      { key: 'cell-2', children: display2, attrs: { className: cx('content-display') } },
      { key: 'cell-3', children: display3, attrs: { className: cx('content-display') } },
      { key: 'cell-4', children: display4, attrs: { className: cx('content-display') } },
      { key: 'cell-5', children: display5, attrs: { className: cx('content-display') } },
      { key: 'cell-6', children: display6, attrs: { className: cx('content-display') } },
      { key: 'comment', children: comment, attrs: { className: cx('content-comment') } },
      { key: 'endAccessory', children: endAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory') } },
    ],
  },
  {
    key: 'row-1',
    toggleText: 'Toggle Power Row 1',
    discloseText: 'Power Row 1 - Details',
    primaryIndex: 1,
    isStriped: true,
    cells: [
      { key: 'startAccessory', children: startAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center') } },
      { key: 'cell-1', children: display1, attrs: { className: cx('content-display') } },
      { key: 'cell-2', children: display2, attrs: { className: cx('content-display') } },
      { key: 'cell-3', children: display3, attrs: { className: cx('content-display') } },
      { key: 'cell-4', children: <ItemView.Display text="Acuity: 5" icon={<IconAttachment />} />, attrs: { className: cx('content-display') } },
      { key: 'cell-5', children: display5, attrs: { className: cx('content-display') } },
      { key: 'cell-6', children: display6, attrs: { className: cx('content-display') } },
      { key: 'comment', children: comment, attrs: { className: cx('content-comment') } },
      { key: 'endAccessory', children: endAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory') } },
    ],
    layout: 'twoColumns',
  },
  {
    key: 'row-2',
    toggleText: 'Toggle Power Row 2',
    discloseText: 'Power Row 2 - Details',
    primaryIndex: 1,
    cells: [
      { key: 'startAccessory', children: '', attrs: { className: cx('content-accessory', 'content-accessory-align-center') } },
      { key: 'cell-1', children: display1, attrs: { className: cx('content-display') } },
      { key: 'cell-2', children: display2, attrs: { className: cx('content-display') } },
      { key: 'cell-3', children: display3, attrs: { className: cx('content-display') } },
      { key: 'cell-4', children: display4, attrs: { className: cx('content-display') } },
      { key: 'cell-5', children: display5, attrs: { className: cx('content-display') } },
      { key: 'cell-6', children: display6, attrs: { className: cx('content-display') } },
      { key: 'comment', children: comment, attrs: { className: cx('content-comment') } },
      { key: 'endAccessory', children: endAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory') } },
    ],
  },
  {
    key: 'row-3',
    toggleText: 'Toggle Power Row 3',
    discloseText: 'Power Row 3 - Details',
    primaryIndex: 1,
    isStriped: true,
    cells: [
      { key: 'startAccessory', children: startAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center') } },
      { key: 'cell-1', children: display1, attrs: { className: cx('content-display') } },
      { key: 'cell-2', children: display2, attrs: { className: cx('content-display') } },
      { key: 'cell-3', children: <ItemView.Display text="Room 100A" textStyle="strikeThrough" />, attrs: { className: cx('content-display') } },
      { key: 'cell-4', children: display4, attrs: { className: cx('content-display') } },
      { key: 'cell-5', children: display5, attrs: { className: cx('content-display') } },
      { key: 'cell-6', children: display6, attrs: { className: cx('content-display') } },
      { key: 'comment', children: comment, attrs: { className: cx('content-comment') } },
      { key: 'endAccessory', children: endAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory') } },
    ],
    layout: 'twoColumns',
  },
  {
    key: 'row-4',
    toggleText: 'Toggle Power Row 4',
    discloseText: 'Power Row 4 - Details',
    primaryIndex: 1,
    cells: [
      { key: 'startAccessory', children: startAccessory, attrs: { className: cx('content-accessory', 'content-accessory-align-center') } },
      { key: 'cell-1', children: display1, attrs: { className: cx('content-display') } },
      { key: 'cell-2', children: display2, attrs: { className: cx('content-display') } },
      { key: 'cell-3', children: display3, attrs: { className: cx('content-display') } },
      { key: 'cell-4', children: display4, attrs: { className: cx('content-display') } },
      { key: 'cell-5', children: display5, attrs: { className: cx('content-display') } },
      { key: 'cell-6', children: display6, attrs: { className: cx('content-display') } },
      { key: 'comment', children: comment, attrs: { className: cx('content-comment') } },
      { key: 'endAccessory', children: '', attrs: { className: cx('content-accessory', 'content-accessory-align-center', 'content-end-accessory') } },
    ],
  },
];

export default mockData;
