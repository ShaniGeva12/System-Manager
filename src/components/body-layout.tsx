// import * as React from 'react';
import style from './../styles/layout.module.scss'
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import useMuiTheme from '../contexts/theme';
import { darkTheme } from '../styles/material/theme';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const ResponsiveGridLayout = WidthProvider(Responsive);


export interface winIfc {
    id: number,
    title: string,
    positionX: number,
    positionY: number,
    width: number;
    height: number;
}

const allWins: winIfc[] = [
    { id: 1, title: "win 1", positionX: 0, positionY: 0, width: 1, height: 2 },
    { id: 2, title: "win 2", positionX: 1, positionY: 0, width: 3, height: 2 },
    { id: 3, title: "win 3", positionX: 4, positionY: 0, width: 1, height: 2 }
];


function BodyLayout() {

    const basicLayout = allWins.map(win => {
        return {
            i: win.id,
            title: win.id.toString(),
            x: win.positionX,
            y: win.positionY,
            w: win.width,
            h: win.height
        }
    })

    const layouts: Layouts = { lg: basicLayout, md: basicLayout };


    const [wins, setWins] = useState(allWins);

    const { themeMode } = useMuiTheme();


    return (
        <>
            <Button
                onClick={() => {
                    const updateWins = [...wins, {
                        id: wins.length + 1, title: "win " + (wins.length + 1).toString(),
                        positionX: 4, positionY: 0, width: 1, height: 2
                    }];
                    setWins(updateWins);
                }}
            >
                Add Item
            </Button>

            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >

                {wins.map((win) => {
                    return (

                        <div className={style.item + (themeMode === darkTheme ? ' ' + style.dark : '')} key={win.id}> {win.title}
                            <IconButton aria-label="delete" size="small">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton >
                        </div>

                    );
                })}
            </ResponsiveGridLayout>
        </>
    )
}
export default BodyLayout;