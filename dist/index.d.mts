import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * datepicker 컴포넌트의 사이즈 타입
 */
type DatePickerSize = 'small' | 'medium' | 'large';
/**
 * datepicker 컴포넌트의 테마 타입
 */
type DatePickerTheme = 'primary' | 'secondary' | 'dark';
/**
 * datepicker 컴포넌트의 공통 props 타입
 */
interface DatePickerProps {
    'size'?: DatePickerSize;
    'theme'?: DatePickerTheme;
    /** 추가 CSS 클래스명 */
    'className'?: string;
}

declare const DatePicker: (DatePickerProps: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { DatePicker };
