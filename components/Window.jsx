import { Icon } from '@iconify/react';
import WindowContent from './WindowContent';

const Window = ({ window, onMouseDown, onClose, deletedItems, setDeletedItems, onOpenWindow }) => {
  return (
    <div
      className="absolute"
      style={{ 
        left: `${window.x}px`, 
        top: `${window.y}px`, 
        width: `${window.width}px`, 
        height: `${window.height}px`,
        zIndex: window.zIndex 
      }}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl h-full border border-gray-700/50 animate-fadeIn flex flex-col">
        <div 
          className="bg-gray-800/90 rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-gray-700/50 cursor-move"
          onMouseDown={(e) => onMouseDown(e, window.id)}
        >
          <div className="flex items-center space-x-3">
            <Icon icon={window.icon} className="w-5 h-5 text-gray-400" />
            <span className="text-white font-medium">{window.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"></button>
            <button 
              onClick={() => onClose(window.id)}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"
            ></button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <WindowContent window={window} deletedItems={deletedItems} setDeletedItems={setDeletedItems} onOpenWindow={onOpenWindow} />
        </div>
      </div>
    </div>
  );
};

export default Window;
