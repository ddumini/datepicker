import './styles.css'
import { Button, ChevronArrowIcon } from './components';
import { Container } from './components/container/Container';
import type { DatePickerProps } from './type';

export const DatePicker = (DatePickerProps: DatePickerProps) => {
  return (
    <Container theme={DatePickerProps.theme}>
      <div className='flex justify-between items-center'>
        <Button size={DatePickerProps.size}>
          <ChevronArrowIcon direction='left' />
        </Button>
        <div>
          <p>Sept 2025</p>
        </div>
        <Button size={DatePickerProps.size}>
          <ChevronArrowIcon direction='right' />
        </Button>
      </div>
      <ul className='grid grid-cols-7 gap-2'>
        {Array.from({ length: 31 }, (_, index) => (
          <li key={index} className='flex justify-center items-center'>
            <Button size={DatePickerProps.size}>
              <p>{index + 1}</p>
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};