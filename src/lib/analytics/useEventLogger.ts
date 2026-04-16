'use client';

import { useContext } from 'react';
import { EventLoggerContext } from './context';

const useEventLogger = () => {
  const controller = useContext(EventLoggerContext);

  return {
    logClickEvent: controller.clickEvent,
    logSubmitEvent: controller.submitEvent,
    logPageViewEvent: controller.pageViewEvent,
    logImpressionEvent: controller.impressionEvent,
    setUserId: controller.setUserId,
    setUserProperties: controller.setUserProperties,
    reset: controller.reset,
  };
};

export default useEventLogger;
