"use client";
import { useEffect } from "react";

export function useClickOutside(ref, handler, eventType = "mousedown") {
  useEffect(() => {
    function callback(event) {
      const target = event.target

      // Do nothing if the target is not connected element with document
      if (!target || !target.isConnected) {
        return
      }

      const isOutside = Array.isArray(ref)
        ? ref
            .filter((r) => Boolean(r.current))
            .every((r) => r.current && !r.current.contains(target))
        : ref.current && !ref.current.contains(target)

      if (isOutside) {
        handler(event)
      }
    }

    window.addEventListener(eventType, callback)

    return () => {
      window.removeEventListener(eventType, callback)
    };
  }, [])
}
