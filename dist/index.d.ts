import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_aria_components from 'react-aria-components';
import { ButtonProps, ComboBoxProps, ListBoxItemProps, CheckboxProps, DatePickerProps, DateRangePickerProps, TextFieldProps, RadioGroupProps, RadioProps, SelectProps, SliderProps, SwitchProps, TimeFieldProps, ModalOverlayProps, DialogProps, PopoverProps, DialogTrigger, TooltipProps, BreadcrumbsProps, LinkProps, MenuTriggerProps, MenuProps, MenuItemProps, TabsProps, TabListProps, TabProps, TabPanelProps, DisclosureProps, TagGroupProps, TagProps, SeparatorProps, ListBoxProps, TableProps, TableHeaderProps, ColumnProps, TableBodyProps, RowProps, CellProps, ProgressBarProps } from 'react-aria-components';
import * as react from 'react';
import react__default, { HTMLAttributes, JSX } from 'react';

interface BaseButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    onHover?: () => void;
    onFocus?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    isLoading?: boolean;
}

declare const ButtonComponent: (props: BaseButtonProps) => react_jsx_runtime.JSX.Element;

interface BaseButtonGroupProps {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    orientation?: 'horizontal' | 'vertical';
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
}
interface ButtonGroupItemProps extends ButtonProps {
    children: React.ReactNode;
}

declare const ButtonGroupComponent: (props: BaseButtonGroupProps) => react_jsx_runtime.JSX.Element;
declare const ButtonGroupItem: (props: ButtonGroupItemProps) => react_jsx_runtime.JSX.Element;

interface BaseAutocompleteProps<T extends object> extends ComboBoxProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
interface BaseAutocompleteItemProps extends ListBoxItemProps {
    children: React.ReactNode;
    className?: string;
}

declare const AutocompleteComponent: <T extends object>(props: BaseAutocompleteProps<T>) => react_jsx_runtime.JSX.Element;
declare const AutocompleteItemComponent: (props: BaseAutocompleteItemProps) => react_jsx_runtime.JSX.Element;

interface BaseCheckboxProps extends Omit<CheckboxProps, 'className'> {
    children?: React.ReactNode;
    isIndeterminate?: boolean;
    className?: string;
}

declare const CheckboxComponent: (props: BaseCheckboxProps) => react_jsx_runtime.JSX.Element;

interface BaseDatePickerProps extends Omit<DatePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}

declare const DatePickerComponent: (props: BaseDatePickerProps) => react_jsx_runtime.JSX.Element;

interface BaseDateRangePickerProps extends Omit<DateRangePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}

declare const DateRangePickerComponent: (props: BaseDateRangePickerProps) => react_jsx_runtime.JSX.Element;

interface BaseDateTimePickerProps extends Omit<DatePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}

declare const DateTimePickerComponent: (props: BaseDateTimePickerProps) => react_jsx_runtime.JSX.Element;

interface BaseInputGroupProps {
    children: React.ReactNode;
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    className?: string;
}
interface InputGroupFieldProps extends Omit<TextFieldProps, 'children'> {
    placeholder?: string;
}

declare const InputGroupComponent: (props: BaseInputGroupProps) => react_jsx_runtime.JSX.Element;
declare const InputGroupField: (props: InputGroupFieldProps) => react_jsx_runtime.JSX.Element;

interface BaseRadioGroupProps extends Omit<RadioGroupProps, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    children: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}
interface BaseRadioProps extends Omit<RadioProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const RadioGroupComponent: (props: BaseRadioGroupProps) => react_jsx_runtime.JSX.Element;
declare const RadioComponent: (props: BaseRadioProps) => react_jsx_runtime.JSX.Element;

interface BaseRatingProps extends Omit<RadioGroupProps, 'children'> {
    max?: number;
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'secondary' | 'warning';
    readOnly?: boolean;
    precision?: number;
    emptyIcon?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

declare const RatingComponent: (props: BaseRatingProps) => react_jsx_runtime.JSX.Element;

interface BaseSelectProps<T extends object> extends Omit<SelectProps<T>, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
}
interface BaseSelectItemProps extends Omit<ListBoxItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const SelectComponent: <T extends object>(props: BaseSelectProps<T>) => react_jsx_runtime.JSX.Element;
declare const SelectItemComponent: (props: BaseSelectItemProps) => react_jsx_runtime.JSX.Element;

interface BaseSliderProps<T = number | number[]> extends Omit<SliderProps<T>, 'className'> {
    label?: string;
    className?: string;
}

declare const SliderComponent: <T extends number | number[]>(props: BaseSliderProps<T>) => react_jsx_runtime.JSX.Element;

interface BaseSwitchProps extends Omit<SwitchProps, 'className'> {
    children?: React.ReactNode;
    className?: string;
}

declare const SwitchComponent: (props: BaseSwitchProps) => react_jsx_runtime.JSX.Element;

interface BaseTextFieldProps extends Omit<TextFieldProps, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
    fullWidth?: boolean;
    className?: string;
}

declare const TextFieldComponent: (props: BaseTextFieldProps) => react_jsx_runtime.JSX.Element;

interface BaseTimeFieldProps extends Omit<TimeFieldProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}

declare const TimeFieldComponent: (props: BaseTimeFieldProps) => react_jsx_runtime.JSX.Element;

interface BaseModalProps extends Omit<ModalOverlayProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseDialogProps extends Omit<DialogProps, 'className'> {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

declare const ModalComponent: (props: BaseModalProps) => react_jsx_runtime.JSX.Element;
declare const DialogComponent: (props: BaseDialogProps) => react_jsx_runtime.JSX.Element;

interface BasePopoverProps extends Omit<PopoverProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BasePopoverDialogProps extends Omit<DialogProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const PopoverTriggerComponent: typeof DialogTrigger;
declare const PopoverComponent: (props: BasePopoverProps) => react_jsx_runtime.JSX.Element;
declare const PopoverDialogComponent: (props: BasePopoverDialogProps) => react_jsx_runtime.JSX.Element;
declare const PopoverButtonComponent: (props: {
    children: React.ReactNode;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

interface BaseTooltipTriggerProps {
    children: React.ReactNode;
    delay?: number;
    closeDelay?: number;
}
interface BaseTooltipProps extends Omit<TooltipProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const TooltipTriggerComponent: (props: BaseTooltipTriggerProps) => react_jsx_runtime.JSX.Element;
declare const TooltipComponent: (props: BaseTooltipProps) => react_jsx_runtime.JSX.Element;
declare const TooltipButtonComponent: (props: {
    children: React.ReactNode;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

interface BaseBreadcrumbsProps<T> extends Omit<BreadcrumbsProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const BreadcrumbsComponent: <T extends object>(props: BaseBreadcrumbsProps<T>) => react_jsx_runtime.JSX.Element;
declare const BreadcrumbComponent: (props: react_aria_components.BreadcrumbProps & React.RefAttributes<object>) => React.ReactElement | null;
declare const BreadcrumbLinkComponent: (props: react_aria_components.LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;

type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
interface BaseDrawerProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    anchor?: DrawerAnchor;
    children: React.ReactNode;
    className?: string;
}

declare const DrawerComponent: (props: BaseDrawerProps) => react_jsx_runtime.JSX.Element | null;

interface BaseLinkProps extends Omit<LinkProps, 'className'> {
    children: React.ReactNode;
    variant?: 'default' | 'button';
    color?: 'primary' | 'secondary' | 'inherit';
    underline?: 'none' | 'hover' | 'always';
    className?: string;
}

declare const LinkComponent: (props: BaseLinkProps) => react_jsx_runtime.JSX.Element;

interface BaseMenuTriggerProps extends MenuTriggerProps {
    children: React.ReactNode;
}
interface BaseMenuProps<T> extends Omit<MenuProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseMenuItemProps extends Omit<MenuItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const MenuTriggerComponent: (props: BaseMenuTriggerProps) => react_jsx_runtime.JSX.Element;
declare const MenuButtonComponent: (props: {
    children: React.ReactNode;
    className?: string;
}) => react_jsx_runtime.JSX.Element;
declare const MenuComponent: <T extends object>(props: BaseMenuProps<T>) => react_jsx_runtime.JSX.Element;
declare const MenuItemComponent: (props: BaseMenuItemProps) => react_jsx_runtime.JSX.Element;
declare const MenuSeparatorComponent: () => react_jsx_runtime.JSX.Element;

interface BasePaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    count: number;
    page: number;
    onChange: (page: number) => void;
    siblingCount?: number;
    boundaryCount?: number;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    disabled?: boolean;
    className?: string;
}

declare const PaginationComponent: (props: BasePaginationProps) => react_jsx_runtime.JSX.Element;

interface SpeedDialAction {
    id: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}
interface BaseSpeedDialProps {
    actions: SpeedDialAction[];
    direction?: 'up' | 'down' | 'left' | 'right';
    icon?: React.ReactNode;
    openIcon?: React.ReactNode;
    className?: string;
}

declare const SpeedDialComponent: (props: BaseSpeedDialProps) => react_jsx_runtime.JSX.Element;

interface BaseStepperProps extends HTMLAttributes<HTMLDivElement> {
    activeStep: number;
    steps: Array<{
        label: string;
        description?: string;
        optional?: boolean;
    }>;
    orientation?: 'horizontal' | 'vertical';
    alternativeLabel?: boolean;
    className?: string;
}

declare const StepperComponent: (props: BaseStepperProps) => react_jsx_runtime.JSX.Element;

interface BaseTabsProps extends Omit<TabsProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseTabListProps<T> extends Omit<TabListProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseTabProps extends Omit<TabProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseTabPanelProps extends Omit<TabPanelProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const TabsComponent: (props: BaseTabsProps) => react_jsx_runtime.JSX.Element;
declare const TabListComponent: <T extends object>(props: BaseTabListProps<T>) => react_jsx_runtime.JSX.Element;
declare const TabComponent: (props: BaseTabProps) => react_jsx_runtime.JSX.Element;
declare const TabPanelComponent: (props: BaseTabPanelProps) => react_jsx_runtime.JSX.Element;

interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
    icon?: React.ReactNode;
}
interface BaseTreeViewProps {
    data: TreeNode[];
    defaultExpandedKeys?: string[];
    selectedKey?: string;
    onSelectionChange?: (key: string) => void;
    className?: string;
}
interface BaseTreeItemProps {
    node: TreeNode;
    level: number;
    expandedKeys: Set<string>;
    selectedKey?: string;
    onToggle: (key: string) => void;
    onSelect: (key: string) => void;
}

declare const TreeViewComponent: (props: BaseTreeViewProps) => react_jsx_runtime.JSX.Element;

interface BaseAccordionItemProps extends DisclosureProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}
interface BaseAccordionProps {
    children: React.ReactNode;
    className?: string;
    allowMultiple?: boolean;
}

declare const AccordionComponent: (props: BaseAccordionProps) => react_jsx_runtime.JSX.Element;
declare const AccordionItemComponent: (props: BaseAccordionItemProps) => react_jsx_runtime.JSX.Element;

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
type AvatarVariant = 'circular' | 'rounded' | 'square';
interface BaseAvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    variant?: AvatarVariant;
    children?: React.ReactNode;
    className?: string;
}

declare const AvatarComponent: (props: BaseAvatarProps) => react_jsx_runtime.JSX.Element;

type BadgeVariant = 'standard' | 'dot';
type BadgeColor = 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
interface BaseBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    badgeContent?: React.ReactNode;
    variant?: BadgeVariant;
    color?: BadgeColor;
    position?: BadgePosition;
    max?: number;
    showZero?: boolean;
    invisible?: boolean;
    className?: string;
}

declare const BadgeComponent: (props: BaseBadgeProps) => react_jsx_runtime.JSX.Element;

interface BaseChipGroupProps<T> extends Omit<TagGroupProps, 'className'> {
    children: React.ReactNode;
    label?: string;
    className?: string;
}
interface BaseChipProps extends Omit<TagProps, 'className'> {
    children: React.ReactNode;
    variant?: 'filled' | 'outlined';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    size?: 'small' | 'medium';
    onDelete?: () => void;
    className?: string;
}

declare const ChipGroupComponent: <T extends object>(props: BaseChipGroupProps<T>) => react_jsx_runtime.JSX.Element;
declare const ChipComponent: (props: BaseChipProps) => react_jsx_runtime.JSX.Element;

interface BaseDividerProps extends Omit<SeparatorProps, 'className'> {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'fullWidth' | 'inset' | 'middle';
    className?: string;
}

declare const DividerComponent: (props: BaseDividerProps) => react_jsx_runtime.JSX.Element;

interface BaseImageListProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    cols?: number;
    gap?: number;
    rowHeight?: number | 'auto';
    variant?: 'standard' | 'quilted' | 'masonry';
    className?: string;
}
interface ImageListItemProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    cols?: number;
    rows?: number;
    className?: string;
}

declare const ImageListComponent: (props: BaseImageListProps) => react_jsx_runtime.JSX.Element;
declare const ImageListItem: (props: ImageListItemProps) => react_jsx_runtime.JSX.Element;

interface BaseListBoxProps<T> extends Omit<ListBoxProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseListBoxItemProps extends Omit<ListBoxItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const ListBoxComponent: <T extends object>(props: BaseListBoxProps<T>) => react_jsx_runtime.JSX.Element;
declare const ListBoxItemComponent: (props: BaseListBoxItemProps) => react_jsx_runtime.JSX.Element;
declare const ListBoxTextComponent: (props: {
    children: React.ReactNode;
    slot?: string;
}) => react_jsx_runtime.JSX.Element;

interface BaseTableProps extends Omit<TableProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseTableHeaderProps<T> extends Omit<TableHeaderProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseColumnProps extends Omit<ColumnProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseTableBodyProps<T> extends Omit<TableBodyProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseRowProps<T> extends Omit<RowProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
interface BaseCellProps extends Omit<CellProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

declare const TableComponent: (props: BaseTableProps) => react_jsx_runtime.JSX.Element;
declare const TableHeaderComponent: <T extends object>(props: BaseTableHeaderProps<T>) => react_jsx_runtime.JSX.Element;
declare const ColumnComponent: (props: BaseColumnProps) => react_jsx_runtime.JSX.Element;
declare const TableBodyComponent: <T extends object>(props: BaseTableBodyProps<T>) => react_jsx_runtime.JSX.Element;
declare const RowComponent: <T extends object>(props: BaseRowProps<T>) => react_jsx_runtime.JSX.Element;
declare const CellComponent: (props: BaseCellProps) => react_jsx_runtime.JSX.Element;

interface TimelineItem {
    title: string;
    description?: string;
    time?: string;
    icon?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}
interface BaseTimelineProps extends HTMLAttributes<HTMLDivElement> {
    items: TimelineItem[];
    position?: 'left' | 'right' | 'alternate';
    className?: string;
}

declare const TimelineComponent: (props: BaseTimelineProps) => react_jsx_runtime.JSX.Element;

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
type TypographyColor = 'primary' | 'secondary' | 'text' | 'error' | 'success' | 'warning' | 'info';
interface BaseTypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    variant?: TypographyVariant;
    component?: react__default.ElementType;
    align?: TypographyAlign;
    color?: TypographyColor;
    noWrap?: boolean;
    gutterBottom?: boolean;
    children: react__default.ReactNode;
    className?: string;
}

declare const TypographyComponent: (props: BaseTypographyProps) => react.ReactElement<any, string | react.JSXElementConstructor<any>>;

interface BaseBoxProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    component?: keyof JSX.IntrinsicElements;
    className?: string;
}

declare const BoxComponent: (props: BaseBoxProps) => react.ReactElement<any, string | react.JSXElementConstructor<any>>;

interface BaseContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    disableGutters?: boolean;
    className?: string;
}

declare const ContainerComponent: (props: BaseContainerProps) => react_jsx_runtime.JSX.Element;

type GridJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
type GridAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
interface BaseGridProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    container?: boolean;
    item?: boolean;
    spacing?: number;
    columns?: number;
    justify?: GridJustify;
    alignItems?: GridAlign;
    className?: string;
}

declare const GridComponent: (props: BaseGridProps) => react_jsx_runtime.JSX.Element;

type PaperElevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
interface BasePaperProps extends HTMLAttributes<HTMLDivElement> {
    elevation?: PaperElevation;
    variant?: 'elevation' | 'outlined';
    square?: boolean;
    children: React.ReactNode;
    className?: string;
}

declare const PaperComponent: (props: BasePaperProps) => react_jsx_runtime.JSX.Element;

type AlertSeverity = 'success' | 'info' | 'warning' | 'error';
type AlertVariant = 'standard' | 'filled' | 'outlined';
interface BaseAlertProps extends HTMLAttributes<HTMLDivElement> {
    severity?: AlertSeverity;
    variant?: AlertVariant;
    title?: string;
    onClose?: () => void;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

declare const AlertComponent: (props: BaseAlertProps) => react_jsx_runtime.JSX.Element;

interface BaseBackdropProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    invisible?: boolean;
    onClose?: () => void;
    className?: string;
}

declare const BackdropComponent: (props: BaseBackdropProps) => react_jsx_runtime.JSX.Element | null;

interface BaseProgressProps extends Omit<ProgressBarProps, 'className'> {
    variant?: 'linear' | 'circular';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    showValue?: boolean;
    label?: string;
    className?: string;
}

declare const ProgressComponent: (props: BaseProgressProps) => react_jsx_runtime.JSX.Element;

type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
type SkeletonAnimation = 'pulse' | 'wave' | false;
interface BaseSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    width?: string | number;
    height?: string | number;
    className?: string;
}

declare const SkeletonComponent: (props: BaseSkeletonProps) => react_jsx_runtime.JSX.Element;

type SnackbarPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error';
interface BaseSnackbarProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    message: string;
    position?: SnackbarPosition;
    severity?: SnackbarSeverity;
    autoHideDuration?: number;
    onClose?: () => void;
    action?: React.ReactNode;
    className?: string;
}

declare const SnackbarComponent: (props: BaseSnackbarProps) => react_jsx_runtime.JSX.Element | null;

export { AccordionComponent, AccordionItemComponent, AlertComponent, type AlertSeverity, type AlertVariant, AutocompleteComponent, AutocompleteItemComponent, AvatarComponent, type AvatarSize, type AvatarVariant, BackdropComponent, type BadgeColor, BadgeComponent, type BadgePosition, type BadgeVariant, type BaseAccordionItemProps, type BaseAccordionProps, type BaseAlertProps, type BaseAutocompleteItemProps, type BaseAutocompleteProps, type BaseAvatarProps, type BaseBackdropProps, type BaseBadgeProps, type BaseBoxProps, type BaseBreadcrumbsProps, type BaseButtonGroupProps, type BaseButtonProps, type BaseCellProps, type BaseCheckboxProps, type BaseChipGroupProps, type BaseChipProps, type BaseColumnProps, type BaseContainerProps, type BaseDatePickerProps, type BaseDateRangePickerProps, type BaseDateTimePickerProps, type BaseDialogProps, type BaseDividerProps, type BaseDrawerProps, type BaseGridProps, type BaseImageListProps, type BaseInputGroupProps, type BaseLinkProps, type BaseListBoxItemProps, type BaseListBoxProps, type BaseMenuItemProps, type BaseMenuProps, type BaseMenuTriggerProps, type BaseModalProps, type BasePaginationProps, type BasePaperProps, type BasePopoverDialogProps, type BasePopoverProps, type BaseProgressProps, type BaseRadioGroupProps, type BaseRadioProps, type BaseRatingProps, type BaseRowProps, type BaseSelectItemProps, type BaseSelectProps, type BaseSkeletonProps, type BaseSliderProps, type BaseSnackbarProps, type BaseSpeedDialProps, type BaseStepperProps, type BaseSwitchProps, type BaseTabListProps, type BaseTabPanelProps, type BaseTabProps, type BaseTableBodyProps, type BaseTableHeaderProps, type BaseTableProps, type BaseTabsProps, type BaseTextFieldProps, type BaseTimeFieldProps, type BaseTimelineProps, type BaseTooltipProps, type BaseTooltipTriggerProps, type BaseTreeItemProps, type BaseTreeViewProps, type BaseTypographyProps, BoxComponent, BreadcrumbComponent, BreadcrumbLinkComponent, BreadcrumbsComponent, ButtonComponent, ButtonGroupComponent, ButtonGroupItem, type ButtonGroupItemProps, CellComponent, CheckboxComponent, ChipComponent, ChipGroupComponent, ColumnComponent, ContainerComponent, DatePickerComponent, DateRangePickerComponent, DateTimePickerComponent, DialogComponent, DividerComponent, type DrawerAnchor, DrawerComponent, type GridAlign, GridComponent, type GridJustify, ImageListComponent, ImageListItem, type ImageListItemProps, InputGroupComponent, InputGroupField, type InputGroupFieldProps, LinkComponent, ListBoxComponent, ListBoxItemComponent, ListBoxTextComponent, MenuButtonComponent, MenuComponent, MenuItemComponent, MenuSeparatorComponent, MenuTriggerComponent, ModalComponent, PaginationComponent, PaperComponent, type PaperElevation, PopoverButtonComponent, PopoverComponent, PopoverDialogComponent, PopoverTriggerComponent, ProgressComponent, RadioComponent, RadioGroupComponent, RatingComponent, RowComponent, SelectComponent, SelectItemComponent, type SkeletonAnimation, SkeletonComponent, type SkeletonVariant, SliderComponent, SnackbarComponent, type SnackbarPosition, type SnackbarSeverity, type SpeedDialAction, SpeedDialComponent, StepperComponent, SwitchComponent, TabComponent, TabListComponent, TabPanelComponent, TableBodyComponent, TableComponent, TableHeaderComponent, TabsComponent, TextFieldComponent, TimeFieldComponent, TimelineComponent, type TimelineItem, TooltipButtonComponent, TooltipComponent, TooltipTriggerComponent, type TreeNode, TreeViewComponent, type TypographyAlign, type TypographyColor, TypographyComponent, type TypographyVariant };
