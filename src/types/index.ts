import type { HTMLAttributes, CSSProperties, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

// Re-export common prop types for reusability
export type { CSSProperties, ReactNode };

// ==================== BUTTON ====================
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

// ==================== INPUT ====================
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// ==================== TEXTAREA ====================
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

// ==================== SELECT ====================
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  error?: string;
}

// ==================== DATA TABLE ====================
export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, row: Record<string, unknown>) => ReactNode;
}

export interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  selectedId?: string;
  sortable?: boolean;
  emptyMessage?: string;
}

// ==================== STATUS BADGE ====================
export type StatusType = 'active' | 'leave' | 'training' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface StatusBadgeProps {
  status: StatusType;
}

// ==================== BADGE ====================
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

// ==================== CARD ====================
export interface CardProps {
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
}

// ==================== DRAWER ====================
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

// ==================== MODAL ====================
export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children?: ReactNode;
  footer?: ReactNode;
}

// ==================== TOAST ====================
export interface ToastProps {
  message: string | null;
  type?: 'success' | 'warning' | 'danger' | 'info';
  onClose: () => void;
}

// ==================== NAV ====================
export interface NavItemProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface NavSectionProps {
  label?: string;
  children: ReactNode;
}

export interface NavDividerProps {}

export interface NavProps {
  children: ReactNode;
}

// ==================== HEADER ====================
export interface HeaderProps {
  brand?: string;
  classification?: string;
  date?: string;
  time?: string;
}

// ==================== FOOTER ====================
export interface FooterProps {
  status?: string;
  count?: string;
  children?: ReactNode;
}

// ==================== STAT CARD ====================
export interface StatCardProps {
  label: string;
  value: number;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

// ==================== FORM ====================
export interface FormGroupProps {
  children: ReactNode;
}

export interface FormProps {
  children: ReactNode;
}

// ==================== TABS ====================
export interface Tab {
  label: string;
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

// ==================== DATE PICKER ====================
export interface DatePickerProps {
  label?: string;
  value?: string | null;
  onChange?: (date: string | null) => void;
  placeholder?: string;
}

// ==================== TOGGLE ====================
export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

// ==================== CHECKBOX ====================
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

// ==================== PAGINATION ====================
export interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
  pageSize?: number;
}

// ==================== TOOLTIP ====================
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: ReactNode;
}

// ==================== SPINNER ====================
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// ==================== ALERT ====================
export interface AlertProps {
  type?: 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  message?: string;
}

// ==================== PROGRESS BAR ====================
export interface ProgressBarProps {
  value: number;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  label?: string;
}

// ==================== DROPDOWN ====================
export interface DropdownItem {
  label: string;
  value?: string;
  danger?: boolean;
  divider?: boolean;
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
}

// ==================== EMPTY STATE ====================
export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
}

// ==================== AVATAR ====================
export interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

// ==================== SKELETON ====================
export interface SkeletonProps {
  variant?: 'text' | 'title' | 'circle' | 'box';
  width?: string;
  height?: string;
}