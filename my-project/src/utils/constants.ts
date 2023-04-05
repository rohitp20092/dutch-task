import nftIcon from "../../assets/Nft.svg";
import polygonIcon from "../../assets/Polygon.svg";
import rectangleIcon from "../../assets/Rectangle.svg";
import groupIcon from "../../assets/Group.svg";
import groupIcon1 from "../../assets/Group1.svg";
import eventImg1 from "../../assets/eventImage.gif";
import eventImg2 from "../../assets/eventImage2.gif";
import { OverviewItemType, Event, MenuItem, Icons } from '../utils/types'

export const nftItems: OverviewItemType[] = [
    { label: "NFT items", value: 187 },
    { label: "Collections", value: 5 },
    { label: "Minted", value: 39 },
];

export const savedSearches: OverviewItemType[] = [
    { label: "Green apple", value: 187 },
    { label: "Christmas tree", value: '' },
];

export const recentActivity: OverviewItemType[] = [
    { label: "Settings > Account", value: '' },
    { label: "Sales reports", value: '' },
];

export const events: Event[] = [
    {
        complete: true,
        icon: eventImg1,
        airdrop: "Airdrop",
        harvest: "Harvest",
        date: "2022-09-13 08:57:15",
        heading: "Manure",
        details: "More Details",
        cancel: "Cancel",
        success: 44,
        processing: 8,
        failed: 2,
    },
    {
        complete: false,
        icon: eventImg2,
        airdrop: "Airdrop",
        harvest: "Raining",
        date: "2022-09-13 08:57:15",
        heading: "Water",
        details: "More Details",
        cancel: "Cancel",
        success: 100,
        processing: 0,
        failed: 0,
    },
];

export const menuItems: MenuItem[] = [
    { label: "Dashboard", href: "#" },
    { label: "Create", href: "#" },
    { label: "Marketplace", href: "#", comingSoon: true },
    { label: "Learn", href: "#" },
];

export const icons: Icons[] = [
    { src: nftIcon, alt: "nft", color: "bg-lime-200" },
    { src: groupIcon1, alt: "holders", color: "bg-yellow-100" },
    { src: rectangleIcon, alt: "airdrop", color: "bg-green-100" },
    { src: groupIcon, alt: "trade", color: "bg-purple-100" },
    { src: polygonIcon, alt: "sales", color: "bg-pink-100" },
];
