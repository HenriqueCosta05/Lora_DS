import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import { BaseTreeItemProps, BaseTreeViewProps } from "./TreeView.interface";
import styles from "./TreeView.module.css";

const TreeItem = (props: BaseTreeItemProps) => {
    const { node, level, expandedKeys, selectedKey, onToggle, onSelect } = props;

    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedKeys.has(node.id);
    const isSelected = selectedKey === node.id;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasChildren) {
            onToggle(node.id);
        }
    };

    const handleSelect = () => {
        onSelect(node.id);
    };

    return (
        <div className={styles.treeItem}>
            <div
                className={`${styles.itemContent} ${isSelected ? styles.selected : ''}`}
                style={{ paddingLeft: `${level * 24 + 8}px` }}
                onClick={handleSelect}
            >
                {hasChildren ? (
                    <button
                        className={styles.expandButton}
                        onClick={handleToggle}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                        <Icon
                            icon={isExpanded ? "mdi:chevron-down" : "mdi:chevron-right"}
                            width={20}
                            height={20}
                        />
                    </button>
                ) : (
                    <span className={styles.spacer} />
                )}
                {node.icon && <span className={styles.icon}>{node.icon}</span>}
                <span className={styles.label}>{node.label}</span>
            </div>
            {hasChildren && isExpanded && (
                <div className={styles.children}>
                    {node.children!.map((child) => (
                        <TreeItem
                            key={child.id}
                            node={child}
                            level={level + 1}
                            expandedKeys={expandedKeys}
                            selectedKey={selectedKey}
                            onToggle={onToggle}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const TreeViewComponent = (props: BaseTreeViewProps) => {
    const {
        data,
        defaultExpandedKeys = [],
        selectedKey: controlledSelectedKey,
        onSelectionChange,
        className
    } = props;

    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(
        new Set(defaultExpandedKeys)
    );
    const [internalSelectedKey, setInternalSelectedKey] = useState<string>();

    const selectedKey = controlledSelectedKey ?? internalSelectedKey;

    const handleToggle = (key: string) => {
        setExpandedKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    const handleSelect = (key: string) => {
        setInternalSelectedKey(key);
        onSelectionChange?.(key);
    };

    const treeViewClassNames = [
        styles.treeView,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={treeViewClassNames}>
            {data.map((node) => (
                <TreeItem
                    key={node.id}
                    node={node}
                    level={0}
                    expandedKeys={expandedKeys}
                    selectedKey={selectedKey}
                    onToggle={handleToggle}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
};
