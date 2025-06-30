import * as React from "react";
import { IconButton } from "@components/1-action/IconButton";
import { NumberButton } from "@components/0-common";
import { cn } from "../../../utils/cn";

interface PagenationProps {
  id: string;
  className?: string;
  value?: number;
  total: number;
  maxLength?: number;
}

export const Pagenation: React.FC<PagenationProps> = ({
  id,
  className = "",
  value = 1,
  total,
  maxLength = 7,
}) => {
  const [currentPage, setCurrentPage] = React.useState(value);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  // 表示項目の配列を生成
  const displayArray = () => {
    if (total <= 1) return []; // ページが1以下の場合は何も表示しない

    const pages: (string | number)[] = [];

    // ページがmaxLength以下の場合、すべて表示
    if (total <= maxLength) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1); //先頭ページ

      // 先頭から近い場合
      if (currentPage < maxLength - 2) {
        for (let i = 2; i < maxLength - 1; i++) {
          pages.push(i);
        }
        pages.push("…");
      }

      // 最終ページに近い場合
      else if (currentPage > total - (maxLength - 3)) {
        pages.push("…");
        for (let i = total - (maxLength - 3); i < total; i++) {
          pages.push(i);
        }
      }

      //そのほか
      else {
        pages.push("…");

        const sidePages = Math.floor((maxLength - 5) / 2);
        for (
          let i = currentPage - sidePages;
          i <= currentPage + sidePages;
          i++
        ) {
          pages.push(i);
        }
        if ((maxLength - 5) % 2 === 1) {
          pages.push(currentPage + sidePages + 1);
        }
        pages.push("…");
      }
      pages.push(total); //最終ページ
    }

    return pages;
  };

  return (
    <>
      {total < 2 ? null : (
        <div id={id} className={className}>
          <div className="flex justify-center space-x-1">
            <IconButton
              icon={"chevron_left"}
              checked={false}
              onClick={() => handleChange(currentPage - 1)}
              disabled={currentPage === 1}
            />

            {displayArray().map((page, index) =>
              typeof page === "number" ? (
                <div
                  key={index}
                  className={cn(
                    page === currentPage
                      ? "rounded-full bg-black-10-opacity"
                      : ""
                  )}
                >
                  <NumberButton
                    id={page.toString()}
                    number={page.toString()}
                    onClick={() => handleChange(page)}
                  />
                </div>
              ) : (
                <span key={index} className="px-2">
                  {page}
                </span>
              )
            )}

            <IconButton
              icon={"chevron_right"}
              checked={false}
              onClick={() => handleChange(currentPage + 1)}
              disabled={currentPage === total}
            />
          </div>
        </div>
      )}
    </>
  );
};
Pagenation.displayName = "Pagenation";
