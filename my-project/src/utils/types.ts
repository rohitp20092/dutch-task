export type OverviewItemType = {
    label: string;
    value: number | string;
}

export type OverviewItemProps = OverviewItemType

export type OverviewSectionProps = {
    title: string;
    items: OverviewItemType[];
}

export type Event = {
    complete: boolean;
    icon: string | any;
    airdrop: string;
    harvest: string;
    date: string;
    heading: string;
    details: string;
    cancel: string;
    success: number;
    processing: number;
    failed: number;
}

export type MenuItem = {
    label: string;
    href: string;
    comingSoon?: boolean;
}

export type Icons = {
    src: string;
    alt: string;
    color: string;
}

export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type InputProps = {
    name: string;
    id: string;
    className?: string;
    type?: string;
    placeholder?: string;
}
