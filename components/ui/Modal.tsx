'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl'
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={`w-full ${maxWidth} bg-[#14161B] border border-[#C5A059]/30 rounded-lg shadow-2xl overflow-hidden text-[#FBF9F5] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between relative bg-[#17181C]">
          <div>
            {subtitle && (
              <span className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase font-semibold block mb-1">
                {subtitle}
              </span>
            )}
            {title && <h3 className="font-serif text-2xl text-[#FBF9F5]">{title}</h3>}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A39E93] hover:text-[#DFBA73] rounded-full hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
