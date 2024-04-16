export interface menuButton {
    displayName: string, 
    subMenu?: menuButton[],
    action?: ()=> unknown,
}

export const headerMenuBtns: menuButton[] = [
    {
        displayName: 'menuButton.first', 
        subMenu: [
            {
                displayName: 'subMenuButton.first.a', 
                subMenu: undefined
            },
            {
                displayName: 'subMenuButton.first.b', 
                subMenu: undefined
            },
        ]
    },
    {
        displayName: 'menuButton.second', 
        subMenu: undefined
    },
    {
        displayName: 'menuButton.third', 
        subMenu: [
            {
                displayName: 'subMenuButton.second.a', 
                subMenu: undefined
            },
        ]
    },
    {
        displayName: 'menuButton.fourth', 
        subMenu: undefined
    },
    {
        displayName: 'menuButton.fifth', 
        subMenu: undefined
    },
];