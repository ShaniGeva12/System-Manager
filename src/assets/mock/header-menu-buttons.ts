export interface menuButton {
    displayName: string, 
    subMenu?: menuButton[]
}

export const headerMenuBtns: menuButton[] = [
    {
        displayName: 'כפתורי 0', 
        subMenu: [
            {
                displayName: 'תת-כפתור', 
                subMenu: undefined
            },
            {
                displayName: '01-תת-כפתור', 
                subMenu: undefined
            },
        ]
    },
    {
        displayName: 'כפתור 1', 
        subMenu: undefined
    },
    {
        displayName: 'כפתורי 2', 
        subMenu: [
            {
                displayName: 'תת-כפתור 02', 
                subMenu: undefined
            },
        ]
    },
    {
        displayName: 'כפתורי 3', 
        subMenu: undefined
    },
    {
        displayName: 'כפתור 4', 
        subMenu: undefined
    },
    {
        displayName: 'כפתור 5', 
        subMenu: undefined
    },
];