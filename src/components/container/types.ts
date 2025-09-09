import React from 'react';

/**
 * 컨테이너 컴포넌트의 테마 타입
 */
export type ContainerTheme = 'primary' | 'secondary' | 'dark';

/**
 * 기본 컨테이너 컴포넌트의 공통 props 타입
 */
export interface ContainerProps {
  /** 컨테이너의 테마 */
  theme?: ContainerTheme;
  /** 컨테이너의 추가 CSS 클래스명 */
  className?: string;
  /** 컨테이너의 내용 */
  children: React.ReactNode;
}
