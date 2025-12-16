import { HTMLAttributes } from "react";

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export type SkeletonAnimation = 'pulse' | 'wave' | false;

export interface BaseSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    width?: string | number;
    height?: string | number;
    className?: string;
}
