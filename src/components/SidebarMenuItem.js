import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { sidemenu_data } from "./sidemenu_data"

const SidebarMenuItem = () => {
    return (
        <div className='sidebarMenu'>
            {
                sidemenu_data?.map((item, index) => {
                    const Svg = item.svg
                    return <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div>
                                    <Svg />
                                    <span className='title' >   {item.title} </span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {console.log("list", item.list)}
                                <ul>
                                    {item.list?.map((options, index) => (
                                        <li>
                                            <a href= '#'>
                                            {options}
                                            </a>
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
