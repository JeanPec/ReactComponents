import React from 'react';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FlexContainer, Main } from '../../components';

export const ButtonPage = () => {
  return (
    <Main centered>
      <FlexContainer>
        <Button iconBefore={<FontAwesomeIcon icon={faHouse} />}>Click Me</Button>
        <Button magic>Magic</Button>
        <Button disabled>Click Me</Button>
      </FlexContainer>
    </Main>
  );
}
