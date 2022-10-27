import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { SideMenuData } from "./SideMenuData"

const SidebarMenuItem = () => {
    return (
        <div className='sidebarMenu'>
            {
                SideMenuData?.map((item, i) => {
                    return <Accordion key={i}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <div>
                                    {item.svg}
                                    <span className='title' > {item.title} </span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {item.list?.map((options, i) => (
                                        <li key={i}>
                                            <a href= '#'> {options} </a>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                })
            }
        </div>
    )
}

export default SidebarMenuItem
