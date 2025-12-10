'use client';;
import * as React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import {
  useFloating,
  autoUpdate,
  offset as floatingOffset,
  flip,
  shift,
  arrow as floatingArrow,
  FloatingPortal,
  FloatingArrow,
} from '@floating-ui/react';

import { getStrictContext } from '@/lib/get-strict-context';
import { Slot } from '@/components/animate-ui/primitives/animate/slot';

const [GlobalTooltipProvider, useGlobalTooltip] =
  getStrictContext('GlobalTooltipProvider');

const [LocalTooltipProvider, useTooltip] = getStrictContext('LocalTooltipProvider');

function getResolvedSide(placement) {
  if (placement.includes('-')) {
    return placement.split('-')[0];
  }
  return placement;
}

function initialFromSide(side) {
  if (side === 'top') return { y: 15 };
  if (side === 'bottom') return { y: -15 };
  if (side === 'left') return { x: 15 };
  return { x: -15 };
}

function TooltipProvider({
  children,
  id,
  openDelay = 700,
  closeDelay = 300,
  transition = { type: 'spring', stiffness: 300, damping: 35 }
}) {
  const globalId = React.useId();
  const [currentTooltip, setCurrentTooltip] =
    React.useState(null);
  const timeoutRef = React.useRef(null);
  const lastCloseTimeRef = React.useRef(0);
  const referenceElRef = React.useRef(null);

  const showTooltip = React.useCallback((data) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (currentTooltip !== null) {
      setCurrentTooltip(data);
      return;
    }
    const now = Date.now();
    const delay = now - lastCloseTimeRef.current < closeDelay ? 0 : openDelay;
    timeoutRef.current = window.setTimeout(() => setCurrentTooltip(data), delay);
  }, [openDelay, closeDelay, currentTooltip]);

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentTooltip(null);
      lastCloseTimeRef.current = Date.now();
    }, closeDelay);
  }, [closeDelay]);

  const hideImmediate = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentTooltip(null);
    lastCloseTimeRef.current = Date.now();
  }, []);

  const setReferenceEl = React.useCallback((el) => {
    referenceElRef.current = el;
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') hideImmediate();
    };
    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('scroll', hideImmediate, true);
    window.addEventListener('resize', hideImmediate, true);
    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('scroll', hideImmediate, true);
      window.removeEventListener('resize', hideImmediate, true);
    };
  }, [hideImmediate]);

  return (
    <GlobalTooltipProvider
      value={{
        showTooltip,
        hideTooltip,
        hideImmediate,
        currentTooltip,
        transition,
        globalId: id ?? globalId,
        setReferenceEl,
        referenceElRef,
      }}>
      <LayoutGroup>{children}</LayoutGroup>
      <TooltipOverlay />
    </GlobalTooltipProvider>
  );
}

const [RenderedTooltipProvider, useRenderedTooltip] =
  getStrictContext('RenderedTooltipContext');

const [FloatingProvider, useFloatingContext] =
  getStrictContext('FloatingContext');

const MotionTooltipArrow = motion.create(FloatingArrow);

function TooltipArrow({
  ref,
  withTransition = true,
  ...props
}) {
  const { side, align, open } = useRenderedTooltip();
  const { context, arrowRef } = useFloatingContext();
  const { transition, globalId } = useGlobalTooltip();
  React.useImperativeHandle(ref, () => arrowRef.current);

  const deg = { top: 0, right: 90, bottom: 180, left: -90 }[side];

  return (
    <MotionTooltipArrow
      ref={arrowRef}
      context={context}
      data-state={open ? 'open' : 'closed'}
      data-side={side}
      data-align={align}
      data-slot="tooltip-arrow"
      style={{ rotate: deg }}
      layoutId={withTransition ? `tooltip-arrow-${globalId}` : undefined}
      transition={withTransition ? transition : undefined}
      {...props} />
  );
}

function TooltipPortal(props) {
  return <FloatingPortal {...props} />;
}

function TooltipOverlay() {
  const { currentTooltip, transition, globalId, referenceElRef } =
    useGlobalTooltip();

  const [rendered, setRendered] = React.useState({ data: null, open: false });

  const arrowRef = React.useRef(null);

  const side = rendered.data?.side ?? 'top';
  const align = rendered.data?.align ?? 'center';

  const { refs, x, y, strategy, context, update } = useFloating({
    placement: align === 'center' ? side : `${side}-${align}`,
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset({
        mainAxis: rendered.data?.sideOffset ?? 0,
        crossAxis: rendered.data?.alignOffset ?? 0,
      }),
      flip(),
      shift({ padding: 8 }),
      floatingArrow({ element: arrowRef }),
    ],
  });

  React.useEffect(() => {
    if (currentTooltip) {
      setRendered({ data: currentTooltip, open: true });
    } else {
      setRendered((p) => (p.data ? { ...p, open: false } : p));
    }
  }, [currentTooltip]);

  React.useLayoutEffect(() => {
    if (referenceElRef.current) {
      refs.setReference(referenceElRef.current);
      update();
    }
  }, [referenceElRef, refs, update, rendered.data]);

  const ready = x != null && y != null;
  const Component = rendered.data?.contentAsChild ? Slot : motion.div;
  const resolvedSide = getResolvedSide(context.placement);

  return (
    <AnimatePresence mode="wait">
      {rendered.data && ready && (
        <TooltipPortal>
          <div
            ref={refs.setFloating}
            data-slot="tooltip-overlay"
            data-side={resolvedSide}
            data-align={rendered.data.align}
            data-state={rendered.open ? 'open' : 'closed'}
            style={{
              position: strategy,
              top: 0,
              left: 0,
              zIndex: 50,
              transform: `translate3d(${x}px, ${y}px, 0)`,
            }}>
            <FloatingProvider value={{ context, arrowRef }}>
              <RenderedTooltipProvider
                value={{
                  side: resolvedSide,
                  align: rendered.data.align,
                  open: rendered.open,
                }}>
                <Component
                  data-slot="tooltip-content"
                  data-side={resolvedSide}
                  data-align={rendered.data.align}
                  data-state={rendered.open ? 'open' : 'closed'}
                  layoutId={`tooltip-content-${globalId}`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    ...initialFromSide(rendered.data.side),
                  }}
                  animate={
                    rendered.open
                      ? { opacity: 1, scale: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          scale: 0,
                          ...initialFromSide(rendered.data.side),
                        }
                  }
                  exit={{
                    opacity: 0,
                    scale: 0,
                    ...initialFromSide(rendered.data.side),
                  }}
                  onAnimationComplete={() => {
                    if (!rendered.open)
                      setRendered({ data: null, open: false });
                  }}
                  transition={transition}
                  {...rendered.data.contentProps}
                  style={{
                    position: 'relative',
                    ...(rendered.data.contentProps?.style || {}),
                  }} />
              </RenderedTooltipProvider>
            </FloatingProvider>
          </div>
        </TooltipPortal>
      )}
    </AnimatePresence>
  );
}

function Tooltip({
  children,
  side = 'top',
  sideOffset = 0,
  align = 'center',
  alignOffset = 0
}) {
  const id = React.useId();
  const [props, setProps] = React.useState({});
  const [asChild, setAsChild] = React.useState(false);

  return (
    <LocalTooltipProvider
      value={{
        props,
        setProps,
        asChild,
        setAsChild,
        side,
        sideOffset,
        align,
        alignOffset,
        id,
      }}>
      {children}
    </LocalTooltipProvider>
  );
}

function shallowEqualWithoutChildren(
  a,
  b,
) {
  if (a === b) return true;
  if (!a || !b) return false;
  const keysA = Object.keys(a).filter((k) => k !== 'children');
  const keysB = Object.keys(b).filter((k) => k !== 'children');
  if (keysA.length !== keysB.length) return false;
  for (const k of keysA) {
    // @ts-expect-error index
    if (a[k] !== b[k]) return false;
  }
  return true;
}

function TooltipContent({
  asChild = false,
  ...props
}) {
  const { setProps, setAsChild } = useTooltip();
  const lastPropsRef = React.useRef(undefined);

  React.useEffect(() => {
    if (!shallowEqualWithoutChildren(lastPropsRef.current, props)) {
      lastPropsRef.current = props;
      setProps(props);
    }
  }, [props, setProps]);

  React.useEffect(() => {
    setAsChild(asChild);
  }, [asChild, setAsChild]);

  return null;
}

function TooltipTrigger({
  ref,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onPointerDown,
  asChild = false,
  ...props
}) {
  const {
    props: contentProps,
    asChild: contentAsChild,
    side,
    sideOffset,
    align,
    alignOffset,
    id,
  } = useTooltip();
  const {
    showTooltip,
    hideTooltip,
    hideImmediate,
    currentTooltip,
    setReferenceEl,
  } = useGlobalTooltip();

  const triggerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => triggerRef.current);

  const suppressNextFocusRef = React.useRef(false);

  const handleOpen = React.useCallback(() => {
    if (!triggerRef.current) return;
    setReferenceEl(triggerRef.current);
    const rect = triggerRef.current.getBoundingClientRect();
    showTooltip({
      contentProps,
      contentAsChild,
      rect,
      side,
      sideOffset,
      align,
      alignOffset,
      id,
    });
  }, [
    showTooltip,
    setReferenceEl,
    contentProps,
    contentAsChild,
    side,
    sideOffset,
    align,
    alignOffset,
    id,
  ]);

  const handlePointerDown = React.useCallback((e) => {
    onPointerDown?.(e);
    if (currentTooltip?.id === id) {
      suppressNextFocusRef.current = true;
      hideImmediate();
      Promise.resolve().then(() => {
        suppressNextFocusRef.current = false;
      });
    }
  }, [onPointerDown, currentTooltip?.id, id, hideImmediate]);

  const handleMouseEnter = React.useCallback((e) => {
    onMouseEnter?.(e);
    handleOpen();
  }, [handleOpen, onMouseEnter]);

  const handleMouseLeave = React.useCallback((e) => {
    onMouseLeave?.(e);
    hideTooltip();
  }, [hideTooltip, onMouseLeave]);

  const handleFocus = React.useCallback((e) => {
    onFocus?.(e);
    if (suppressNextFocusRef.current) return;
    handleOpen();
  }, [handleOpen, onFocus]);

  const handleBlur = React.useCallback((e) => {
    onBlur?.(e);
    hideTooltip();
  }, [hideTooltip, onBlur]);

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      ref={triggerRef}
      onPointerDown={handlePointerDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-slot="tooltip-trigger"
      data-side={side}
      data-align={align}
      data-state={currentTooltip?.id === id ? 'open' : 'closed'}
      {...props} />
  );
}

export { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger, TooltipArrow, useGlobalTooltip, useTooltip };
