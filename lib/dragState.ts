/**
 * Shared flag: true while the user is actively dragging an interactive element
 * (TiltCard, Magnetic). The page-level touch-swipe handler reads this so it
 * doesn't accidentally switch sections mid-drag.
 */
export const dragState = { active: false };
