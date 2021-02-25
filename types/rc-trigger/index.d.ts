declare module 'rc-trigger' {
  import * as React from 'react'

  type IAlignConfig = {
    /**
     * move point of source node to align with point of target node, such as ['tr','cc'], align top right point of source node with center point of target node. point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
     */
    points?: [string, string]

    /**
     * offset source node by offset[0] in x and offset[1] in y. If offset contains percentage string value, it is relative to sourceNode region.
     */
    offset?: [number, number]

    /**
     * offset target node by offset[0] in x and offset[1] in y. If targetOffset contains percentage string value, it is relative to targetNode region.
     */
    targetOffset?: [number, number]

    /**
     * if adjustX field is true, then will adjust source node in x direction if source node is invisible. if adjustY field is true, then will adjust source node in y direction if source node is invisible.
     */
    overflow?: {
      adjustX: boolean
      adjustY: boolean
    }

    /**
     * whether use css right instead of left to position
     */
    useCssRight?: boolean

    /**
     * whether use css bottom instead of top to position
     */
    useCssBottom?: boolean

    /**
     * whether use css transform instead of left/top/right/bottom to position if browser supports. Defaults to false.
     */
    useCssTransform?: boolean
  }

  type ITriggerProps = {
    /**
     * @default false
     * Popup will align with mouse position (support action of 'click', 'hover' and 'contextMenu')
     */
    alignPoint: boolean

    /**
     * additional className added to popup
     */
    popupClassName: string

    /**
     * @default false
     * whether render popup before first show
     */
    forceRender: boolean

    /**
     * @default false
     * whether destroy popup when hide
     */
    destroyPopupOnHide: boolean

    /**
     * additional className added to popup according to align
     */
    getPopupClassNameFromAlign(align: any): string

    /**
     * which actions cause popup shown. enum of 'hover','click','focus','contextMenu'
     */
    action: ('hover' | 'click' | 'focus' | 'contextMenu')[]

    /**
     * @default 0
     * delay time to show when mouse enter. unit: s.
     */
    mouseEnterDelay: number

    /**
     * @default 0.1
     * delay time to hide when mouse leave. unit: s.
     */
    mouseLeaveDelay: number

    /**
     * additional style of popup
     */
    popupStyle: React.CSSProperties

    /**
     * @default "rc-trigger-popup"
     * prefix className
     */
    prefixCls: string

    popupTransitionName: string | {}

    maskTransitionName: string | {}

    /**
     * call when popup visible is changed
     */
    onPopupVisibleChange: Function

    /**
     * @default false
     * whether to support mask
     */
    mask: boolean

    /**
     * @default true
     * whether to support click mask to hide
     */
    maskClosable: boolean

    /**
     * whether popup is visible
     */
    popupVisible: boolean

    /**
     * popup's zIndex
     */
    zIndex: number

    /**
     * whether popup is visible initially
     */
    defaultPopupVisible: boolean

    /**
     * popup 's align config, `alignConfig` of dom-align
     */
    popupAlign: IAlignConfig

    /**
     * callback when popup node is aligned
     */
    onPopupAlign: (popupDomNode, align) => void

    /**
     * popup content
     */
    popup: React.ReactElement | (() => React.ReactElement)

    /**
     * function returning html node which will act as popup container
     */
    getPopupContainer: () => HTMLElement

    /**
     * function returning document node which will be attached click event to close trigger
     */
    getDocument: () => HTMLElement

    /**
     * use preset popup align config from builtinPlacements, can be merged by popupAlign prop
     */
    popupPlacement: string

    /**
     * builtin placement align map. used by placement prop
     */
    builtinPlacements: {}

    /**
     * Let popup div stretch with trigger element. enums of 'width', 'minWidth', 'height', 'minHeight'. (You can also mixed with 'height minWidth')
     */
    stretch: string
  }

  type Optional<T, K> = { [P in Extract<keyof T, K>]?: T[P] }
  type Required<T, K> = { [P in Extract<keyof T, K>]-?: T[P] }
  type WithRequired<T, K extends keyof T> = T extends never
    ? never
    : Optional<T, Exclude<keyof T, K>> & Required<T, K>

  export default class Trigger extends React.Component<
    WithRequired<ITriggerProps, 'popup'>,
    any
  > {}
}
