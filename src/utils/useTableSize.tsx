import { useState, useEffect, useRef } from "react";

const useTableSize = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tableWidth, setTableWidth] = useState<number>(0);

  useEffect(() => {
    const updateTableWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width > 0) {
          setTableWidth(width);
        }
      }
    };

    // 初期サイズを設定
    updateTableWidth();

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

  return { containerRef, tableWidth };
};

export default useTableSize;
