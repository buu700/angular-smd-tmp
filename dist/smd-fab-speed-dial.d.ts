import { EventEmitter, AfterContentInit, OnDestroy, ElementRef, Renderer2, QueryList, Injector } from "@angular/core";
import { MatAnchor, MatButton } from "@angular/material/button";
import { MatTooltip } from "@angular/material/tooltip";
export declare class SmdFabSpeedDialTrigger {
    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    spin: boolean;
    _anchors: QueryList<MatAnchor>;
    _buttons: QueryList<MatButton>;
    _tooltips: QueryList<MatTooltip>;
    isOpen: boolean;
    tooltipEventsSet: boolean;
    private readonly _parent;
    constructor(injector: Injector);
    _onClick(event: any): void;
    getAllButtons(): MatButton[];
    showTooltips(): void;
    show(): void;
    hide(): void;
}
export declare class SmdFabSpeedDialActions implements AfterContentInit {
    private renderer;
    _anchors: QueryList<MatAnchor>;
    _buttons: QueryList<MatButton>;
    _tooltips: QueryList<MatTooltip>;
    isOpen: boolean;
    tooltipEventsSet: boolean;
    private readonly _parent;
    constructor(injector: Injector, renderer: Renderer2);
    getAllButtons(): MatButton[];
    ngAfterContentInit(): void;
    private initButtonStates;
    showTooltips(): void;
    show(): void;
    hide(): void;
    private getTranslateFunction;
    private changeElementStyle;
}
export declare class SmdFabSpeedDialComponent implements AfterContentInit, OnDestroy {
    private elementRef;
    private renderer;
    private isInitialized;
    private _direction;
    private _open;
    private _animationMode;
    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     */
    fixed: boolean;
    /**
     * Whether this all tooltips should be forced open
     */
    forceTooltips: boolean;
    /**
     * Whether this speed dial is opened
     */
    get open(): boolean;
    set open(open: boolean);
    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */
    get direction(): string;
    set direction(direction: string);
    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */
    get animationMode(): string;
    set animationMode(animationMode: string);
    openChange: EventEmitter<boolean>;
    _childActions: SmdFabSpeedDialActions;
    _childTrigger: SmdFabSpeedDialTrigger;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Toggle the open state of this speed dial
     */
    toggle(): void;
    _onClick(): void;
    setActionsVisibility(): void;
    private _setElementClass;
}
/** Speed dial module. */
export declare class SmdFabSpeedDialModule {
}
