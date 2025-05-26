import { useState, useEffect, useRef } from "react";

const useTableSize = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tableWidth, setTableWidth] = useState<number>(0);
  const [tableHeight, setTableHeight] = useState<number>(0);

  useEffect(() => {
    const updateTableWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        if (width > 0 && width !== tableWidth) {
          setTableWidth(width);
        }
        if (height > 0 && height !== tableHeight) {
          setTableHeight(height);
        }
      }
    };

    // 初期サイズを遅延設定
    setTimeout(updateTableWidth, 100);

    // ResizeObserverを使用してサイズ変更を監視
    const resizeObserver = new ResizeObserver(() => {
      updateTableWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return { containerRef, tableWidth, tableHeight };
};

export default useTableSize;
