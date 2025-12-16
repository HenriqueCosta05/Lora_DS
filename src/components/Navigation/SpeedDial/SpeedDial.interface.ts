export interface SpeedDialAction {
    id: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

export interface BaseSpeedDialProps {
    actions: SpeedDialAction[];
    direction?: 'up' | 'down' | 'left' | 'right';
    icon?: React.ReactNode;
    openIcon?: React.ReactNode;
    className?: string;
}
