export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
    icon?: React.ReactNode;
}

export interface BaseTreeViewProps {
    data: TreeNode[];
    defaultExpandedKeys?: string[];
    selectedKey?: string;
    onSelectionChange?: (key: string) => void;
    className?: string;
}

export interface BaseTreeItemProps {
    node: TreeNode;
    level: number;
    expandedKeys: Set<string>;
    selectedKey?: string;
    onToggle: (key: string) => void;
    onSelect: (key: string) => void;
}
