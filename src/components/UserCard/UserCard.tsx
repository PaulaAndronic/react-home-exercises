import React from 'react';
import { StyledUserCard } from './styles';

interface Props {
  image: string;
  firstName: string;
  lastName: string;
}

const UserCard: React.FC<Props> = ({ image, firstName, lastName }) => {
  return (
    <StyledUserCard>
      <img src={image} alt="User" width={200} height={200} />
      <p>{`${firstName} ${lastName}`}</p>
    </StyledUserCard>
  );
};

export default UserCard;