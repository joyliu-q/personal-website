import React from 'react'

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

export class NavBar extends React.Component{
    render() {
        return (
            <div>
                <h1>JOY LIU</h1>
                <Breadcrumb>
                    {this.props.breadcrumbs.map(breadcrumb => (
                        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </div>
        )
    };
}