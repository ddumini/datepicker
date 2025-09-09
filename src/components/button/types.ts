import React from 'react';

/**
 * Button 컴포넌트의 state 타입
 */
export type ButtonState = 'default' | 'disabled' | 'selected' | 'focus';

/**
 * Button 컴포넌트의 size 타입
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button 컴포넌트의 props 타입 정의
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 스타일 state */
  state?: ButtonState;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 로딩 상태 */
  loading?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
