import React, { useEffect, useState } from 'react';
import { User } from '../../pages/types';
import UserCard from '../UserCard/UserCard';
import { Button } from '../Button/Button';
import { connect } from 'react-redux';
import { StyledButtonsContainer } from './styles';

interface Props {
  users: User[];
  error: string | null;
  loading: boolean;
}

const UserCardSlider: React.FC<Props> = ({ users, error, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlideshowRunning, setIsSlideshowRunning] = useState(false);

  const handleStartClick = () => {
    setIsSlideshowRunning(true);
  };

  const handleStopClick = () => {
    setIsSlideshowRunning(false);
  };

  useEffect(() => {
    let slideshowInterval: NodeJS.Timeout;

    if (isSlideshowRunning) {
      slideshowInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }, 2000);
    }

    return () => clearInterval(slideshowInterval);
  }, [isSlideshowRunning, users]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {users!.map((user, index) => (
        index === currentIndex && (
          <UserCard
            key={index}
            image={user.picture.large}
            firstName={user.name.first}
            lastName={user.name.last}
          />
        )
      ))}
      {users.length > 0 &&
        <StyledButtonsContainer>
          <Button onClick={handleStartClick} ariaLabel='Start' variant='primary'>
            Start Slider
          </Button>
          <Button onClick={handleStopClick} ariaLabel='Stop' variant='primary'>
            Stop Slider
          </Button>
        </StyledButtonsContainer>
      }
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.users,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(UserCardSlider);
