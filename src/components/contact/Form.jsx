import React, {useState} from 'react'
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 80%;
  
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  
`;
const StyledButton = styled.button`
  display: block;
  background-color: #bbbbbb;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  
`;



const StyledError = styled.span`
  color: #a3bb9a;
  font-weight: 500;
  
`;
const StyledSpace = styled.div`
  height: 25px;
`

const initalState = {
  namn: '',
  email: '',
  meddelande: ''
};

function Form() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
 

    for (let key in state) {
      if (state[key] === '') {
        setError(`Du måste fylla i ${key}`)
        return
      }
    }
    setError('');

  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
  
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Kontakta Oss</h2>
          <label htmlFor="meddelande">Namn:</label>
          <StyledInput
            type="text"
            name="namn"
            value={state.namn}
            onChange={handleInput}
          />
          <label htmlFor="email">E-mail:</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="meddelande">Meddelande</label>
          <StyledTextArea
            name="meddelande"
            value={state.meddelande}
            onChange={handleInput}
          />
          <StyledSpace>
          {error ? 
              <StyledError>
                {error}
              </StyledError>
            :
            <StyledError></StyledError>
            }
          </StyledSpace>
          <StyledButton type="submit">Skicka</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}
export default Form;