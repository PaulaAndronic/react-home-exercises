import { LeftSection, PageWrapper, RightSection } from "./styles";
import UserCardSlider from "../components/UserCardSlider/UserCardSlider";
import Input from "../components/Input/Input";
import image from "../images/findUser.png"
import { useState } from "react";
import { useTheme } from "styled-components";

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const theme = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = event.target.value;

    if (parseInt(inputNumber) <= 0) {
      setErrorMessage('Add a number greater than 0')
      console.log('aaaaa');
    } else {
      setInputValue(event.target.value);
      setErrorMessage('');
    }
  };

  return (
    <PageWrapper>
      <LeftSection>
        <h2>Finding Users App</h2>
        <Input value={inputValue} onChange={handleInputChange} />
        {errorMessage
          ? <p style={{ color: theme.colors.accent }}>{errorMessage}</p>
          : <UserCardSlider />}
      </LeftSection>
      <RightSection>
        <img src={image} alt="Finding users" />
      </RightSection>
    </PageWrapper>
  );
};
