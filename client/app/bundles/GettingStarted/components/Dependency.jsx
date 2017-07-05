import React from 'react';
import List from 'terra-list';
import Button from 'terra-button';
import Text from 'terra-text';

const Dependency = ({name, link, usage}) => {
  return (
      <List.Item content={
        <div>
          <Button variant={'link'} text={name} href={link}/>
          <Text>{usage}</Text>
        </div>
      }/>
    );
}

export default Dependency;



