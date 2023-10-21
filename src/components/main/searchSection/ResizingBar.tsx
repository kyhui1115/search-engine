import { useEffect } from 'react';

interface resizingBar {
  isResizing: boolean;
  setIsResizing: React.Dispatch<React.SetStateAction<boolean>>;
  initialX: number;
  setInitialX: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}

function ResizingBar({
  isResizing,
  setIsResizing,
  initialX,
  setInitialX,
  width,
  setWidth
}: resizingBar) {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 430 && newWidth <= 800) {
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div
      className="w-1.5 bg-blue-300 cursor-col-resize hover:bg-blue-500"
      onMouseDown={handleMouseDown}
    />
  );
}

export default ResizingBar;
