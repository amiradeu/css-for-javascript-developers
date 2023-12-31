import styled from 'styled-components';

const Calendar = () => (
  <Wrapper>
    {DAYS.map((day) => (
      <Day key={day}>{day}</Day>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  border: 3px solid;
  padding: 16px;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  gap: 4px;
`;

const Day = styled.div`
  border: 2px solid;
  border-radius: 4px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30,
];

const App = () => (
	<Calendar></Calendar>
);

export default App;