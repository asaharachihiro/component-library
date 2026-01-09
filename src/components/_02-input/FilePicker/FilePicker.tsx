import * as React from "react";
import { Button } from "@components/_01-action/Button";
import { IconButton } from "@components/_01-action/IconButton";
import { cn } from "../../../utils/cn";

interface FilePickerProps {
  id: string;
  className?: string;
  fileFormats?: string[];
  disabled?: boolean;
  isMultiple?: boolean;
  onChange?: (files: File[]) => void;
}

export const FilePicker: React.FC<FilePickerProps> = ({
  id,
  className = "",
  fileFormats = [],
  disabled = false,
  isMultiple = false,
  onChange,
  ...props
}) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleOpenFolder = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // ファイル選択時の処理
  const onSelectFiles = (files: File[]) => {
    if (files.length === 0) {
      return;
    }
    if (onChange) {
      onChange(files);
    }
    setFiles(files);
  };

  // 対象のファイルを削除
  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // ドラッグ＆ドロップ時の処理
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    onSelectFiles(droppedFiles);
  };

  // スタイルの設定
  const containerStyle = cn(
    "flex flex-wrap justify-center gap-6 rounded-lg border border-black-20-opacity p-4",
    isDragging && "bg-black-5-opacity"
  );
  const iconStyle = "material-symbols-rounded mr-2 select-none text-black-sub";
  const fileItemsStyle =
    "mt-2 flex items-center rounded-lg typo-title-md transition-all";
  return (
    <div>
      <div
        className={containerStyle}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          id={id}
          ref={inputRef}
          type="file"
          className="hidden"
          data-testid="file-input"
          multiple={isMultiple}
          accept={fileFormats.join(",")}
          disabled={disabled}
          onChange={(e) => {
            const selectedFiles = Array.from(e.target.files || []);
            onSelectFiles(selectedFiles);
            e.target.value = "";
          }}
          {...props}
        />
        <div className="typo-title-md flex items-center">
          <span className={iconStyle}>upload</span>
          <div className="flex flex-col">
            <span className="typo-label-sm mb-2">
              ファイルをドラッグ＆ドロップ
            </span>
            <span className="typo-label-sm text-black-sub">
              対応ファイル形式は{fileFormats.join(" ")}です。
            </span>
          </div>
        </div>

        <Button
          id="filePickerButton"
          icon="folder_open"
          variant="secondary"
          size="m"
          className="flex"
          onClick={handleOpenFolder}
          label="ファイルを選択"
          disabled={disabled}
        />
      </div>
      {files &&
        files.map((file, index) => (
          <div key={index} className={fileItemsStyle}>
            <span className={iconStyle}>upload_file</span>
            <span className="typo-body-md mx-2">{file.name}</span>
            <IconButton
              icon="close"
              className="m-1"
              onClick={() => handleDeleteFile(index)}
            />
          </div>
        ))}
    </div>
  );
};
FilePicker.displayName = "FilePicker";
