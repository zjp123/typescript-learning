// import * as React from 'react';
// import { Component } from 'react';
// import type { ReactText } from 'react';
// import type { NoticeProps } from './Notice';
export interface NoticeProps {
    prefixCls: string;
    style?: any;
    className?: string;
    duration?: number | null;
    children?: any;
    updateMark?: string;
    /** Mark as final key since set maxCount may keep the key but user pass key is different */
    noticeKey: any;
    closeIcon?: any;
    closable?: boolean;
    props?: any;
    onClick?: any;
    onClose?: (key: any) => void;
    /** @private Only for internal usage. We don't promise that we will refactor this */
    holder?: HTMLDivElement;
    /** @private Provided by CSSMotionList */
    visible?: boolean;
}
export interface NoticeContent extends Omit<NoticeProps, 'prefixCls' | 'children' | 'noticeKey' | 'onClose'> {
    prefixCls?: string;
    key?: any;
    updateMark?: string;
    content?: any;
    onClose?: () => void;
}
export declare type NoticeFunc = (noticeProps: NoticeContent) => void;
export declare type HolderReadyCallback = (div: HTMLDivElement, noticeProps: NoticeProps & {
    key: any;
}) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    removeNotice: (key) => void;
    destroy: () => void;
    component: Notification;
    useNotification: () => [NoticeFunc, any];
}
export interface NotificationProps {
    prefixCls?: string;
    className?: string;
    // style?: React.CSSProperties;
    transitionName?: string;
    animation?: string | object;
    maxCount?: number;
    // closeIcon?: React.ReactNode;
}
interface NotificationState {
    notices: {
        notice: NoticeContent & {
            userPassKey?: any;
        };
        holderCallback?: HolderReadyCallback;
    }[];
}
class Foo {}
declare class Notification extends Foo {
    static newInstance: (properties: NotificationProps & {
        getContainer?: () => HTMLElement;
    }, callback: (instance: NotificationInstance) => void) => void;
    static defaultProps: {
        prefixCls: string;
        animation: string;
        style: {
            top: number;
            left: string;
        };
    };
    state: NotificationState;
    /**
     * @private Internal props do not call it directly.
     * We do not make this as private is caused TS will trade private as
     * different prop that between es and lib
     */
    // hookRefs: Map<React.Key, HTMLDivElement>;
    getTransitionName(): string;
    add: (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => void;
    // remove: (removeKey: React.Key) => void;
    noticePropsMap: Record<any, {
        props: NoticeProps & {
            key: any
        };
        holderCallback?: HolderReadyCallback;
    }>;
    // render(): JSX.Element;
}
export default Notification;
