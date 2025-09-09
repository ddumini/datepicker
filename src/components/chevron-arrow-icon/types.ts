/**
 * 아이콘 컴포넌트의 방향 타입
 */
export type IconDirection = 'left' | 'right' | 'up' | 'down';

/**
 * 기본 아이콘 컴포넌트의 공통 props 타입
 */
export interface ChevronArrowIconProps {
  /** 아이콘의 크기 (width와 height에 동일하게 적용) */
  'size'?: number;
  /** 아이콘의 색상 */
  'color'?: string;
  /** 아이콘의 방향 */
  'direction'?: IconDirection;
  /** 추가 CSS 클래스명 */
  'className'?: string;
  /** 클릭 이벤트 핸들러 */
  'onClick'?: () => void;
  /** 접근성을 위한 aria-label */
  'aria-label'?: string;
}
