'use client';;
import * as React from 'react';
import { motion } from 'motion/react';

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from '@/components/animate-ui/primitives/animate/tooltip';

function AvatarContainer({
  zIndex,
  translate,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}) {
  return (
    <Tooltip
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}>
      <TooltipTrigger asChild>
        <motion.div
          data-slot="avatar-container"
          initial="initial"
          whileHover="hover"
          whileTap="hover"
          style={{ position: 'relative', zIndex }}>
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: translate },
            }}
            {...props} />
        </motion.div>
      </TooltipTrigger>
    </Tooltip>
  );
}

function AvatarGroup({
  ref,
  children,
  id,
  transition = { type: 'spring', stiffness: 300, damping: 17 },
  invertOverlap = false,
  translate = '-30%',
  openDelay = 0,
  closeDelay = 0,
  side = 'top',
  sideOffset = 25,
  align = 'center',
  alignOffset = 0,
  tooltipTransition = { type: 'spring', stiffness: 300, damping: 35 },
  style,
  ...props
}) {
  return (
    <TooltipProvider
      id={id}
      openDelay={openDelay}
      closeDelay={closeDelay}
      transition={tooltipTransition}>
      <div
        ref={ref}
        data-slot="avatar-group"
        style={{
          display: 'flex',
          alignItems: 'center',
          ...style,
        }}
        {...props}>
        {children?.map((child, index) => (
          <AvatarContainer
            key={index}
            zIndex={
              invertOverlap ? React.Children.count(children) - index : index
            }
            transition={transition}
            translate={translate}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}>
            {child}
          </AvatarContainer>
        ))}
      </div>
    </TooltipProvider>
  );
}

function AvatarGroupTooltip(props) {
  return <TooltipContent {...props} />;
}

function AvatarGroupTooltipArrow(props) {
  return <TooltipArrow {...props} />;
}

export { AvatarGroup, AvatarGroupTooltip, AvatarGroupTooltipArrow };
