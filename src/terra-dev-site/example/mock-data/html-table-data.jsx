import React from 'react';
import classNames from 'classnames/bind';
import styles from '../ResponsiveListAndTableExample.scss';

const cx = classNames.bind(styles);

const mockData = [
  {
    key: 'header-row',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'Date' },
      { key: 'cell-1', className: 'cell', children: 'Chrome' },
      { key: 'cell-2', className: 'cell', children: 'Firefox' },
      { key: 'cell-3', className: 'cell', children: 'Safari' },
      { key: 'cell-4', className: 'cell', children: 'Internet Explorer' },
      { key: 'cell-5', className: 'cell', children: 'Edge' },
      { key: 'cell-6', className: 'cell', children: 'Other' },
      { key: 'cell-7', className: 'cell', children: 'Mobile' },
    ],
  },
  {
    key: 'row-1',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'October 2019' },
      { key: 'cell-1', className: 'cell', children: '68.91%' },
      { key: 'cell-2', className: 'cell', children: '9.25%' },
      { key: 'cell-3', className: 'cell', children: '8.68%' },
      { key: 'cell-4', className: 'cell', children: '4.45%' },
      { key: 'cell-5', className: 'cell', children: '4.51%' },
      { key: 'cell-6', className: 'cell', children: '4.20%' },
      { key: 'cell-7', className: 'cell', children: '54.07%' },
    ],
  },
  {
    key: 'row-2',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'September 2019' },
      { key: 'cell-1', className: 'cell', children: '69.08%' },
      { key: 'cell-2', className: 'cell', children: '9.54%' },
      { key: 'cell-3', className: 'cell', children: '7.41%' },
      { key: 'cell-4', className: 'cell', children: '4.99%' },
      { key: 'cell-5', className: 'cell', children: '4.71%' },
      { key: 'cell-6', className: 'cell', children: '4.27%' },
      { key: 'cell-7', className: 'cell', children: '53.75%' },
    ],
  },
  {
    key: 'row-3',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'August 2019' },
      { key: 'cell-1', className: 'cell', children: '71.15%' },
      { key: 'cell-2', className: 'cell', children: '9.52%' },
      { key: 'cell-3', className: 'cell', children: '5.80%' },
      { key: 'cell-4', className: 'cell', children: '4.40%' },
      { key: 'cell-5', className: 'cell', children: '4.71%' },
      { key: 'cell-6', className: 'cell', children: '4.43%' },
      { key: 'cell-7', className: 'cell', children: '53.66%' },
    ],
  },
  {
    key: 'row-4',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'July 2019' },
      { key: 'cell-1', className: 'cell', children: '71.05%' },
      { key: 'cell-2', className: 'cell', children: '9.52%' },
      { key: 'cell-3', className: 'cell', children: '5.41%' },
      { key: 'cell-4', className: 'cell', children: '5.00%' },
      { key: 'cell-5', className: 'cell', children: '4.60%' },
      { key: 'cell-6', className: 'cell', children: '4.41%' },
      { key: 'cell-7', className: 'cell', children: '53.08%' },
    ],
  },
  {
    key: 'row-5',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'June 2019' },
      { key: 'cell-1', className: 'cell', children: '70.71%' },
      { key: 'cell-2', className: 'cell', children: '9.76%' },
      { key: 'cell-3', className: 'cell', children: '5.64%' },
      { key: 'cell-4', className: 'cell', children: '5.03%' },
      { key: 'cell-5', className: 'cell', children: '4.50%' },
      { key: 'cell-6', className: 'cell', children: '4.36%' },
      { key: 'cell-7', className: 'cell', children: '52.69%' },
    ],
  },
  {
    key: 'row-6',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'May 2019' },
      { key: 'cell-1', className: 'cell', children: '69.09%' },
      { key: 'cell-2', className: 'cell', children: '10.01%' },
      { key: 'cell-3', className: 'cell', children: '7.25%' },
      { key: 'cell-4', className: 'cell', children: '5.14%' },
      { key: 'cell-5', className: 'cell', children: '4.32%' },
      { key: 'cell-6', className: 'cell', children: '4.21%' },
      { key: 'cell-7', className: 'cell', children: '49.40%' },
    ],
  },
  {
    key: 'row-7',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'April 2019' },
      { key: 'cell-1', className: 'cell', children: '69.55%' },
      { key: 'cell-2', className: 'cell', children: '9.78%' },
      { key: 'cell-3', className: 'cell', children: '6.91%' },
      { key: 'cell-4', className: 'cell', children: '5.16%' },
      { key: 'cell-5', className: 'cell', children: '4.37%' },
      { key: 'cell-6', className: 'cell', children: '4.23%' },
      { key: 'cell-7', className: 'cell', children: '50.27%' },
    ],
  },
  {
    key: 'row-8',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'March 2019' },
      { key: 'cell-1', className: 'cell', children: '69.52%' },
      { key: 'cell-2', className: 'cell', children: '9.58%' },
      { key: 'cell-3', className: 'cell', children: '6.46%' },
      { key: 'cell-4', className: 'cell', children: '5.44%' },
      { key: 'cell-5', className: 'cell', children: '4.56%' },
      { key: 'cell-6', className: 'cell', children: '4.44%' },
      { key: 'cell-7', className: 'cell', children: '51.01%' },
    ],
  },
  {
    key: 'row-9',
    cells: [
      { key: 'cell-date', className: 'cell-date', children: 'February 2019' },
      { key: 'cell-1', className: 'cell', children: '71.58%' },
      { key: 'cell-2', className: 'cell', children: '8.72%' },
      { key: 'cell-3', className: 'cell', children: '5.77%' },
      { key: 'cell-4', className: 'cell', children: '5.34%' },
      { key: 'cell-5', className: 'cell', children: '4.34%' },
      { key: 'cell-6', className: 'cell', children: '4.24%' },
      { key: 'cell-7', className: 'cell', children: '49.87%' },
    ],
  },
];

export default mockData;
