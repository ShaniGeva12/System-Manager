import * as React from 'react';
import style from './../styles/layout.module.scss'
import { Responsive, WidthProvider,Layout, Layouts  } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);


const basicLayout: Layout[] =  [
    { i: "1", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "2", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "3", x: 4, y: 0, w: 1, h: 2 }
  ];

const layouts: Layouts = {lg: basicLayout, md: basicLayout};

function BodyLayout() {
    
    return (
        <>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                <div className={style.item} key="1">1</div>
                <div className={style.item} key="2">2</div>
                <div className={style.item} key="3">3</div>
            </ResponsiveGridLayout>
        </>
    )
}
export default BodyLayout;