import React from 'react';
import './styles.scss';

interface IPageBaseProps {
    id?: string;
}

const PageBase: React.FC<IPageBaseProps> = (props) => {
    return (
        <div className='page-base' id={props.id}>
            {props.children}
        </div>
    );
};

export default PageBase;