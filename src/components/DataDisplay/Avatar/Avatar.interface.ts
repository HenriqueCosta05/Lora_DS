import { HTMLAttributes } from "react";

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export type AvatarVariant = 'circular' | 'rounded' | 'square';

export interface BaseAvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    variant?: AvatarVariant;
    children?: React.ReactNode;
    className?: string;
}
