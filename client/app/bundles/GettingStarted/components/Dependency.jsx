import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import List from 'terra-list';
import Button from 'terra-button';
import Text from 'terra-text';
/* eslint-enable import/no-extraneous-dependencies */

const Dependency = ({ name, link, usage }) => (
  <List.Item content={
    <div>
      <Button variant={'link'} text={name} href={link} />
      <Text>{usage}</Text>
    </div>
      }
  />
);

Dependency.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  usage: PropTypes.string,
};

export default Dependency;

