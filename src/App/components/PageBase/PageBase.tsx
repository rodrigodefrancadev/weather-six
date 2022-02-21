import React, { useMemo } from 'react';
import Spinner from '../Spinner/Spinner';
import './PageBase.scss';

export type BackgrounGradient = {
    start: string;
    end: string;
}
interface IPageBaseProps {
    id?: string;
    loading?: boolean;
    backgroundGradient?: BackgrounGradient;
}

const PageBase: React.FC<IPageBaseProps> = (props) => {
    const background = useMemo(() => {
        if(!props.loading && props.backgroundGradient) {
            return `linear-gradient(180deg, ${props.backgroundGradient.start} 0%, ${props.backgroundGradient.end} 100%)`
        }
        else {
            return undefined;
        }
    }, [props.backgroundGradient, props.loading]);
    return (
        <div className='page-base' id={props.id} style={{background}}>
            {props.children}
            {props.loading && (
                <div className='loading-container'>
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default PageBase;